import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CategoryStyle from './EditCategoryModal.Style.jsx';

const EditCategoryModal = ({ isOpen, onClose, category, onSubmit }) => {
    const [formData, setFormData] = useState({ id: '', name: '', description: '' });

    useEffect(() => {
        if (category) {
            setFormData({
                id: category.id || '',
                name: category.name || '',
                description: category.description || '',
            });
        }
    }, [category]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <CategoryStyle.ModalOverlay>
            <CategoryStyle.ModalContainer as="form" onSubmit={handleSubmit}>
                <CategoryStyle.ModalHeader>
                    <h3>Editar categoria:</h3>
                    <button type="button" onClick={onClose}>
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
                                required
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

                    <CategoryStyle.ButtonWrapper>
                        <CategoryStyle.SubmitButton type="submit">
                            Guardar Alterações
                        </CategoryStyle.SubmitButton>
                    </CategoryStyle.ButtonWrapper>
                </CategoryStyle.ModalBody>
            </CategoryStyle.ModalContainer>
        </CategoryStyle.ModalOverlay>
    );
};

export default EditCategoryModal;