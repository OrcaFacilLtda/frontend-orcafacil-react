import React from "react";
import EditUserModalStyle from "./EditUserModal.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const EditUserModal = ({ isOpen, onClose, user, userType, onSave, onDelete }) => {
    if (!isOpen) return null;

    return (
        <EditUserModalStyle.Overlay>
            <EditUserModalStyle.ModalContainer>
                <EditUserModalStyle.Header>
                    <h3>Editar usuário:</h3>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} size={20} />
                    </button>
                </EditUserModalStyle.Header>

                <EditUserModalStyle.Body>
                    <EditUserModalStyle.FormGrid>
                        {/* Esquerda */}
                        <div>
                            <label>Nome Usuário:</label>
                            <input type="text" placeholder="Nome" defaultValue={user?.name || ""} />

                            <label>Email:</label>
                            <input type="email" placeholder="Descrição" defaultValue={user?.email || ""} />

                            <label>Senha:</label>
                            <input type="password" placeholder="Senha" defaultValue={user?.password || ""} />

                            <label>Telefone:</label>
                            <input type="tel" defaultValue={user?.phone || ""} />

                            <label>CPF:</label>
                            <input type="text" defaultValue={user?.cpf || ""} />

                            {userType === "prestador" && (
                                <>
                                    <label>CNPJ:</label>
                                    <input type="text" defaultValue={user?.cnpj || ""} />

                                    <label>Função:</label>
                                    <select defaultValue={user?.role || ""}>
                                        <option value="">Selecione uma função</option>
                                        <option value="eletricista">Eletricista</option>
                                        <option value="encanador">Encanador</option>
                                        <option value="outro">Outro</option>
                                    </select>

                                    <label>Breve bibliografia:</label>
                                    <textarea defaultValue={user?.bio || ""} rows={4} />
                                </>
                            )}
                        </div>

                        {/* Direita */}
                        <div>
                            <label>UF:</label>
                            <select defaultValue={user?.uf || ""}>
                                <option value="">Selecione a UF</option>
                                <option value="SP">SP</option>
                                <option value="RJ">RJ</option>
                                <option value="MG">MG</option>
                                {/* outros estados */}
                            </select>

                            <label>Cidade:</label>
                            <input type="text" defaultValue={user?.city || ""} />

                            <label>Rua:</label>
                            <input type="text" defaultValue={user?.street || ""} />

                            <label>Bairro:</label>
                            <input type="text" defaultValue={user?.neighborhood || ""} />

                            <label>CEP:</label>
                            <input type="text" defaultValue={user?.cep || ""} />
                        </div>
                    </EditUserModalStyle.FormGrid>

                    <EditUserModalStyle.Buttons>
                        <button className="btn-delete" onClick={onDelete}>Apagar</button>
                        <button className="btn-save" onClick={onSave}>Aceitar</button>
                    </EditUserModalStyle.Buttons>
                </EditUserModalStyle.Body>
            </EditUserModalStyle.ModalContainer>
        </EditUserModalStyle.Overlay>
    );
};

export default EditUserModal;
