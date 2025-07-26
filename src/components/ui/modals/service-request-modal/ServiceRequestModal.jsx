import React from "react";
import ModalStyle from "./ServiceRequestModal.Style";
import GeneralInput from "../../general-input/GeneralInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ServiceRequestModal = ({ isOpen, onClose, serviceId }) => {
    if (!isOpen) return null;

    return (
        <ModalStyle.Overlay>
            <ModalStyle.ModalContainer>
                <ModalStyle.Header>
                    <h3>Solicitar Serviço</h3>
                    <ModalStyle.CloseButton onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </ModalStyle.CloseButton>
                </ModalStyle.Header>

                <ModalStyle.Body>
                    <ModalStyle.InputRow>
                        <GeneralInput label="Categoria do Serviço:" as="select">
                            <option>Selecione uma categoria</option>
                            <option>Elétrica</option>
                            <option>Hidráulica</option>
                        </GeneralInput>

                        <GeneralInput label="Endereço do serviço:" as="select">
                            <option>Selecione o endereço</option>
                            <option>Rua A, 123</option>
                        </GeneralInput>
                    </ModalStyle.InputRow>

                    <GeneralInput label="Tema do problema:" />
                    <GeneralInput
                        label="Descrição do Serviço:"
                        placeholder="Descreva detalhadamente o serviço que precisa..."
                        as="textarea"
                        rows="4"
                    />

                    <ModalStyle.SubmitButton>Solicitar pedido</ModalStyle.SubmitButton>
                </ModalStyle.Body>
            </ModalStyle.ModalContainer>
        </ModalStyle.Overlay>
    );
};

export default ServiceRequestModal;
