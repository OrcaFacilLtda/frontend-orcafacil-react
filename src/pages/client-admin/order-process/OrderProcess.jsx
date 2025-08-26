import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderProcessStyle from "./OrderProcess.Style.jsx";
import OrderSteps from "../../../components/section/order-steps/OrderSteps.jsx";
import { getServiceDetails } from "../../../services/api/oderService.js";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../../hooks/useAuth.js";

const statusToStepMap = {
    'REQUEST_SENT': 1, 'NEGOTIATING_VISIT': 2, 'VISIT_CONFIRMED': 3,
    'NEGOTIATING_DATES': 3, 'DATES_CONFIRMED': 4, 'BUDGET_IN_NEGOTIATION': 4,
    'BUDGET_REVISION_REQUESTED': 4, 'IN_PROGRESS': 5, 'COMPLETED': 6, 'REJECTED': -1,
};

const OrderProcess = () => {
    const { user } = useAuth();
    const isProvider = user?.userType === 'PROVIDER';
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchService = async () => {
        try {
            setLoading(true);
            const data = await getServiceDetails(id);
            setService(data);
            setError('');
        } catch (err) {
            setError("Falha ao carregar os detalhes do processo.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(id) fetchService();
    }, [id]);

    if (loading) return <OrderProcessStyle.Container>A carregar...</OrderProcessStyle.Container>;
    if (error) return <OrderProcessStyle.Container><p style={{ color: 'red' }}>{error}</p></OrderProcessStyle.Container>;
    if (!user || !service) return <OrderProcessStyle.Container>Serviço não encontrado ou utilizador não autenticado.</OrderProcessStyle.Container>;

    const personToShow = isProvider ? service.user : service.company;
    const currentStep = statusToStepMap[service.serviceStatus] || 0;

    return (
        <OrderProcessStyle.Container>
            <OrderProcessStyle.Header>
                <OrderProcessStyle.TitleSection>
                    <OrderProcessStyle.Title>Acompanhamento do Serviço</OrderProcessStyle.Title>
                    <OrderProcessStyle.Subtitle>Solicitação #{service.id} – {service.description.substring(0, 50)}...</OrderProcessStyle.Subtitle>
                </OrderProcessStyle.TitleSection>
                <OrderProcessStyle.StatusBadge>{service.serviceStatus.replace('_', ' ')}</OrderProcessStyle.StatusBadge>
            </OrderProcessStyle.Header>

            <OrderProcessStyle.Content>
                <OrderProcessStyle.LeftPanel>
                    <h3>Etapas do Serviço</h3>
                    <OrderSteps
                        serviceData={service}
                        currentStep={currentStep}
                        isProvider={isProvider}
                        userId={user.id}
                        onUpdate={fetchService}
                    />
                </OrderProcessStyle.LeftPanel>

                <OrderProcessStyle.RightPanel>
                    <OrderProcessStyle.Card>
                        <OrderProcessStyle.PersonInfo>
                            <OrderProcessStyle.PersonImage src={`https://i.pravatar.cc/80?img=${personToShow.id}`} alt={personToShow.name} />
                            <OrderProcessStyle.PersonName>{isProvider ? personToShow.name : personToShow.legalName}</OrderProcessStyle.PersonName>
                            <OrderProcessStyle.PersonAddress>{personToShow.address?.city}, {personToShow.address?.state}</OrderProcessStyle.PersonAddress>
                            <OrderProcessStyle.ContactButton phone href={`tel:${personToShow.phone}`}>
                                <FontAwesomeIcon icon={faPhone} /> {personToShow.phone}
                            </OrderProcessStyle.ContactButton>
                            <OrderProcessStyle.ContactButton href={`mailto:${personToShow.email}`}>
                                <FontAwesomeIcon icon={faEnvelope} /> Email
                            </OrderProcessStyle.ContactButton>
                        </OrderProcessStyle.PersonInfo>
                    </OrderProcessStyle.Card>
                </OrderProcessStyle.RightPanel>
            </OrderProcessStyle.Content>
        </OrderProcessStyle.Container>
    );
};

export default OrderProcess;