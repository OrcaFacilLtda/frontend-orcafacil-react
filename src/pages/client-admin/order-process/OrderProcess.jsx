import React, { useState } from "react";
import OrderProcessStyle from "./OrderProcess.Style.jsx";
import OrderSteps from "../../../components/section/order-steps/OrderSteps.jsx";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceTracking = ({ isProvider = false }) => {


    const [currentStep, setCurrentStep] = useState(2);
    const [confirmations, setConfirmations] = useState({
        1: { client: true, provider: true },
        2: { client: false, provider: false },
    });

    // Simulated data
    const client = {
        name: "Carlos Oliveira",
        address: "Rua X, SP",
        phone: "+5511999999999",
        email: "carlos@email.com",
        avatar: "https://i.pravatar.cc/80?img=12",
    };

    const provider = {
        name: "Fernanda Lima",
        address: "Av. Y, SP",
        phone: "+5511988888888",
        email: "fernanda@email.com",
        avatar: "https://i.pravatar.cc/80?img=24",
    };

    // Display opposite role
    const personToShow = isProvider ? client : provider;

    return (
        <OrderProcessStyle.Container>
            <OrderProcessStyle.Header>
                <OrderProcessStyle.TitleSection>
                    <OrderProcessStyle.Title>Service Tracking</OrderProcessStyle.Title>
                    <OrderProcessStyle.Subtitle>Request #12345 – Electrical Installation</OrderProcessStyle.Subtitle>
                </OrderProcessStyle.TitleSection>

                <OrderProcessStyle.HeaderButtons>
                    <OrderProcessStyle.RejectButton>× Reject</OrderProcessStyle.RejectButton>
                    <OrderProcessStyle.StatusBadge>⚠ In Progress</OrderProcessStyle.StatusBadge>
                </OrderProcessStyle.HeaderButtons>
            </OrderProcessStyle.Header>

            <OrderProcessStyle.Content>
                <OrderProcessStyle.LeftPanel>
                    <h3>Service Steps</h3>
                    <OrderSteps
                        currentStep={currentStep}
                        confirmations={confirmations}
                        isPrestador={isProvider}
                    />
                </OrderProcessStyle.LeftPanel>

                <OrderProcessStyle.RightPanel>
                    <OrderProcessStyle.Card>
                        <OrderProcessStyle.PersonInfo>
                            <OrderProcessStyle.PersonImage src={personToShow.avatar} alt={personToShow.name} />
                            <OrderProcessStyle.PersonName>{personToShow.name}</OrderProcessStyle.PersonName>
                            <OrderProcessStyle.PersonAddress>{personToShow.address}</OrderProcessStyle.PersonAddress>
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
                            <OrderProcessStyle.ServiceRow>
                                <OrderProcessStyle.ServiceLabel>Status:</OrderProcessStyle.ServiceLabel>
                                <OrderProcessStyle.ServiceValue>In Progress</OrderProcessStyle.ServiceValue>
                            </OrderProcessStyle.ServiceRow>
                            <OrderProcessStyle.ServiceRow>
                                <OrderProcessStyle.ServiceLabel>Deadline:</OrderProcessStyle.ServiceLabel>
                                <OrderProcessStyle.ServiceValue>None</OrderProcessStyle.ServiceValue>
                            </OrderProcessStyle.ServiceRow>
                            <OrderProcessStyle.ServiceRow>
                                <OrderProcessStyle.ServiceLabel>Start:</OrderProcessStyle.ServiceLabel>
                                <OrderProcessStyle.ServiceValue>None</OrderProcessStyle.ServiceValue>
                            </OrderProcessStyle.ServiceRow>
                            <OrderProcessStyle.ServiceRow>
                                <OrderProcessStyle.ServiceLabel>Estimated:</OrderProcessStyle.ServiceLabel>
                                <OrderProcessStyle.ServiceValue>None</OrderProcessStyle.ServiceValue>
                            </OrderProcessStyle.ServiceRow>
                        </OrderProcessStyle.ServiceDetails>
                    </OrderProcessStyle.Card>

                    <OrderProcessStyle.Card>
                        <h4>Materials Used</h4>
                        <OrderProcessStyle.MaterialsTable>
                            <OrderProcessStyle.TableHead>
                                <OrderProcessStyle.TableRow>
                                    <OrderProcessStyle.TableHeader>Material</OrderProcessStyle.TableHeader>
                                    <OrderProcessStyle.TableHeader>Qty Used</OrderProcessStyle.TableHeader>
                                </OrderProcessStyle.TableRow>
                            </OrderProcessStyle.TableHead>
                            <OrderProcessStyle.TableBody>
                                <OrderProcessStyle.TableRow>
                                    <OrderProcessStyle.TableData>-</OrderProcessStyle.TableData>
                                    <OrderProcessStyle.TableData>-</OrderProcessStyle.TableData>
                                </OrderProcessStyle.TableRow>
                            </OrderProcessStyle.TableBody>
                        </OrderProcessStyle.MaterialsTable>
                    </OrderProcessStyle.Card>
                </OrderProcessStyle.RightPanel>
            </OrderProcessStyle.Content>
        </OrderProcessStyle.Container>
    );
};

export default ServiceTracking;
