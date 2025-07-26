import React, { useState } from "react";
import OderDetailsStyle from "./OrderDetails.Style.jsx";
import OrderSteps from "../../../components/section/order-steps/OrderSteps.jsx";

const OrderDetails = ({ isProvider = true }) => {
    // Controle de passo e confirmações
    const [currentStep, setCurrentStep] = useState(0);
    const [confirmations, setConfirmations] = useState({
        2: { cliente: false, prestador: false },
        3: { cliente: false, prestador: false },
    });

    return (
        <OderDetailsStyle.Container>
            <OderDetailsStyle.Header>
                <OderDetailsStyle.Title>Ver detalhes do pedido</OderDetailsStyle.Title>
                <p>Solicitação #12345 - Instalação Elétrica</p>
            </OderDetailsStyle.Header>

            <OderDetailsStyle.Content>
                <OderDetailsStyle.LeftPanel>
                    <OderDetailsStyle.DescriptionBox>
                        <strong>Descrição:</strong>
                        <p>Sua solicitação foi criada com sucesso</p>
                    </OderDetailsStyle.DescriptionBox>

                    <OrderSteps currentStep={currentStep} confirmations={confirmations} isProvider={isProvider} />
                </OderDetailsStyle.LeftPanel>

                <OderDetailsStyle.RightPanel>
                    {isProvider ? (
                        <>
                            <OderDetailsStyle.ClientCard>
                                <h4>Cliente</h4>
                                <OderDetailsStyle.ClientImage src="https://i.pravatar.cc/100?img=1" alt="Foto do Cliente" />
                                <OderDetailsStyle.ClientName>Carlos Oliveira</OderDetailsStyle.ClientName>
                            </OderDetailsStyle.ClientCard>

                            <OderDetailsStyle.ServiceDetails>
                                <h4>Detalhes do Serviço</h4>
                                <OderDetailsStyle.Status>Não iniciado</OderDetailsStyle.Status>
                                <OderDetailsStyle.DetailItem><strong>Prazo:</strong> Nenhum</OderDetailsStyle.DetailItem>
                                <OderDetailsStyle.DetailItem><strong>Início:</strong> Nenhum</OderDetailsStyle.DetailItem>
                                <OderDetailsStyle.DetailItem><strong>Previsão:</strong> Nenhum</OderDetailsStyle.DetailItem>
                            </OderDetailsStyle.ServiceDetails>

                            <OderDetailsStyle.Buttons>
                                <OderDetailsStyle.AcceptButton>✓ Aceitar</OderDetailsStyle.AcceptButton>
                                <OderDetailsStyle.RejectButton>✗ Recusar</OderDetailsStyle.RejectButton>
                            </OderDetailsStyle.Buttons>
                        </>
                    ) : (
                        <>
                            <OderDetailsStyle.ProviderCard>
                                <h4>Prestador</h4>
                                <OderDetailsStyle.ClientImage src="https://i.pravatar.cc/100?img=2" alt="Foto do Prestador" />
                                <OderDetailsStyle.ClientName>Mariana Silva</OderDetailsStyle.ClientName>
                            </OderDetailsStyle.ProviderCard>

                            <OderDetailsStyle.ServiceDetails>
                                <h4>Detalhes do Serviço</h4>
                                <OderDetailsStyle.Status>Não iniciado</OderDetailsStyle.Status>
                                <OderDetailsStyle.DetailItem><strong>Prazo:</strong> Nenhum</OderDetailsStyle.DetailItem>
                                <OderDetailsStyle.DetailItem><strong>Início:</strong> Nenhum</OderDetailsStyle.DetailItem>
                                <OderDetailsStyle.DetailItem><strong>Previsão:</strong> Nenhum</OderDetailsStyle.DetailItem>
                            </OderDetailsStyle.ServiceDetails>

                            <OderDetailsStyle.Buttons>
                                <OderDetailsStyle.CancelButton>Cancelar Solicitação</OderDetailsStyle.CancelButton>
                            </OderDetailsStyle.Buttons>
                        </>
                    )}
                </OderDetailsStyle.RightPanel>
            </OderDetailsStyle.Content>
        </OderDetailsStyle.Container>
    );
};

export default OrderDetails;
