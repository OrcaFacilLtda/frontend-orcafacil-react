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
    getMaterialList,
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
    const [visitDate, setVisitDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [materials, setMaterials] = useState([]);
    const [materialName, setMaterialName] = useState('');
    const [materialQuantity, setMaterialQuantity] = useState(1);
    const [materialPrice, setMaterialPrice] = useState(0);
    const [materialList, setMaterialList] = useState([]);

    const isProvider = user?.userType === "PROVIDER";

    const fetchAllData = async () => {
        if (!serviceId) return;
        try {
            setLoading(true);
            const [serviceData, visitData, dateData, materialsData] = await Promise.all([
                getServiceDetails(serviceId),
                getVisitProposals(serviceId),
                getDateProposals(serviceId),
                getMaterialList(serviceId)
            ]);
            setService(serviceData);
            setVisitProposals(visitData);
            setDateProposals(dateData);
            setMaterialList(materialsData);
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
            Swal.fire({
                title: 'Sucesso!',
                text: 'A lista de materiais foi enviada para o cliente.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
            setMaterials([]);
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

    const handleSendVisitProposal = async () => {
        if (!visitDate) {
            showAlert("Atenção!", "Por favor, selecione uma data para a visita.", "warning");
            return;
        }
        // Converte a string "YYYY-MM-DD" para um objeto Date no fuso horário local
        const parts = visitDate.split('-');
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Mês em JS é 0-indexado
        const day = parseInt(parts[2], 10);
        const dateToSend = new Date(year, month, day);

        const proposerRole = isProvider ? "PROVIDER" : "CLIENT";
        try {
            await sendVisitProposal(service.id, dateToSend, proposerRole);
            setVisitDate('');
            await fetchAllData();
        } catch (err) {
            console.error("Erro ao enviar proposta de visita:", err);
            showAlert("Erro!", "Não foi possível enviar a proposta. Verifique se a data é futura.", "error");
        }
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
        { id: 2, name: "visit", title: "Visita Técnica", confirmed: service.clientVisitConfirmed && service.providerVisitConfirmed, lastProposal: visitProposals.length > 0 ? visitProposals[visitProposals.length - 1] : null },
        { id: 3, name: "dates", title: "Período do Serviço", confirmed: service.clientDatesConfirmed && service.providerDatesConfirmed, lastProposal: dateProposals.length > 0 ? dateProposals[dateProposals.length - 1] : null },
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
                const lastProposer = etapa.lastProposal?.proposer || etapa.lastProposal?.propeser;

                return (
                    <OrderProcessStyle.Step key={etapa.id} $active={isActive} $completed={isCompleted}>
                        <OrderProcessStyle.StepCircle status={isCompleted ? "completed" : isActive ? "active" : "pending"}>
                            {isCompleted ? <FontAwesomeIcon icon={faCheckCircle} /> : etapa.id}
                        </OrderProcessStyle.StepCircle>

                        <OrderProcessStyle.StepContent>
                            <OrderProcessStyle.StepTitle>{etapa.title}</OrderProcessStyle.StepTitle>

                            {/* ================================================================== */}
                            {/* ETAPA 2: VISITA TÉCNICA - LÓGICA DE NEGOCIAÇÃO COMPLETA           */}
                            {/* ================================================================== */}
                            {etapa.id === 2 && isActive && (
                                <div>
                                    {/* CASO 1: Nenhuma proposta foi feita ainda. */}
                                    {!etapa.lastProposal && (
                                        <>
                                            {isProvider ? (
                                                <div>
                                                    <p>Proponha uma data para a visita técnica:</p>
                                                    <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} />
                                                    <ButtonContainer>
                                                        <OrderProcessStyle.ConfirmButton onClick={handleSendVisitProposal}>
                                                            Propor Data
                                                        </OrderProcessStyle.ConfirmButton>
                                                    </ButtonContainer>
                                                </div>
                                            ) : (
                                                <OrderProcessStyle.PendingText>
                                                    Aguardando a proposta de data para visita do prestador.
                                                </OrderProcessStyle.PendingText>
                                            )}
                                        </>
                                    )}

                                    {/* CASO 2: Já existe uma proposta na mesa. */}
                                    {etapa.lastProposal && (
                                        <>
                                            {/* Subcaso 2.1: A última proposta foi feita por MIM. Agora eu espero. */}
                                            {lastProposer === user.userType ? (
                                                <OrderProcessStyle.PendingText>
                                                    Sua proposta para o dia <strong>{formatDate(etapa.lastProposal.date)}</strong> foi enviada. Aguardando a resposta do {isProvider ? 'cliente' : 'prestador'}.
                                                </OrderProcessStyle.PendingText>
                                            ) : (
                                                /* Subcaso 2.2: A última proposta foi feita pelo OUTRO. Agora eu respondo. */
                                                <div>
                                                    <OrderProcessStyle.PendingText style={{ fontWeight: 'bold', color: '#2B4C7E', marginBottom: '1rem' }}>
                                                        O {lastProposer === 'PROVIDER' ? 'prestador' : 'cliente'} propôs a data: <strong>{formatDate(etapa.lastProposal.date)}</strong>
                                                    </OrderProcessStyle.PendingText>

                                                    <ButtonContainer>
                                                        <OrderProcessStyle.ConfirmButton onClick={() => handleConfirmStep(etapa.name)}>
                                                            Aceitar Proposta
                                                        </OrderProcessStyle.ConfirmButton>
                                                    </ButtonContainer>

                                                    <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />

                                                    <div>
                                                        <p>Não pode nesta data? Envie uma contraproposta:</p>
                                                        <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} />
                                                        <ButtonContainer>
                                                            <OrderProcessStyle.ConfirmButton onClick={handleSendVisitProposal}>
                                                                Enviar Contraproposta
                                                            </OrderProcessStyle.ConfirmButton>
                                                        </ButtonContainer>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}

                            {/* ================================================================== */}
                            {/* LÓGICA DAS OUTRAS ETAPAS (MANTIDA COMO ESTAVA)                      */}
                            {/* ================================================================== */}

                            {/* ETAPA 3 */}
                            {etapa.id === 3 && isActive && (
                                <div>
                                    {/* A lógica para a Etapa 3 pode seguir o mesmo padrão de negociação, se desejado. */}
                                    <p>{etapa.lastProposal ? 'Proposta de período recebida.' : 'Aguardando proposta de período.'}</p>
                                    {/* ... (Interface de negociação de datas aqui) ... */}
                                </div>
                            )}

                            {/* ETAPA 4 */}
                            {etapa.id === 4 && isActive && isProvider && (
                                <OrderProcessStyle.MaterialForm>
                                    <p>Adicionar materiais:</p>
                                    <ul>{materials.map((mat, index) => (<li key={index}>{mat.quantity}x {mat.name} - R$ {mat.unitPrice.toFixed(2)}</li>))}</ul>
                                    <OrderProcessStyle.MaterialInputGroup>
                                        <OrderProcessStyle.StyledInput placeholder="Nome do material" value={materialName} onChange={(e) => setMaterialName(e.target.value)} />
                                        <OrderProcessStyle.StyledInput type="number" placeholder="Qtd" value={materialQuantity} onChange={(e) => setMaterialQuantity(e.target.value)} min="1" />
                                        <OrderProcessStyle.StyledInput type="number" placeholder="Preço (R$)" value={materialPrice} onChange={(e) => setMaterialPrice(e.target.value)} min="0" />
                                    </OrderProcessStyle.MaterialInputGroup>
                                    <ButtonContainer>
                                        <OrderProcessStyle.ConfirmButton onClick={handleAddMaterial}>Adicionar Item</OrderProcessStyle.ConfirmButton>
                                        <OrderProcessStyle.ConfirmButton onClick={handleSendMaterials}>Enviar Lista</OrderProcessStyle.ConfirmButton>
                                    </ButtonContainer>
                                </OrderProcessStyle.MaterialForm>
                            )}
                            {etapa.id === 4 && isActive && !isProvider && (
                                <>
                                    {materialList && materialList.length > 0 ? (
                                        <>
                                            <OrderProcessStyle.MaterialList>
                                                <strong>Materiais e Orçamento:</strong>
                                                <ul>
                                                    {materialList.map((item, index) => (
                                                        <OrderProcessStyle.MaterialListItem key={index}>
                                                            <span>{item.quantity}x {item.name}</span>
                                                            <span>R$ {(item.unitPrice * item.quantity).toFixed(2)}</span>
                                                        </OrderProcessStyle.MaterialListItem>
                                                    ))}
                                                </ul>
                                            </OrderProcessStyle.MaterialList>
                                            <ButtonContainer>
                                                <OrderProcessStyle.ConfirmButton onClick={() => handleConfirmStep(etapa.name)}>
                                                    Aceitar Orçamento
                                                </OrderProcessStyle.ConfirmButton>
                                                <OrderProcessStyle.ConfirmButton onClick={handleRequestRevision}>
                                                    Solicitar Revisão
                                                </OrderProcessStyle.ConfirmButton>
                                            </ButtonContainer>
                                        </>
                                    ) : (
                                        <OrderProcessStyle.PendingText style={{ color: '#ff9800' }}>
                                            Aguardando o envio da lista de materiais pelo prestador.
                                        </OrderProcessStyle.PendingText>
                                    )}
                                </>
                            )}

                            {/* ETAPA 5 */}
                            {etapa.id === 5 && isActive && !isProvider && (
                                <div>
                                    <p>Avalie o prestador (de 1 a 5 estrelas):</p>
                                    {[1, 2, 3, 4, 5].map((star) => (<span key={star} onClick={() => setAvaliacao(star)} style={{ cursor: "pointer", fontSize: "24px", color: star <= avaliacao ? "#ffc107" : "#e4e5e9" }}>★</span>))}
                                    <br />
                                    <ButtonContainer>
                                        <OrderProcessStyle.ConfirmButton onClick={handleEvaluation}>Finalizar e Enviar Avaliação</OrderProcessStyle.ConfirmButton>
                                    </ButtonContainer>
                                </div>
                            )}

                            {isCompleted && <OrderProcessStyle.PendingText>✔ Etapa confirmada por ambos</OrderProcessStyle.PendingText>}
                        </OrderProcessStyle.StepContent>
                    </OrderProcessStyle.Step>
                );
            })}
        </OrderProcessStyle.OrderDetailsWrapper>
    );
};

export default OrderProcess;