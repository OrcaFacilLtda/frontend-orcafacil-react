import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import ModalStyle from "./ServiceRequestModal.Style";
import GeneralInput from "../../general-input/GeneralInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createServiceRequest } from "../../../services/api/serviceService";
import { getAllCategories } from "../../../services/api/categoryService";
// import { useAuth } from "../../../hooks/useAuth"; // Idealmente, usar o user do contexto

const ServiceRequestModal = ({ isOpen, onClose, providerId }) => {
    // const { user } = useAuth(); // Usar o utilizador logado
    const MOCKED_CLIENT_ID = 2; // Substituir pelo user.id do contexto

    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        description: '',
        company: { id: providerId },
        user: { id: MOCKED_CLIENT_ID }
    });

    useEffect(() => {
        if(isOpen) {
            const fetchCategories = async () => {
                const cats = await getAllCategories();
                setCategories(cats || []);
            };
            fetchCategories();
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.description.trim() || !formData.company.id) {
            Swal.fire('Atenção', 'A descrição do serviço é obrigatória.', 'warning');
            return;
        }

        try {
            await createServiceRequest(formData);
            Swal.fire('Sucesso!', 'A sua solicitação de serviço foi enviada.', 'success');
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
                        value={formData.description}
                        onChange={handleChange}
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