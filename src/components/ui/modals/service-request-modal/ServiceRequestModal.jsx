import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import ModalStyle from "./ServiceRequestModal.Style";
import GeneralInput from "../../general-input/GeneralInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createServiceRequest } from "../../../services/api/serviceService";
// Idealmente, usar o user do contexto de autenticação
// import { useAuth } from "../../../hooks/useAuth";

const ServiceRequestModal = ({ isOpen, onClose, providerId }) => {
    // const { user } = useAuth(); // Usar o utilizador logado
    const MOCKED_CLIENT_ID = 2; // Substituir pelo user.id do contexto

    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        if (!description.trim()) {
            Swal.fire('Atenção', 'A descrição do serviço é obrigatória.', 'warning');
            return;
        }

        const serviceData = {
            description: description,
            company: { id: providerId },
            user: { id: MOCKED_CLIENT_ID }
        };

        try {
            await createServiceRequest(serviceData);
            Swal.fire('Sucesso!', 'A sua solicitação de serviço foi enviada.', 'success');
            setDescription(''); // Limpa o campo
            onClose();
        } catch (error) {
            Swal.fire('Erro!', 'Não foi possível enviar a sua solicitação.', 'error');
        }
    };

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
                    <GeneralInput
                        label="Descrição do Serviço:"
                        placeholder="Descreva detalhadamente o serviço que precisa..."
                        as="textarea"
                        rows="4"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <ModalStyle.SubmitButton onClick={handleSubmit}>
                        Enviar Pedido
                    </ModalStyle.SubmitButton>
                </ModalStyle.Body>
            </ModalStyle.ModalContainer>
        </ModalStyle.Overlay>
    );
};

export default ServiceRequestModal;