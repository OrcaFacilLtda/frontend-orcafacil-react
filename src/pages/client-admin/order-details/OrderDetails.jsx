import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import OderDetailsStyle from "./OrderDetails.Style.jsx";
import OrderSteps from "../../../components/section/order-steps/OrderSteps.jsx";
import { getServiceDetails, acceptServiceRequest, rejectServiceRequest } from "../../../services/api/orderService.js";
import { useAuth } from "../../../hooks/useAuth.js";

const OrderDetails = () => {
    const { user } = useAuth();
    const isProvider = user?.userType === 'PROVIDER';
    const { id } = useParams();
    const navigate = useNavigate();

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
            } finally {
                setLoading(false);
            }
        };
        fetchServiceDetails();
    }, [id]);

    const handleAction = async (action) => {
        if (!user) {
            Swal.fire('Erro!', 'Utilizador não autenticado.', 'error');
            return;
        }

        const isAccepting = action === 'accept';
        const swalConfig = {
            title: isAccepting ? "Tem a certeza?" : "Confirmar Recusa",
            text: isAccepting ? "Está prestes a aceitar esta solicitação." : "Esta ação não pode ser desfeita.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: isAccepting ? "#3085d6" : "#d33",
            cancelButtonColor: isAccepting ? "#d33" : "#3085d6",
            confirmButtonText: isAccepting ? "Sim, aceitar!" : "Sim, recusar!",
            cancelButtonText: "Cancelar"
        };

        const result = await Swal.fire(swalConfig);

        if (result.isConfirmed) {
            try {
                const apiCall = isAccepting ? acceptServiceRequest : rejectServiceRequest;
                const updatedService = await apiCall(id, service.company.id);
                setService(updatedService);
                Swal.fire(isAccepting ? "Aceite!" : "Recusado!", `O serviço foi ${isAccepting ? 'aceite' : 'recusado'}.`, "success");
                navigate('/provider/manage-services');
            } catch (err) {
                Swal.fire("Erro!", `Não foi possível ${action === 'accept' ? 'aceitar' : 'recusar'} o serviço.`, "error");
            }
        }
    };

    if (loading) return <OderDetailsStyle.Container>A carregar...</OderDetailsStyle.Container>;
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
                        <OderDetailsStyle.ClientName>{isProvider ? personToShow.name : personToShow.legalName}</OderDetailsStyle.ClientName>
                    </OderDetailsStyle.ClientCard>

                    <OderDetailsStyle.ServiceDetails>
                        <h4>Detalhes do Serviço</h4>
                        <OderDetailsStyle.Status>{service.serviceStatus}</OderDetailsStyle.Status>
                        <OderDetailsStyle.DetailItem><strong>Data da Solicitação:</strong> {new Date(service.requestDate).toLocaleDateString()}</OderDetailsStyle.DetailItem>
                    </OderDetailsStyle.ServiceDetails>

                    {isProvider && service.serviceStatus === 'REQUEST_SENT' && (
                        <OderDetailsStyle.Buttons>
                            <OderDetailsStyle.AcceptButton onClick={() => handleAction('accept')}>✓ Aceitar</OderDetailsStyle.AcceptButton>
                            <OderDetailsStyle.RejectButton onClick={() => handleAction('reject')}>✗ Recusar</OderDetailsStyle.RejectButton>
                        </OderDetailsStyle.Buttons>
                    )}
                </OderDetailsStyle.RightPanel>
            </OderDetailsStyle.Content>
        </OderDetailsStyle.Container>
    );
};

export default OrderDetails;