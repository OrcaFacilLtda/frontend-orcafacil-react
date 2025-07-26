import React, { useState } from 'react';
import UsersStyle from './Users.Style.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';

import UserAuthorizationModal from '../../../components/ui/modals/user-authorization-modal/UserAuthorizationModal.jsx';
import EditUserModal from '../../../components/ui/modals/edit-user-modal/EditUserModal.jsx'; // importar modal de edição

export default function Users() {
    const [isAuthorizationModalOpen, setIsAuthorizationModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedUserType, setSelectedUserType] = useState(null); // para controlar tipo (cliente/prestador)

    const usersToApprove = [
        {
            id: 1,
            name: 'Fernando Henrique',
            email: 'henrique@gmail.com',
            role: 'Cliente',
            phone: '',
            birthDate: '',
            status: 'pendente',
        },
        {
            id: 2,
            name: 'Fernando Henrique',
            email: 'henrique@gmail.com',
            role: 'Prestador',
            phone: '',
            birthDate: '',
            status: 'pendente',
        },
    ];

    const usersInSystem = [
        {
            id: 1,
            name: 'Fernando Henrique',
            email: 'henrique@gmail.com',
            role: 'Cliente',
        },
        {
            id: 2,
            name: 'Fernando Henrique',
            email: 'henrique@gmail.com',
            role: 'Prestador',
        },
    ];

    // Abrir modal de autorização (analisar)
    const handleAnalyze = (user) => {
        setSelectedUser(user);
        setIsAuthorizationModalOpen(true);
    };

    // Abrir modal de edição
    const handleEdit = (user) => {
        setSelectedUser(user);
        setSelectedUserType(user.role.toLowerCase()); // 'cliente' ou 'prestador'
        setIsEditModalOpen(true);
    };

    // Fechar modal de autorização
    const closeAuthorizationModal = () => {
        setIsAuthorizationModalOpen(false);
        setSelectedUser(null);
    };

    // Fechar modal de edição
    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedUser(null);
        setSelectedUserType(null);
    };

    return (
        <UsersStyle.Container>
            <UsersStyle.Header>
                <h2>Usuários</h2>
                <p>Gerencie os usuários do sistemas</p>
            </UsersStyle.Header>

            <UsersStyle.InfoCards>
                <UsersStyle.Card>
                    <UsersStyle.CardInfo>
                        <span>Usuários na fila de aceitação</span>
                        <strong>{usersToApprove.length}</strong>
                    </UsersStyle.CardInfo>
                    <UsersStyle.IconWrapper>
                        <FontAwesomeIcon icon={faUsers} />
                    </UsersStyle.IconWrapper>
                </UsersStyle.Card>
            </UsersStyle.InfoCards>

            <UsersStyle.Sections>
                {/* Seção: Aguardando Aprovação */}
                <UsersStyle.Section>
                    <UsersStyle.SectionHeader>
                        <h4>Usuários aguardando aprovação:</h4>
                        <UsersStyle.SearchInputWrapper>
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" placeholder="Procurar por nome" />
                        </UsersStyle.SearchInputWrapper>
                    </UsersStyle.SectionHeader>

                    <UsersStyle.List>
                        {usersToApprove.map((user) => (
                            <UsersStyle.ListItem key={user.id}>
                                <strong>{user.name} - {user.role}</strong>
                                <p>{user.email}</p>
                                <UsersStyle.ButtonsWrapper>
                                    <button className="btn-analyze" onClick={() => handleAnalyze(user)}>Analisar</button>
                                    <button className="btn-reject">Rejeitar</button>
                                </UsersStyle.ButtonsWrapper>
                            </UsersStyle.ListItem>
                        ))}
                    </UsersStyle.List>
                </UsersStyle.Section>

                {/* Seção: Lista completa */}
                <UsersStyle.Section border>
                    <UsersStyle.SectionHeader>
                        <h4>Lista de Usuários no Sistema</h4>
                        <UsersStyle.SearchInputWrapper>
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" placeholder="Procurar por nome" />
                        </UsersStyle.SearchInputWrapper>
                    </UsersStyle.SectionHeader>

                    <UsersStyle.List>
                        {usersInSystem.map((user) => (
                            <UsersStyle.ListItem key={user.id}>
                                <strong>{user.name} - {user.role}</strong>
                                <p>{user.email}</p>
                                <UsersStyle.ButtonsWrapper>
                                    <button className="btn-edit" onClick={() => handleEdit(user)}>Editar</button>
                                    <button className="btn-delete">Apagar</button>
                                </UsersStyle.ButtonsWrapper>
                            </UsersStyle.ListItem>
                        ))}
                    </UsersStyle.List>
                </UsersStyle.Section>
            </UsersStyle.Sections>

            {/* Modal de autorização */}
            <UserAuthorizationModal
                isOpen={isAuthorizationModalOpen}
                onClose={closeAuthorizationModal}
                user={selectedUser}
                onSubmit={() => {
                    console.log("Usuário autorizado:", selectedUser);
                    closeAuthorizationModal();
                }}
            />

            {/* Modal de edição */}
            <EditUserModal
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                user={selectedUser}
                userType={selectedUserType}  // 'cliente' ou 'prestador'
                onSave={() => {
                    console.log("Usuário editado:", selectedUser);
                    closeEditModal();
                }}
                onDelete={() => {
                    console.log("Usuário apagado:", selectedUser);
                    closeEditModal();
                }}
            />
        </UsersStyle.Container>
    );
}
