// src/pages/client-admin/services/Services.jsx
import React, { useState, useEffect } from "react";
import ServiceStyle from "./Services.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getServicesByProvider, getServicesByClient } from "../../../services/api/serviceService.js";

const Services = ({ isProvider = true }) => {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // IDs mockados - em um app real, viriam do contexto de autenticação (useAuth)
    const MOCKED_USER_ID = 1;
    const MOCKED_COMPANY_ID = 1;

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                setError('');
                let data;
                if (isProvider) {
                    data = await getServicesByProvider(MOCKED_COMPANY_ID);
                } else {
                    data = await getServicesByClient(MOCKED_USER_ID);
                }


                const inProgressServices = data.filter(service =>
                    ![ 'REQUEST_SENT', 'REJECTED', 'COMPLETED' ].includes(service.serviceStatus)
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
    }, [isProvider]);


    const handleViewService = (id) => {
        const basePath = isProvider ? "/provider" : "/client";
        navigate(`${basePath}/manage-services/${id}`);
    };

    if (loading) return <ServiceStyle.Container><h2>Carregando serviços...</h2></ServiceStyle.Container>;
    if (error) return <ServiceStyle.Container><h2 style={{color: 'red'}}>{error}</h2></ServiceStyle.Container>;


    return (
        <ServiceStyle.Container>
            <ServiceStyle.Header>
                <h2>Gerenciar Serviços</h2>
                <p>Acompanhe suas solicitações e orçamentos em andamento</p>
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
                            {/* Mostra uma prévia da descrição como título */}
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