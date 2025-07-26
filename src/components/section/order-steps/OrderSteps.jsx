import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faCalendarAlt,
    faClipboardList,
    faTags,
} from "@fortawesome/free-solid-svg-icons";
import OrderStepsStyle from "./OrderSteps.Style.jsx";

const steps = [
    { id: 1, title: "Solicitação Criada", description: "Sua solicitação foi criada com sucesso", requiresConfirmation: false },
    { id: 2, title: "Aguardando Confirmação de Visita", description: "Confirme a visita técnica agendada", requiresConfirmation: true },
    { id: 3, title: "Enviar Prazo", description: "Faça o envio do prazo", requiresConfirmation: true },
    { id: 4, title: "Orçamento", description: "Aguardando orçamento do prestador", requiresConfirmation: true },
    { id: 5, title: "Execução do Serviço", description: "Serviço será executado", requiresConfirmation: false },
    { id: 6, title: "Finalização", description: "Confirmar conclusão e avaliação", requiresConfirmation: true },
];

const OrderSteps = ({ currentStep, confirmations = {}, isPrestador = true }) => {
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

                                        {/* Cliente age somente se o prestador já preencheu os dados */}
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
