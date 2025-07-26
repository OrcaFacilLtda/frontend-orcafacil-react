import React from "react";
import ModalStyle from "./UserAuthorizationModal.Style.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import GeneralInput from "../../general-input/GeneralInput.jsx";

const UserAuthorizationModal = ({ isOpen, onClose, onSubmit, user = {} }) => {
    if (!isOpen) return null;

    return (
        <ModalStyle.Overlay>
            <ModalStyle.ModalContainer>
                <ModalStyle.Header>
                    <h3>Autorizar usuário:</h3>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </ModalStyle.Header>

                <ModalStyle.Body>
                    <GeneralInput label="Nome Usuário:" defaultValue={user.name || ""} placeholder="Nome" />
                    <GeneralInput label="Email:" defaultValue={user.email || ""} placeholder="exemplo@email.com" />
                    <GeneralInput label="Telefone:" defaultValue={user.phone || ""} placeholder="(00) 00000-0000" />
                    <GeneralInput label="Dt nasc:" type="date" defaultValue={user.birthDate || ""} />
                    <GeneralInput label="Status:" as="select" defaultValue={user.status || ""}>
                        <option value="">Selecione o status</option>
                        <option value="pendente">Pendente</option>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </GeneralInput>

                    <ModalStyle.Footer>
                        <ModalStyle.SubmitButton onClick={onSubmit}>Aceitar</ModalStyle.SubmitButton>
                    </ModalStyle.Footer>
                </ModalStyle.Body>
            </ModalStyle.ModalContainer>
        </ModalStyle.Overlay>
    );
};

export default UserAuthorizationModal;
