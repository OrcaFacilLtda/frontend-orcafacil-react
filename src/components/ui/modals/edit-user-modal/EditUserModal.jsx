import React, { useState, useEffect } from "react";
import EditUserModalStyle from "./EditUserModal.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const EditUserModal = ({ isOpen, onClose, user, userType, onSave, onDelete }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (user) {
            const userData = userType === 'provider' ? user.user : user;
            const companyData = userType === 'provider' ? user.company : {};
            const categoryData = userType === 'provider' ? user.category : {};

            setFormData({
                user: { ...userData },
                company: { ...companyData },
                category: { ...categoryData },
                userType: userType
            });
        }
    }, [user, userType]);

    const handleChange = (e, model, field) => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            [model]: {
                ...prev[model],
                [field]: value
            }
        }));
    };

    const handleAddressChange = (e, field) => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            user: {
                ...prev.user,
                address: {
                    ...prev.user.address,
                    [field]: value
                }
            }
        }));
    };


    const handleSave = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <EditUserModalStyle.Overlay>
            <EditUserModalStyle.ModalContainer as="form" onSubmit={handleSave}>
                <EditUserModalStyle.Header>
                    <h3>Editar utilizador: {formData.user?.name}</h3>
                    <button type="button" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                </EditUserModalStyle.Header>

                <EditUserModalStyle.Body>
                    <EditUserModalStyle.FormGrid>
                        {/* Coluna Esquerda */}
                        <div>
                            <label>Nome:</label>
                            <input type="text" value={formData.user?.name || ''} onChange={(e) => handleChange(e, 'user', 'name')} />

                            <label>Email:</label>
                            <input type="email" value={formData.user?.email || ''} onChange={(e) => handleChange(e, 'user', 'email')} />

                            <label>Telefone:</label>
                            <input type="tel" value={formData.user?.phone || ''} onChange={(e) => handleChange(e, 'user', 'phone')} />

                            {userType === "provider" && (
                                <>
                                    <label>Razão Social:</label>
                                    <input type="text" value={formData.company?.legalName || ''} onChange={(e) => handleChange(e, 'company', 'legalName')} />

                                    <label>CNPJ:</label>
                                    <input type="text" value={formData.company?.cnpj || ''} disabled />
                                </>
                            )}
                        </div>

                        {/* Coluna Direita */}
                        <div>
                            <label>Rua:</label>
                            <input type="text" value={formData.user?.address?.street || ''} onChange={(e) => handleAddressChange(e, 'street')} />

                            <label>Bairro:</label>
                            <input type="text" value={formData.user?.address?.neighborhood || ''} onChange={(e) => handleAddressChange(e, 'neighborhood')} />

                            <label>Cidade:</label>
                            <input type="text" value={formData.user?.address?.city || ''} onChange={(e) => handleAddressChange(e, 'city')} />

                            <label>CEP:</label>
                            <input type="text" value={formData.user?.address?.zipCode || ''} onChange={(e) => handleAddressChange(e, 'zipCode')} />
                        </div>
                    </EditUserModalStyle.FormGrid>

                    <EditUserModalStyle.Buttons>
                        <button type="button" className="btn-delete" onClick={onDelete}>Apagar</button>
                        <button type="submit" className="btn-save">Guardar Alterações</button>
                    </EditUserModalStyle.Buttons>
                </EditUserModalStyle.Body>
            </EditUserModalStyle.ModalContainer>
        </EditUserModalStyle.Overlay>
    );
};

export default EditUserModal;