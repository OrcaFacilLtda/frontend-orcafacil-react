import React, { useState, useEffect } from "react";
import ServiceStyle from "./Services.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getServicesByProvider, getServicesByClient } from "../../../services/api/serviceService.js";
import { useAuth } from "../../../hooks/useAuth.js"; // 1. Importar o useAuth

const Services = () => {
    const { user } = useAuth(); // 2. Usar o hook para obter o utilizador logado
    const isProvider = user?.userType === 'PROVIDER';
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // 3. Garantir que o código só executa se o utilizador estiver carregado
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
                    // 4. Usar o ID real do utilizador (que é o mesmo que o companyId para o prestador)
                    data = await getServicesByProvider(user.id);
                } else {
                    // 4. Usar o ID real do cliente
                    data = await getServicesByClient(user.id);
                }

                // Filtra para mostrar apenas serviços que estão "em andamento"
                const inProgressServices = data.filter(service =>
                    !['REQUEST_SENT', 'REJECTED', 'COMPLETED'].includes(service.serviceStatus)
                );

                setServices(inProgressServices);

            } catch (err) {
                setError("Falha ao carregar os serviços.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, [user, isProvider]); // A dependência agora é o objeto 'user'


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
                    <input type="text" placeholder="Pesquisar por nome do cliente/prestador" />
                </ServiceStyle.SearchInputWrapper>

                <ServiceStyle.Select>
                    <option>Todos os Status</option>
                    <option>NEGOTIATING_VISIT</option>
                    <option>IN_PROGRESS</option>
                </ServiceStyle.Select>
                <ServiceStyle.Button>Filtrar</ServiceStyle.Button>
            </ServiceStyle.FilterArea>

            {services.length === 0 && !loading ? (
                <p>Nenhum serviço em andamento encontrado.</p>
            ) : (
                services.map((service, index) => (
                    <ServiceStyle.Card key={index}>
                        <ServiceStyle.TitleRow>
                            <h3>{service.description.substring(0, 50)}...</h3>
                            <ServiceStyle.Status status={service.serviceStatus}>
                                {service.serviceStatus.replace('_', ' ')}
                            </ServiceStyle.Status>
                        </ServiceStyle.TitleRow>
                        <ServiceStyle.Info>
                            {isProvider ? (
                                <>Cliente: {service.user.name}</>
                            ) : (
                                <>Prestador: {service.company.legalName}</>
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
        </ServiceStyle.Container>
    );
};

export default Services;