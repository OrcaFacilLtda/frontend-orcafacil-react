import React, { useState } from "react";
import processStyle from "./OrderProcess.Style.jsx";
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
        <processStyle.Container>
            <processStyle.Header>
                <processStyle.TitleSection>
                    <processStyle.Title>Service Tracking</processStyle.Title>
                    <processStyle.Subtitle>Request #12345 – Electrical Installation</processStyle.Subtitle>
                </processStyle.TitleSection>

                <processStyle.HeaderButtons>
                    <processStyle.RejectButton>× Reject</processStyle.RejectButton>
                    <processStyle.StatusBadge>⚠ In Progress</processStyle.StatusBadge>
                </processStyle.HeaderButtons>
            </processStyle.Header>

            <processStyle.Content>
                <processStyle.LeftPanel>
                    <h3>Service Steps</h3>
                    <OrderSteps
                        currentStep={currentStep}
                        confirmations={confirmations}
                        isPrestador={isProvider}
                    />
                </processStyle.LeftPanel>

                <processStyle.RightPanel>
                    <processStyle.Card>
                        <processStyle.PersonInfo>
                            <processStyle.PersonImage src={personToShow.avatar} alt={personToShow.name} />
                            <processStyle.PersonName>{personToShow.name}</processStyle.PersonName>
                            <processStyle.PersonAddress>{personToShow.address}</processStyle.PersonAddress>
                            <processStyle.ContactButton phone href={`tel:${personToShow.phone}`}>
                                <FontAwesomeIcon icon={faPhone} /> {personToShow.phone}
                            </processStyle.ContactButton>
                            <processStyle.ContactButton href={`mailto:${personToShow.email}`}>
                                <FontAwesomeIcon icon={faEnvelope} /> Email
                            </processStyle.ContactButton>
                        </processStyle.PersonInfo>
                    </processStyle.Card>

                    <processStyle.Card>
                        <processStyle.ServiceDetails>
                            <processStyle.ServiceRow>
                                <processStyle.ServiceLabel>Status:</processStyle.ServiceLabel>
                                <processStyle.ServiceValue>In Progress</processStyle.ServiceValue>
                            </processStyle.ServiceRow>
                            <processStyle.ServiceRow>
                                <processStyle.ServiceLabel>Deadline:</processStyle.ServiceLabel>
                                <processStyle.ServiceValue>None</processStyle.ServiceValue>
                            </processStyle.ServiceRow>
                            <processStyle.ServiceRow>
                                <processStyle.ServiceLabel>Start:</processStyle.ServiceLabel>
                                <processStyle.ServiceValue>None</processStyle.ServiceValue>
                            </processStyle.ServiceRow>
                            <processStyle.ServiceRow>
                                <processStyle.ServiceLabel>Estimated:</processStyle.ServiceLabel>
                                <processStyle.ServiceValue>None</processStyle.ServiceValue>
                            </processStyle.ServiceRow>
                        </processStyle.ServiceDetails>
                    </processStyle.Card>

                    <processStyle.Card>
                        <h4>Materials Used</h4>
                        <processStyle.MaterialsTable>
                            <processStyle.TableHead>
                                <processStyle.TableRow>
                                    <processStyle.TableHeader>Material</processStyle.TableHeader>
                                    <processStyle.TableHeader>Qty Used</processStyle.TableHeader>
                                </processStyle.TableRow>
                            </processStyle.TableHead>
                            <processStyle.TableBody>
                                <processStyle.TableRow>
                                    <processStyle.TableData>-</processStyle.TableData>
                                    <processStyle.TableData>-</processStyle.TableData>
                                </processStyle.TableRow>
                            </processStyle.TableBody>
                        </processStyle.MaterialsTable>
                    </processStyle.Card>
                </processStyle.RightPanel>
            </processStyle.Content>
        </processStyle.Container>
    );
};

export default ServiceTracking;
