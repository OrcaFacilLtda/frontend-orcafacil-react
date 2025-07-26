import React from "react";
import ServiceStyle from "./Services.Style.jsx";
import services from "./Service.js";
import CategoryStyle from "../../admin/category/Category.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Services = ({ isProvider = true }) => {
    const navigate = useNavigate();

    const handleViewService = (id) => {
        const basePath = isProvider ? "/provider" : "/client";
        navigate(`${basePath}/manage-services/${id}`);
    };

    return (
        <ServiceStyle.Container>
            <ServiceStyle.Header>
                <h2>Gerenciar Serviços</h2>
                <p>Gerencie suas solicitações e orçamentos</p>
            </ServiceStyle.Header>

            <ServiceStyle.FilterArea>
                <CategoryStyle.SearchInputWrapper>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Pesquisar por nome" />
                </CategoryStyle.SearchInputWrapper>

                <ServiceStyle.Select>
                    <option>Todos os Status</option>
                    <option>Em andamento</option>
                    <option>Finalizado</option>
                    <option>Cancelado</option>
                </ServiceStyle.Select>
                <ServiceStyle.Button>Filtrar</ServiceStyle.Button>
            </ServiceStyle.FilterArea>

            {services.map((service, index) => (
                <ServiceStyle.Card key={index}>
                    <ServiceStyle.TitleRow>
                        <h3>{service.title}</h3>
                        <ServiceStyle.Status status={service.status}>
                            {service.status}
                        </ServiceStyle.Status>
                    </ServiceStyle.TitleRow>
                    <ServiceStyle.Info>
                        {isProvider ? (
                            <>Cliente: {service.client}</>
                        ) : (
                            <>Prestador: {service.provider}</>
                        )}
                        <br />
                        Solicitado em: {service.date}
                    </ServiceStyle.Info>
                    <ServiceStyle.Description>{service.description}</ServiceStyle.Description>
                    <ServiceStyle.ActionButton onClick={() => handleViewService(service.id)}>
                        Ver situação
                    </ServiceStyle.ActionButton>
                </ServiceStyle.Card>
            ))}
        </ServiceStyle.Container>
    );
};

export default Services;
