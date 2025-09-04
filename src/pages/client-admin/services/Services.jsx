import React, { useState, useEffect } from "react";
import ServiceStyle from "./Services.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getServicesByProvider, getServicesByClient } from "../../../services/api/serviceService.js";
import { useAuth } from "../../../hooks/useAuth.js";

const STATUS_MAP = {
    REQUEST_SENT: "Solicitação enviada",
    REJECTED: "Rejeitado",
    NEGOTIATING_VISIT: "Negociando visita",
    VISIT_CONFIRMED: "Visita confirmada",
    NEGOTIATING_DATES: "Negociando datas",
    BUDGET_IN_NEGOTIATION: "Orçamento em negociação",
    IN_PROGRESS: "Em andamento",
    COMPLETED: "Concluído"
};

const Services = () => {
    const { user, providerData } = useAuth();
    const isProvider = user?.userType === 'PROVIDER';
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        const fetchServices = async () => {
            try {
                setLoading(true);
                setError('');
                let data;

                if (isProvider) {
                    const companyId = providerData?.company?.id;
                    if (!companyId) {
                        setError("Empresa do prestador não encontrada.");
                        setLoading(false);
                        return;
                    }

                    data = await getServicesByProvider(companyId);
                } else {
                    data = await getServicesByClient(user.id);
                }

                setServices(data);
                setFilteredServices(data);
            } catch (err) {
                setError("Falha ao carregar os serviços.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, [user, providerData, isProvider]);

    const handleFilter = () => {
        let temp = [...services];

        // Filtro por busca
        if (searchTerm.trim() !== '') {
            const term = searchTerm.toLowerCase();
            temp = temp.filter(service => {
                if (isProvider) return service.user?.name?.toLowerCase().includes(term);
                return service.company?.legalName?.toLowerCase().includes(term);
            });
        }

        // Filtro por status
        if (statusFilter !== '') {
            temp = temp.filter(service => service.serviceStatus === statusFilter);
        }

        setFilteredServices(temp);
    };

    const handleViewService = (id) => {
        const basePath = isProvider ? "/provider" : "/client";
        navigate(`${basePath}/manage-services/${id}`);
    };

    if (loading) return <ServiceStyle.Container><h2>A carregar serviços...</h2></ServiceStyle.Container>;
    if (error) return <ServiceStyle.Container><h2 style={{color: 'red'}}>{error}</h2></ServiceStyle.Container>;

    return (
        <ServiceStyle.Container>
            <ServiceStyle.Header>
                <h2>Gerenciar Serviços</h2>
                <p>Acompanhe as suas solicitações e orçamentos em andamento</p>
            </ServiceStyle.Header>

            <ServiceStyle.FilterArea>
                <ServiceStyle.SearchInputWrapper>
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        placeholder="Pesquisar por nome do cliente/prestador"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </ServiceStyle.SearchInputWrapper>

                <ServiceStyle.Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">Todos os Status</option>
                    {Object.keys(STATUS_MAP).map(status => (
                        <option key={status} value={status}>{STATUS_MAP[status]}</option>
                    ))}
                </ServiceStyle.Select>

                <ServiceStyle.Button onClick={handleFilter}>Filtrar</ServiceStyle.Button>
            </ServiceStyle.FilterArea>

            <ServiceStyle.ServicesList>
                {filteredServices.length === 0 ? (
                    <p>Nenhum serviço em andamento encontrado.</p>
                ) : (
                    filteredServices.map((service, index) => (
                        <ServiceStyle.Card key={index}>
                            <ServiceStyle.TitleRow>
                                <h3>{service.description.substring(0, 50)}...</h3>
                                <ServiceStyle.Status status={STATUS_MAP[service.serviceStatus]}>
                                    {STATUS_MAP[service.serviceStatus] || service.serviceStatus}
                                </ServiceStyle.Status>
                            </ServiceStyle.TitleRow>
                            <ServiceStyle.Info>
                                {isProvider ? (
                                    <>Cliente: {service.user?.name || 'Não informado'}</>
                                ) : (
                                    <>Prestador: {service.company?.legalName || 'Aguardando aceitação'}</>
                                )}
                                <br />
                                Solicitado em: {new Date(service.requestDate).toLocaleDateString()}
                            </ServiceStyle.Info>
                            <ServiceStyle.Description>{service.description}</ServiceStyle.Description>
                            <ServiceStyle.ActionButton onClick={() => handleViewService(service.id)}>
                                Ver situação
                            </ServiceStyle.ActionButton>
                        </ServiceStyle.Card>
                    ))
                )}
            </ServiceStyle.ServicesList>
        </ServiceStyle.Container>
    );
};

export default Services;
