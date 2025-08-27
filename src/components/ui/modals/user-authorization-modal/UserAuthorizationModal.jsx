import React, { useState, useEffect } from "react";
import ModalStyle from "./UserAuthorizationModal.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import GeneralInput from "../../general-input/GeneralInput.jsx";

const UserAuthorizationModal = ({ isOpen, onClose, onSubmit, user }) => {
    const [status, setStatus] = useState(user?.status || 'PENDING');

    useEffect(() => {
        setStatus(user?.status || 'PENDING');
    }, [user]);

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!user) return; // evita erro se user ainda não estiver definido
        onSubmit(user.id, status);
    };

    return (
        <ModalStyle.Overlay>
            <ModalStyle.ModalContainer>
                <ModalStyle.Header>
                    <h3>Autorizar Utilizador:</h3>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </ModalStyle.Header>

                <ModalStyle.Body>
                    <GeneralInput label="Nome:" defaultValue={user?.name || ""} readOnly />
                    <GeneralInput label="Email:" defaultValue={user?.email || ""} readOnly />
                    <GeneralInput label="Tipo:" defaultValue={user?.role || ""} readOnly />

                    <GeneralInput
                        label="Status:"
                        as="select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="PENDING">Pendente</option>
                        <option value="APPROVED">Aprovado</option>
                        <option value="BLOCKED">Bloqueado</option>
                    </GeneralInput>

                    <ModalStyle.Footer>
                        <ModalStyle.SubmitButton onClick={handleSubmit}>
                            Atualizar Status
                        </ModalStyle.SubmitButton>
                    </ModalStyle.Footer>
                </ModalStyle.Body>
            </ModalStyle.ModalContainer>
        </ModalStyle.Overlay>
    );
};

export default UserAuthorizationModal;