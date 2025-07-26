import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CategoryStyle from './EditCategoryModal.Style.jsx';

const EditCategoryModal = ({ isOpen, onClose, category, onSubmit }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        status: '',
    });

    // Preenche o form quando a categoria muda
    useEffect(() => {
        if (category) {
            setFormData({
                id: category.id || '',
                name: category.name || '',
                description: category.description || '',
                status: category.status || '',
            });
        }
    }, [category]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (formData.name && formData.status) {
            onSubmit(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <CategoryStyle.ModalOverlay>
            <CategoryStyle.ModalContainer>
                <CategoryStyle.ModalHeader>
                    <h3>Editar categoria:</h3>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </CategoryStyle.ModalHeader>

                <CategoryStyle.ModalBody>
                    <CategoryStyle.FormRow>
                        <CategoryStyle.FormControl>
                            <CategoryStyle.Label>Nome da Categoria</CategoryStyle.Label>
                            <CategoryStyle.Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nome"
                            />
                        </CategoryStyle.FormControl>
                    </CategoryStyle.FormRow>

                    <CategoryStyle.FormRow>
                        <CategoryStyle.FormControl>
                            <CategoryStyle.Label>Descrição</CategoryStyle.Label>
                            <CategoryStyle.Textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Descrição"
                            />
                        </CategoryStyle.FormControl>
                    </CategoryStyle.FormRow>

                    <CategoryStyle.FormRow>
                        <CategoryStyle.FormControl fullWidth>
                            <CategoryStyle.Label>Status</CategoryStyle.Label>
                            <CategoryStyle.Select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="ativo">Ativo</option>
                                <option value="inativo">Inativo</option>
                            </CategoryStyle.Select>
                        </CategoryStyle.FormControl>
                    </CategoryStyle.FormRow>

                    <CategoryStyle.ButtonWrapper>
                        <CategoryStyle.SubmitButton onClick={handleSubmit}>
                            Editar
                        </CategoryStyle.SubmitButton>
                    </CategoryStyle.ButtonWrapper>
                </CategoryStyle.ModalBody>
            </CategoryStyle.ModalContainer>
        </CategoryStyle.ModalOverlay>
    );
};

export default EditCategoryModal;
