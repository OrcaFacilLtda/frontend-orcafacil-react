// src/pages/client-admin/order-process/OrderProcess.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import OrderProcessStyle from "./OrderProcess.Style.jsx";
import OrderSteps from "../../../components/section/order-steps/OrderSteps.jsx";
import { getServiceDetails } from "../../../services/api/oderService.js";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const statusToStepMap = {
    'REQUEST_SENT': 1,
    'NEGOTIATING_VISIT': 2,
    'VISIT_CONFIRMED': 3,
    'NEGOTIATING_DATES': 3,
    'DATES_CONFIRMED': 4,
    'BUDGET_IN_NEGOTIATION': 4,
    'BUDGET_REVISION_REQUESTED': 4,
    'IN_PROGRESS': 5,
    'COMPLETED': 6,
    'REJECTED': -1,
};


const OrderProcess = ({ isProvider = false }) => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const MOCKED_LOGGED_IN_USER_ID = 1;

    const fetchService = async () => {
        try {
            setLoading(true);
            const data = await getServiceDetails(id);
            setService(data);
            setError('');
        } catch (err) {
            setError("Falha ao carregar os detalhes do processo.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchService();
    }, [id]);

    if (loading) return <OrderProcessStyle.Container>Carregando...</OrderProcessStyle.Container>;
    if (error) return <OrderProcessStyle.Container><p style={{ color: 'red' }}>{error}</p></OrderProcessStyle.Container>;
    if (!service) return <OrderProcessStyle.Container>Serviço não encontrado.</OrderProcessStyle.Container>;

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
                        userId={MOCKED_LOGGED_IN_USER_ID}
                        onUpdate={fetchService}
                    />
                </OrderProcessStyle.LeftPanel>

                <OrderProcessStyle.RightPanel>
                    <OrderProcessStyle.Card>
                        <OrderProcessStyle.PersonInfo>
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

                    <OrderProcessStyle.Card>
                        <OrderProcessStyle.ServiceDetails>
                        </OrderProcessStyle.ServiceDetails>
                    </OrderProcessStyle.Card>
                </OrderProcessStyle.RightPanel>
            </OrderProcessStyle.Content>
        </OrderProcessStyle.Container>
    );
};

export default OrderProcess;