// src/pages/client-admin/order-details/OrderDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import OderDetailsStyle from "./OrderDetails.Style.jsx";
import OrderSteps from "../../../components/section/order-steps/OrderSteps.jsx";
import { getServiceDetails, acceptServiceRequest, rejectServiceRequest } from "../../../services/api/oderService.js";

const OrderDetails = ({ isProvider = true }) => {
    const { id } = useParams(); // Pega o ID da URL
    const navigate = useNavigate();

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // ID mockado do prestador logado. Em um app real, viria do useAuth().
    const MOCKED_PROVIDER_COMPANY_ID = 1;

    useEffect(() => {
        const fetchServiceDetails = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const data = await getServiceDetails(id);
                setService(data);
                setError('');
            } catch (err) {
                setError("Não foi possível carregar os detalhes do serviço.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchServiceDetails();
    }, [id]);

    const handleAccept = async () => {
        Swal.fire({
            title: "Você tem certeza?",
            text: "Você está prestes a aceitar esta solicitação de serviço.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, aceitar!",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const updatedService = await acceptServiceRequest(id, MOCKED_PROVIDER_COMPANY_ID);
                    setService(updatedService); // Atualiza o estado com o novo status
                    Swal.fire("Aceito!", "O serviço foi aceito com sucesso.", "success");
                    navigate('/provider/manage-services'); // Redireciona para a tela de gerenciamento
                } catch (err) {
                    Swal.fire("Erro!", "Não foi possível aceitar o serviço.", "error");
                }
            }
        });
    };

    const handleReject = async () => {
        Swal.fire({
            title: "Confirmar Recusa",
            text: "Tem certeza que deseja recusar este serviço? Esta ação não pode ser desfeita.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sim, recusar!",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const updatedService = await rejectServiceRequest(id, MOCKED_PROVIDER_COMPANY_ID);
                    setService(updatedService);
                    Swal.fire("Recusado!", "O serviço foi recusado.", "success");
                    navigate('/provider/manage-services');
                } catch (err) {
                    Swal.fire("Erro!", "Não foi possível recusar o serviço.", "error");
                }
            }
        });
    };

    if (loading) return <OderDetailsStyle.Container>Carregando...</OderDetailsStyle.Container>;
    if (error) return <OderDetailsStyle.Container><p style={{color: 'red'}}>{error}</p></OderDetailsStyle.Container>;
    if (!service) return <OderDetailsStyle.Container>Serviço não encontrado.</OderDetailsStyle.Container>;

    const personToShow = isProvider ? service.user : service.company;
    const personType = isProvider ? 'Cliente' : 'Prestador';

    return (
        <OderDetailsStyle.Container>
            <OderDetailsStyle.Header>
                <OderDetailsStyle.Title>Ver detalhes do pedido</OderDetailsStyle.Title>
                <p>Solicitação #{service.id} - {service.description.substring(0, 30)}...</p>
            </OderDetailsStyle.Header>

            <OderDetailsStyle.Content>
                <OderDetailsStyle.LeftPanel>
                    <OderDetailsStyle.DescriptionBox>
                        <strong>Descrição Completa:</strong>
                        <p>{service.description}</p>
                    </OderDetailsStyle.DescriptionBox>
                    <OrderSteps currentStep={0} isProvider={isProvider} />
                </OderDetailsStyle.LeftPanel>

                <OderDetailsStyle.RightPanel>
                    <OderDetailsStyle.ClientCard>
                        <h4>{personType}</h4>
                        <OderDetailsStyle.ClientImage src={`https://i.pravatar.cc/100?img=${personToShow.id}`} alt={`Foto do ${personType}`} />
                        <OderDetailsStyle.ClientName>{isProvider ? personToShow.name : personToShow.legalName}</OderDetailsStyle.ClientName>
                    </OderDetailsStyle.ClientCard>

                    <OderDetailsStyle.ServiceDetails>
                        <h4>Detalhes do Serviço</h4>
                        <OderDetailsStyle.Status>{service.serviceStatus}</OderDetailsStyle.Status>
                        <OderDetailsStyle.DetailItem><strong>Data da Solicitação:</strong> {new Date(service.requestDate).toLocaleDateString()}</OderDetailsStyle.DetailItem>
                        <OderDetailsStyle.DetailItem><strong>Prazo:</strong> Nenhum</OderDetailsStyle.DetailItem>
                        <OderDetailsStyle.DetailItem><strong>Início:</strong> Nenhum</OderDetailsStyle.DetailItem>
                    </OderDetailsStyle.ServiceDetails>

                    {isProvider && service.serviceStatus === 'REQUEST_SENT' && (
                        <OderDetailsStyle.Buttons>
                            <OderDetailsStyle.AcceptButton onClick={handleAccept}>✓ Aceitar</OderDetailsStyle.AcceptButton>
                            <OderDetailsStyle.RejectButton onClick={handleReject}>✗ Recusar</OderDetailsStyle.RejectButton>
                        </OderDetailsStyle.Buttons>
                    )}

                    {!isProvider && (
                        <OderDetailsStyle.Buttons>
                            <OderDetailsStyle.CancelButton>Cancelar Solicitação</OderDetailsStyle.CancelButton>
                        </OderDetailsStyle.Buttons>
                    )}

                </OderDetailsStyle.RightPanel>
            </OderDetailsStyle.Content>
        </OderDetailsStyle.Container>
    );
};

export default OrderDetails;