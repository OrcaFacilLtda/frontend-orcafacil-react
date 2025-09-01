import React, { useState, useEffect } from "react";
import RequestServiceStyle from "./RequestService.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faFileAlt, faThumbsUp, faHourglassHalf, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ServiceRequestModal from "../../../components/ui/modals/service-request-modal/ServiceRequestModal.jsx";
import { getActiveProviders, getProviderStatsKPI } from "../../../services/api/providerService.js";
import { getServicesByProvider } from "../../../services/api/serviceService.js";
import { useAuth } from "../../../hooks/useAuth.js";

const RequestService = () => {
    const { user, providerData } = useAuth();
    const navigate = useNavigate();

    const isClient = user?.userType === 'CLIENT';
    const [listData, setListData] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProviderId, setSelectedProviderId] = useState(null);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                setError('');

                if (isClient) {
                    const providers = await getActiveProviders();
                    setListData(providers);
                } else {
                    if (providerData && providerData.company) {
                        const companyId = providerData.company.id;
                        const [providerServices, providerStats] = await Promise.all([
                            getServicesByProvider(companyId),
                            getProviderStatsKPI(companyId)
                        ]);

                        const requestSentServices = providerServices.filter(s => s.serviceStatus === 'REQUEST_SENT');

                        setListData(requestSentServices);
                        setStats(providerStats);
                    } else if (user.userType === 'PROVIDER') {
                        setLoading(true);
                    }
                }

            } catch (err) {
                setError("Falha ao carregar dados. Tente novamente mais tarde.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user, isClient, providerData]);

    const handleOpenModal = (providerId) => {
        setSelectedProviderId(providerId);
        setIsModalOpen(true);
    };

    const handleViewService = (id) => navigate(`/provider/services/${id}`);

    const summaryData = stats ? [
        { title: "Novos Pedidos", value: stats.newRequests?.length ?? 0, icon: <FontAwesomeIcon icon={faFileAlt} />, color: "#DBEAFE" },
        { title: "Aceitos Hoje", value: stats.acceptedToday?.length ?? 0, icon: <FontAwesomeIcon icon={faThumbsUp} />, color: "#dbf9eb" },
        { title: "Pendentes", value: stats.pendingServices?.length ?? 0, icon: <FontAwesomeIcon icon={faHourglassHalf} />, color: "#fff5db" },
        { title: "Taxa Aceitação", value: stats.acceptanceRate != null ? `${stats.acceptanceRate.toFixed(0)}%` : "0%", icon: <FontAwesomeIcon icon={faChartLine} />, color: "#f4e8ff" }
    ] : [];

    if (loading) return <RequestServiceStyle.Container>A carregar...</RequestServiceStyle.Container>;
    if (error) return <RequestServiceStyle.Container><p style={{color: 'red'}}>{error}</p></RequestServiceStyle.Container>;

    return (
        <>
            <RequestServiceStyle.Container>
                <RequestServiceStyle.Header>
                    <h2>{isClient ? "Prestadores" : "Serviços"}</h2>
                    <p>{isClient ? "Encontre o profissional ideal para o seu serviço" : "Gerencie as suas solicitações de orçamento"}</p>
                </RequestServiceStyle.Header>

                {!isClient && stats && (
                    <RequestServiceStyle.SummaryGrid>
                        {summaryData.map((item, i) => (
                            <RequestServiceStyle.SummaryItem key={i}>
                                <RequestServiceStyle.TextContainer>
                                    <RequestServiceStyle.SummaryTitle>{item.title}</RequestServiceStyle.SummaryTitle>
                                    <RequestServiceStyle.SummaryValue>{item.value}</RequestServiceStyle.SummaryValue>
                                </RequestServiceStyle.TextContainer>
                                <RequestServiceStyle.SummaryIcon color={item.color}>{item.icon}</RequestServiceStyle.SummaryIcon>
                            </RequestServiceStyle.SummaryItem>
                        ))}
                    </RequestServiceStyle.SummaryGrid>
                )}

                <RequestServiceStyle.RecentArea>
                    <RequestServiceStyle.RecentTitle>
                        {isClient ? "Profissionais disponíveis" : "Solicitações Recentes"}
                    </RequestServiceStyle.RecentTitle>

                    <RequestServiceStyle.ServiceList>
                        {listData && listData.map((item, i) => (
                            <RequestServiceStyle.ServiceItem key={i}>
                                <RequestServiceStyle.ServiceInfo>
                                    <RequestServiceStyle.ClientName>{isClient ? item.user.name : item.user?.name || 'Cliente não encontrado'}</RequestServiceStyle.ClientName>
                                    <RequestServiceStyle.ServiceName>{isClient ? item.category.name : item.description}</RequestServiceStyle.ServiceName>
                                    {!isClient && <RequestServiceStyle.ServiceTime>{new Date(item.requestDate).toLocaleDateString()}</RequestServiceStyle.ServiceTime>}
                                </RequestServiceStyle.ServiceInfo>
                                {isClient && (
                                    <RequestServiceStyle.HireButton onClick={() => handleOpenModal(item.company.id)}>
                                        Contratar
                                    </RequestServiceStyle.HireButton>
                                )}
                                {!isClient && (
                                    <RequestServiceStyle.ViewButton onClick={() => handleViewService(item.id)}>
                                        <FontAwesomeIcon icon={faComments} /> Ver serviço
                                    </RequestServiceStyle.ViewButton>
                                )}
                            </RequestServiceStyle.ServiceItem>
                        ))}
                    </RequestServiceStyle.ServiceList>
                </RequestServiceStyle.RecentArea>
            </RequestServiceStyle.Container>

            <ServiceRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                providerId={selectedProviderId}
            />
        </>
    );
};

export default RequestService;