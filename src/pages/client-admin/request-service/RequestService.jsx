import React, { useState } from "react";
import RequestServiceStyle from "./RequestService.Style.jsx";

import { summaryData, recentServices } from "./Request.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faSearch } from "@fortawesome/free-solid-svg-icons"
    ;
import { useNavigate } from "react-router-dom";
import ServiceRequestModal from "../../../components/ui/modals/service-request-modal/ServiceRequestModal.jsx";

const RequestService = ({ isClient = false }) => {
    const navigate = useNavigate();
    const [nameFilter, setNameFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    const handleViewService = (id) => {
        navigate(`/provider/services/${id}`);
    };

    const handleHire = (id) => {
        setSelectedServiceId(id);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedServiceId(null);
    };

    const filteredServices = recentServices.filter((s) => {
        const matchName = s.client.toLowerCase().includes(nameFilter.toLowerCase());
        const matchCategory = categoryFilter ? s.service === categoryFilter : true;
        return matchName && matchCategory;
    });

    return (
        <>
            <RequestServiceStyle.Container>
                <RequestServiceStyle.Header>
                    <h2>{isClient ? "Prestadores" : "Serviços"}</h2>
                    <p>{isClient
                        ? "Encontre o profissional ideal para seu serviço"
                        : "Gerencie suas solicitações de orçamento"}
                    </p>
                </RequestServiceStyle.Header>

                {!isClient && (
                    <RequestServiceStyle.SummaryGrid>
                        {summaryData.map((item, i) => (
                            <RequestServiceStyle.SummaryItem key={i}>
                                <RequestServiceStyle.TextContainer>
                                    <RequestServiceStyle.SummaryTitle>{item.title}</RequestServiceStyle.SummaryTitle>
                                    <RequestServiceStyle.SummaryValue>{item.value}</RequestServiceStyle.SummaryValue>
                                </RequestServiceStyle.TextContainer>
                                <RequestServiceStyle.SummaryIcon color={item.color}>
                                    {item.icon}
                                </RequestServiceStyle.SummaryIcon>
                            </RequestServiceStyle.SummaryItem>
                        ))}
                    </RequestServiceStyle.SummaryGrid>
                )}

                <RequestServiceStyle.RecentArea>
                    <RequestServiceStyle.RecentTitle>
                        {isClient ? "Profissionais disponíveis" : "Solicitações Recentes"}
                    </RequestServiceStyle.RecentTitle>

                    <RequestServiceStyle.FilterBox>
                        <RequestServiceStyle.Input
                            type="text"
                            placeholder="Pesquisar por nome"
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                        />
                        <RequestServiceStyle.Select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="Instalação Elétrica">Instalação Elétrica</option>
                            <option value="Reparo de Tomadas">Reparo de Tomadas</option>
                        </RequestServiceStyle.Select>
                        <RequestServiceStyle.FilterButton>
                            <FontAwesomeIcon icon={faSearch} />
                            Filtrar
                        </RequestServiceStyle.FilterButton>
                    </RequestServiceStyle.FilterBox>

                    <RequestServiceStyle.ServiceList>
                        {filteredServices.map((s, i) => (
                            <RequestServiceStyle.ServiceItem key={i}>
                                <RequestServiceStyle.Avatar src={s.avatar} />
                                <RequestServiceStyle.ServiceInfo>
                                    <RequestServiceStyle.ClientName>{s.client}</RequestServiceStyle.ClientName>
                                    <RequestServiceStyle.ServiceName>{s.service}</RequestServiceStyle.ServiceName>
                                    <RequestServiceStyle.ServiceTime>{s.time}</RequestServiceStyle.ServiceTime>
                                </RequestServiceStyle.ServiceInfo>

                                {isClient ? (
                                    <RequestServiceStyle.HireButton onClick={() => handleHire(s.id)}>
                                        Contratar
                                    </RequestServiceStyle.HireButton>
                                ) : (
                                    <RequestServiceStyle.ViewButton onClick={() => handleViewService(s.id)}>
                                        <FontAwesomeIcon icon={faComments} /> Ver serviço
                                    </RequestServiceStyle.ViewButton>
                                )}
                            </RequestServiceStyle.ServiceItem>
                        ))}
                    </RequestServiceStyle.ServiceList>
                </RequestServiceStyle.RecentArea>
            </RequestServiceStyle.Container>

            {/* Modal de solicitação de serviço */}
            {showModal && (
                <ServiceRequestModal
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    serviceId={selectedServiceId}
                />
            )}
        </>
    );
};

export default RequestService;
