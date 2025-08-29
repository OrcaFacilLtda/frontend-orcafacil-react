import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faCalendarAlt,
    faClipboardList,
    faTags,
} from "@fortawesome/free-solid-svg-icons";
import OrderStepsStyle from "./OrderProcess.Style.jsx";
import { getServiceDetails} from "../../../services/api/orderService.js";
import {useParams} from "react-router-dom";


const OrderSteps = ({ currentStep, confirmations = {}, isPrestador = true }) => {
    const { id } = useParams();

    const [visitDate, setVisitDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showRangeInput, setShowRangeInput] = useState(false);
    const [maoDeObra, setMaoDeObra] = useState("");
    const [avaliacao, setAvaliacao] = useState(0);

    const canClientAct = (stepId) => {
        if (stepId === 2) return !!visitDate;
        if (stepId === 3) return !!startDate && !!endDate;
        if (stepId === 4) return !!maoDeObra;
        return true;
    };

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDataService = async () => {
            if (!id)return;
            try {
                setLoading(true)
                const serviceDeatils= await getServiceDetails(id);
                setService(serviceDeatils);
                setError("")
            }catch (error) {
                setError("Não foi possível carregar os detalhes do serviço.")
            }finally {
                setLoading(false);
            }
        }
        fetchDataService()
    }, [id]);

    if (!service){return <div>Não foi possivel achar o serviço...</div>;}
    if (loading){return  <div>Carregando...</div>}
    if (error){return <div style={{color: 'red'}}>Erro ao carregar serviço</div>}




    return (
        <OrderStepsStyle.OrderDetailsWrapper>
            <h3>Etapas do Serviço</h3>

            {steps.map((step) => {
                const isCompleted = currentStep > step.id;
                const isActive = currentStep === step.id;
                const confirmedByBoth =
                    !step.requiresConfirmation || (confirmations[step.id]?.cliente && confirmations[step.id]?.prestador);

                return (
                    <OrderStepsStyle.Step key={step.id} active={isActive} completed={isCompleted}>
                        <OrderStepsStyle.StepCircle status={isCompleted ? "completed" : isActive ? "active" : "pending"}>
                            {isCompleted ? <FontAwesomeIcon icon={faCheckCircle} /> : step.id}
                        </OrderStepsStyle.StepCircle>

                        <OrderStepsStyle.StepContent>
                            <OrderStepsStyle.StepTitle>{step.title}</OrderStepsStyle.StepTitle>
                            <OrderStepsStyle.StepDescription>{step.description}</OrderStepsStyle.StepDescription>

                            {/* Exibição de dados preenchidos */}
                            {step.id === 2 && visitDate && (
                                <p><strong>Visita Agendada:</strong> {visitDate.toLocaleDateString()}</p>
                            )}
                            {step.id === 3 && startDate && endDate && (
                                <p><strong>Prazo:</strong> {startDate.toLocaleDateString()} até {endDate.toLocaleDateString()}</p>
                            )}

                            {isActive && !confirmedByBoth && (
                                <>
                                    <OrderStepsStyle.ActionBox>
                                        {/* Prestador age conforme a etapa */}
                                        {step.id === 2 && isPrestador && (
                                            <>
                                                <OrderStepsStyle.SecondaryButton onClick={() => setShowCalendar(!showCalendar)}>
                                                    <FontAwesomeIcon icon={faCalendarAlt} /> Agendar Visita
                                                </OrderStepsStyle.SecondaryButton>
                                            </>
                                        )}

                                        {step.id === 3 && isPrestador && (
                                            <>
                                                <OrderStepsStyle.SecondaryButton onClick={() => setShowRangeInput(!showRangeInput)}>
                                                    <FontAwesomeIcon icon={faCalendarAlt} /> Definir Prazo
                                                </OrderStepsStyle.SecondaryButton>
                                            </>
                                        )}

                                        {step.id === 4 && isPrestador && (
                                            <>
                                                <label>
                                                    Valor da Mão de Obra:
                                                    <input
                                                        type="text"
                                                        value={maoDeObra}
                                                        onChange={(e) => setMaoDeObra(e.target.value)}
                                                        style={{ marginLeft: "10px", padding: "5px", width: "120px" }}
                                                    />
                                                </label>
                                                <OrderStepsStyle.SecondaryButton style={{ marginTop: "10px" }}>
                                                    <FontAwesomeIcon icon={faClipboardList} />
                                                    Lista de Materiais
                                                </OrderStepsStyle.SecondaryButton>
                                            </>
                                        )}

                                        {!isPrestador && canClientAct(step.id) ? (
                                            <>
                                                {step.id === 4 && (
                                                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                                        <OrderStepsStyle.SecondaryButton>
                                                            <FontAwesomeIcon icon={faClipboardList} />
                                                            Ver Lista de Materiais
                                                        </OrderStepsStyle.SecondaryButton>

                                                        <OrderStepsStyle.SecondaryButton>
                                                            <FontAwesomeIcon icon={faTags} />
                                                            Solicitar Preço Mais Baixo
                                                        </OrderStepsStyle.SecondaryButton>
                                                    </div>
                                                )}

                                                {step.id === 6 && (
                                                    <>
                                                        <p>Avaliação do prestador:</p>
                                                        <div style={{ display: "flex", gap: "5px" }}>
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <span
                                                                    key={star}
                                                                    onClick={() => setAvaliacao(star)}
                                                                    style={{
                                                                        cursor: "pointer",
                                                                        fontSize: "20px",
                                                                        color: star <= avaliacao ? "#ffc107" : "#e4e5e9",
                                                                    }}
                                                                >
                                                                    ★
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        ) : !isPrestador && (
                                            <p>Aguardando o prestador antes de continuar...</p>
                                        )}

                                        {/* Botão de confirmação universal */}
                                        {canClientAct(step.id) && (
                                            <div style={{ marginTop: "10px" }}>
                                                <OrderStepsStyle.ConfirmButton>✓ Confirmar</OrderStepsStyle.ConfirmButton>
                                            </div>
                                        )}
                                    </OrderStepsStyle.ActionBox>

                                    {/* Campos interativos */}
                                    {step.id === 2 && showCalendar && (
                                        <OrderStepsStyle.CalendarWrapper>
                                            <input
                                                type="date"
                                                value={visitDate ? visitDate.toISOString().slice(0, 10) : ""}
                                                onChange={(e) => setVisitDate(e.target.value ? new Date(e.target.value) : null)}
                                                style={{ padding: "8px", borderRadius: "6px", border: "1.5px solid #ccc" }}
                                            />
                                        </OrderStepsStyle.CalendarWrapper>
                                    )}

                                    {step.id === 3 && showRangeInput && (
                                        <OrderStepsStyle.DateRangeWrapper>
                                            <OrderStepsStyle.DateLabel htmlFor="startDate">De:</OrderStepsStyle.DateLabel>
                                            <OrderStepsStyle.DateInput
                                                id="startDate"
                                                type="date"
                                                value={startDate ? startDate.toISOString().slice(0, 10) : ""}
                                                onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
                                            />

                                            <OrderStepsStyle.DateLabel htmlFor="endDate">Até:</OrderStepsStyle.DateLabel>
                                            <OrderStepsStyle.DateInput
                                                id="endDate"
                                                type="date"
                                                value={endDate ? endDate.toISOString().slice(0, 10) : ""}
                                                onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                                            />
                                        </OrderStepsStyle.DateRangeWrapper>
                                    )}
                                </>
                            )}

                            {isActive && confirmedByBoth && (
                                <OrderStepsStyle.PendingText>✔ Ambos confirmaram — pronto para próxima etapa</OrderStepsStyle.PendingText>
                            )}
                        </OrderStepsStyle.StepContent>
                    </OrderStepsStyle.Step>
                );
            })}
        </OrderStepsStyle.OrderDetailsWrapper>
    );
};

export default OrderSteps;