import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import OrderProcessStyle, { ButtonContainer } from "./OrderProcess.Style.jsx";
import {
    getServiceDetails,
    confirmServiceStep,
    sendVisitProposal,
    sendDateProposal,
    sendMaterialList,
    requestBudgetRevision,
    submitEvaluation,
    getVisitProposals,
    getDateProposals
} from "../../../services/api/orderService.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

const OrderProcess = () => {
    const { id: serviceId } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [avaliacao, setAvaliacao] = useState(0);
    const [visitProposals, setVisitProposals] = useState([]);
    const [dateProposals, setDateProposals] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [materials, setMaterials] = useState([]);
    const [materialName, setMaterialName] = useState('');
    const [materialQuantity, setMaterialQuantity] = useState(1);
    const [materialPrice, setMaterialPrice] = useState(0);

    const isProvider = user?.userType === "PROVIDER";

    const fetchAllData = async () => {
        if (!serviceId) return;
        try {
            setLoading(true);
            const [serviceData, visitData, dateData] = await Promise.all([
                getServiceDetails(serviceId),
                getVisitProposals(serviceId),
                getDateProposals(serviceId)
            ]);
            setService(serviceData);
            setVisitProposals(visitData);
            setDateProposals(dateData);
            setError("");
        } catch (err) {
            console.error(err);
            setError("Não foi possível carregar os detalhes do processo.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            await fetchAllData();
        })();
    }, [serviceId]);

    const showAlert = (title, text, icon = 'info') => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonColor: '#2B4C7E',
            cancelButtonColor: '#6c757d'
        });
    };

    const handleConfirmStep = async (stepName) => {
        if (!user || !service) return;
        try {
            await confirmServiceStep(service.id, user.id, stepName);
            await fetchAllData();
        } catch (err) { console.error(err); setError("Erro ao confirmar a etapa."); }
    };

    const handleAddMaterial = () => {
        if (!materialName || materialQuantity <= 0 || materialPrice < 0) {
            showAlert("Atenção!", "Por favor, preencha todos os campos do material corretamente.", "warning");
            return;
        }
        const newMaterial = { name: materialName, quantity: parseInt(materialQuantity, 10), unitPrice: parseFloat(materialPrice) };
        setMaterials([...materials, newMaterial]);
        setMaterialName(''); setMaterialQuantity(1); setMaterialPrice(0);
    };

    const handleSendMaterials = async () => {
        if (materials.length === 0) {
            showAlert("Atenção!", "Adicione pelo menos um material à lista antes de enviar.", "warning");
            return;
        }
        try {
            await sendMaterialList(service.id, materials);
            await fetchAllData();
        } catch (err) { console.error(err); setError("Erro ao enviar a lista de materiais."); }
    };

    const handleRequestRevision = async () => {
        if (!user || !service) return;
        try {
            await requestBudgetRevision(service.id, user.id);
            await fetchAllData();
        } catch (err) { console.error(err); setError("Erro ao solicitar a revisão."); }
    };

    const handleEvaluation = async () => {
        if (avaliacao === 0) {
            showAlert("Atenção!", "Por favor, selecione de 1 a 5 estrelas para a avaliação.", "warning");
            return;
        }
        if (!user || !service) return;
        try {
            await submitEvaluation(service.id, user.id, avaliacao);
            await fetchAllData();
        } catch (err) { console.error(err); setError("Erro ao enviar avaliação."); }
    };

    const handleSendVisitProposal = async (date) => {
        if (!date) {
            showAlert("Atenção!", "Por favor, selecione uma data para a visita.", "warning");
            return;
        }
        const proposerRole = isProvider ? "PROVIDER" : "CLIENT";
        await sendVisitProposal(service.id, date, proposerRole);
        await fetchAllData();
    };

    const handleSendDateProposals = async () => {
        if (!startDate || !endDate) {
            showAlert("Atenção!", "Por favor, selecione a data de início e de fim.", "warning");
            return;
        }
        const proposerRole = isProvider ? "PROVIDER" : "CLIENT";
        await sendDateProposal(service.id, startDate, endDate, proposerRole);
        await fetchAllData();
    };

    if (loading) return <div>Carregando...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;
    if (!service) return <div>Serviço não encontrado.</div>;

    const etapas = [
        { id: 1, name: "start", title: "Solicitação Enviada", confirmed: true },
        { id: 2, name: "visit", title: "Visita Técnica", confirmed: service.clientVisitConfirmed && service.providerVisitConfirmed, lastProposal: visitProposals[visitProposals.length - 1] },
        { id: 3, name: "dates", title: "Período do Serviço", confirmed: service.clientDatesConfirmed && service.providerDatesConfirmed, lastProposal: dateProposals[dateProposals.length - 1] },
        { id: 4, name: "materials", title: "Orçamento e Materiais", confirmed: service.clientMaterialsConfirmed && service.providerMaterialsConfirmed, canSubmitMaterials: isProvider, canRequestRevision: !isProvider },
        { id: 5, name: "finalize", title: "Finalização", confirmed: service.budgetFinalized, canEvaluate: !isProvider }
    ];

    const etapaAtualIndex = etapas.findIndex(e => !e.confirmed);
    const etapaAtual = etapaAtualIndex === -1 ? etapas.length + 1 : etapaAtualIndex + 1;

    return (
        <OrderProcessStyle.OrderDetailsWrapper>
            <h3>Etapas do Serviço</h3>
            {etapas.map((etapa) => {
                const isCompleted = etapa.id < etapaAtual;
                const isActive = etapa.id === etapaAtual;
                const lastProposer = etapa.lastProposal?.propeser || etapa.lastProposal?.proposer;
                const isMyTurn = !lastProposer || lastProposer !== user.userType;

                let canProposeDates = isMyTurn;
                if (etapa.id === 3 && !isProvider && !lastProposer) {
                    canProposeDates = false;
                }

                return (
                    <OrderProcessStyle.Step key={etapa.id} $active={isActive} $completed={isCompleted}>
                        <OrderProcessStyle.StepCircle status={isCompleted ? "completed" : isActive ? "active" : "pending"}>
                            {isCompleted ? <FontAwesomeIcon icon={faCheckCircle} /> : etapa.id}
                        </OrderProcessStyle.StepCircle>

                        <OrderProcessStyle.StepContent>
                            <OrderProcessStyle.StepTitle>{etapa.title}</OrderProcessStyle.StepTitle>

                            {isActive && etapa.lastProposal && (
                                <OrderProcessStyle.PendingText>
                                    {lastProposer === user.userType
                                        ? `Sua proposta foi enviada. Aguardando resposta.`
                                        : `O ${lastProposer === 'PROVIDER' ? 'prestador' : 'cliente'} fez uma proposta.`
                                    }
                                </OrderProcessStyle.PendingText>
                            )}
                            {etapa.id === 3 && isActive && !isProvider && !lastProposer && (
                                <OrderProcessStyle.PendingText>
                                    Aguardando a proposta de datas do prestador.
                                </OrderProcessStyle.PendingText>
                            )}

                            {isActive && (etapa.id === 2 || etapa.id === 3) && (
                                <div>
                                    {isMyTurn && etapa.lastProposal && (
                                        <ButtonContainer>
                                            <OrderProcessStyle.ConfirmButton onClick={() => handleConfirmStep(etapa.name)}>
                                                Aceitar Proposta
                                            </OrderProcessStyle.ConfirmButton>
                                        </ButtonContainer>
                                    )}

                                    {isMyTurn && (
                                        <>
                                            {etapa.id === 2 && (
                                                <div>
                                                    <p>{etapa.lastProposal ? 'Ou envie uma contraproposta:' : 'Proponha uma data para a visita técnica:'}</p>
                                                    <input type="date" onChange={(e) => handleSendVisitProposal(e.target.value)} />
                                                </div>
                                            )}
                                            {etapa.id === 3 && canProposeDates && (
                                                <div>
                                                    <p>{etapa.lastProposal ? 'Ou envie uma contraproposta:' : 'Proponha o período do serviço:'}</p>
                                                    <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                                                    <input type="date" onChange={(e) => setEndDate(e.target.value)} />
                                                    <ButtonContainer>
                                                        <OrderProcessStyle.ConfirmButton onClick={handleSendDateProposals}>
                                                            {lastProposer ? 'Enviar Contraproposta' : 'Propor Datas'}
                                                        </OrderProcessStyle.ConfirmButton>
                                                    </ButtonContainer>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}

                            {etapa.id === 4 && isActive && etapa.canSubmitMaterials && (
                                <div>
                                    <p>Adicionar materiais:</p>
                                    <ul>{materials.map((mat, index) => (<li key={index}>{mat.quantity}x {mat.name} - R$ {mat.unitPrice.toFixed(2)}</li>))}</ul>
                                    <input placeholder="Nome do material" value={materialName} onChange={(e) => setMaterialName(e.target.value)} />
                                    <input type="number" placeholder="Quantidade" value={materialQuantity} onChange={(e) => setMaterialQuantity(e.target.value)} />
                                    <input type="number" placeholder="Preço unitário" value={materialPrice} onChange={(e) => setMaterialPrice(e.target.value)} />
                                    <ButtonContainer>
                                        <OrderProcessStyle.ConfirmButton onClick={handleAddMaterial}>Adicionar Item</OrderProcessStyle.ConfirmButton>
                                        <OrderProcessStyle.ConfirmButton onClick={handleSendMaterials}>Enviar Lista</OrderProcessStyle.ConfirmButton>
                                    </ButtonContainer>
                                </div>
                            )}

                            {etapa.id === 4 && isActive && etapa.canRequestRevision && (
                                <ButtonContainer>
                                    <OrderProcessStyle.ConfirmButton onClick={() => handleConfirmStep(etapa.name)}>
                                        Aceitar Orçamento
                                    </OrderProcessStyle.ConfirmButton>
                                    <OrderProcessStyle.ConfirmButton onClick={handleRequestRevision}>Solicitar Revisão</OrderProcessStyle.ConfirmButton>
                                </ButtonContainer>
                            )}

                            {etapa.id === 5 && isActive && etapa.canEvaluate && (
                                <div>
                                    <p>Avalie o prestador (de 1 a 5 estrelas):</p>
                                    {[1, 2, 3, 4, 5].map((star) => (<span key={star} onClick={() => setAvaliacao(star)} style={{ cursor: "pointer", fontSize: "24px", color: star <= avaliacao ? "#ffc107" : "#e4e5e9" }}>★</span>))}
                                    <br/>
                                    <ButtonContainer>
                                        <OrderProcessStyle.ConfirmButton onClick={handleEvaluation}>Finalizar e Enviar Avaliação</OrderProcessStyle.ConfirmButton>
                                    </ButtonContainer>
                                </div>
                            )}

                            {isCompleted && <OrderProcessStyle.PendingText>✔ Etapa confirmada por ambos</OrderProcessStyle.PendingText>}
                            {/* ✅ CORREÇÃO APLICADA AQUI */}
                        </OrderProcessStyle.StepContent>
                    </OrderProcessStyle.Step>
                );
            })}
        </OrderProcessStyle.OrderDetailsWrapper>
    );
};

export default OrderProcess;