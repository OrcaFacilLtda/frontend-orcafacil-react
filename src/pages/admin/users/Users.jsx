import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UsersStyle from './Users.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import {
    getAllUsers,
    getUsersByStatus,
    updateUserStatus,
    deleteUser,
    updateProviderProfileByAdmin,
    updateClientProfileByAdmin
} from '../../../services/api/adminService';
import { getProviderProfile } from '../../../services/api/providerService';

import UserAuthorizationModal from '../../../components/ui/modals/user-authorization-modal/UserAuthorizationModal.jsx';
import EditUserModal from '../../../components/ui/modals/edit-user-modal/EditUserModal.jsx';

export default function Users() {
    const [isAuthorizationModalOpen, setIsAuthorizationModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const [pendingUsers, setPendingUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const [pending, all] = await Promise.all([
                getUsersByStatus('PENDING'),
                getAllUsers()
            ]);
            setPendingUsers(pending || []);
            setAllUsers(all.filter(user => user.status !== 'PENDING') || []);
        } catch (error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível carregar os utilizadores.',
                icon: 'error',
                confirmButtonColor: '#d33'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const handleOpenAuthorize = (user) => {
        setSelectedUser({ ...user, role: user.userType });
        setIsAuthorizationModalOpen(true);
    };

    const handleOpenEdit = async (user) => {
        try {
            let fullProfile = user;
            if (user.userType === 'PROVIDER') {
                fullProfile = await getProviderProfile(user.id);
            }
            setSelectedUser(fullProfile);
            setIsEditModalOpen(true);
        } catch (error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível carregar os dados completos do utilizador.',
                icon: 'error',
                confirmButtonColor: '#d33'
            });
        }
    };

    const handleUpdateStatus = async (userId, newStatus) => {
        try {
            await updateUserStatus(userId, newStatus);
            Swal.fire({
                title: 'Sucesso!',
                text: 'O status do utilizador foi atualizado.',
                icon: 'success',
                confirmButtonColor: '#0d6efd'
            });
            fetchAllData();
            setIsAuthorizationModalOpen(false);
        } catch(error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível atualizar o status.',
                icon: 'error',
                confirmButtonColor: '#d33'
            });
        }
    };

    const handleDelete = (user) => {
        const userToDelete = user.user || user;
        Swal.fire({
            title: 'Tem a certeza?',
            text: `Deseja apagar permanentemente o utilizador ${userToDelete.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteUser(userToDelete.id);
                    Swal.fire({
                        title: 'Apagado!',
                        text: 'O utilizador foi removido.',
                        icon: 'error',
                        confirmButtonColor: '#d33'
                    });
                    fetchAllData();
                    setIsEditModalOpen(false);
                } catch (error) {
                    Swal.fire({
                        title: 'Erro!',
                        text: 'Não foi possível apagar o utilizador.',
                        icon: 'error',
                        confirmButtonColor: '#d33'
                    });
                }
            }
        });
    };

    const handleSaveChanges = async (formData) => {
        try {
            // 🔹 Log para verificar o que está sendo enviado
            console.log("Dados enviados para atualização:", formData);

            if(formData.userType === 'provider') {
                const userUpdateRequest = {};
                if(formData.user.name) userUpdateRequest.name = formData.user.name;
                if(formData.user.email) userUpdateRequest.email = formData.user.email;
                if(formData.user.phone) userUpdateRequest.phone = formData.user.phone;
                if(formData.user.address) userUpdateRequest.address = { ...formData.user.address };
                if(formData.user.password) userUpdateRequest.password = formData.user.password;

                const companyUpdateRequest = { id: formData.company.id };
                if(formData.company.legalName) companyUpdateRequest.legalName = formData.company.legalName;
                if(formData.company.cnpj) companyUpdateRequest.cnpj = formData.company.cnpj;
                if(formData.company.address) companyUpdateRequest.address = { ...formData.company.address };

                const payload = {
                    userUpdateRequest,
                    companyUpdateRequest,
                    categoryId: formData.category?.id
                };

                await updateProviderProfileByAdmin(formData.user.id, payload);
            } else {
                const clientPayload = { ...formData.user };
                Object.keys(clientPayload).forEach(key => {
                    if(clientPayload[key] === null || clientPayload[key] === undefined) {
                        delete clientPayload[key];
                    }
                });
                await updateClientProfileByAdmin(formData.user.id, clientPayload);
            }

            Swal.fire({
                title: 'Sucesso!',
                text: 'Utilizador atualizado com sucesso.',
                icon: 'success',
                confirmButtonColor: '#0d6efd'
            });

            fetchAllData();
            setIsEditModalOpen(false);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Não foi possível guardar as alterações.';
            Swal.fire({
                title: 'Erro!',
                text: errorMessage,
                icon: 'error',
                confirmButtonColor: '#d33'
            });
        }
    };

    return (
        <UsersStyle.Container>
            <UsersStyle.Header>
                <h2>Utilizadores</h2>
                <p>Gerencie os utilizadores do sistema</p>
            </UsersStyle.Header>

            <UsersStyle.InfoCards>
                <UsersStyle.Card>
                    <UsersStyle.CardInfo>
                        <span>Aguardando aprovação</span>
                        <strong>{pendingUsers.length}</strong>
                    </UsersStyle.CardInfo>
                    <UsersStyle.IconWrapper><FontAwesomeIcon icon={faUsers} /></UsersStyle.IconWrapper>
                </UsersStyle.Card>
            </UsersStyle.InfoCards>

            <UsersStyle.Sections>
                <UsersStyle.Section>
                    <h4>Utilizadores aguardando aprovação:</h4>
                    {loading ? <p>A carregar...</p> : (
                        <UsersStyle.List>
                            {pendingUsers.map((user) => (
                                <UsersStyle.ListItem key={user.id}>
                                    <strong>{user.name} - {user.userType}</strong>
                                    <p>{user.email}</p>
                                    <UsersStyle.ButtonsWrapper>
                                        <button className="btn-analyze" onClick={() => handleOpenAuthorize(user)}>Analisar</button>
                                    </UsersStyle.ButtonsWrapper>
                                </UsersStyle.ListItem>
                            ))}
                        </UsersStyle.List>
                    )}
                </UsersStyle.Section>

                <UsersStyle.Section border>
                    <h4>Lista de Utilizadores no Sistema</h4>
                    {loading ? <p>A carregar...</p> : (
                        <UsersStyle.List>
                            {allUsers.map((user) => (
                                <UsersStyle.ListItem key={user.id}>
                                    <strong>{user.name} - {user.userType} ({user.status})</strong>
                                    <p>{user.email}</p>
                                    <UsersStyle.ButtonsWrapper>
                                        <button className="btn-edit" onClick={() => handleOpenEdit(user)}>Editar</button>
                                        <button className="btn-delete" onClick={() => handleDelete(user)}>Apagar</button>
                                    </UsersStyle.ButtonsWrapper>
                                </UsersStyle.ListItem>
                            ))}
                        </UsersStyle.List>
                    )}
                </UsersStyle.Section>
            </UsersStyle.Sections>

            <UserAuthorizationModal
                isOpen={isAuthorizationModalOpen}
                onClose={() => setIsAuthorizationModalOpen(false)}
                user={selectedUser}
                onSubmit={handleUpdateStatus}
            />

            <EditUserModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                user={selectedUser}
                userType={selectedUser?.user?.userType?.toLowerCase() || selectedUser?.userType?.toLowerCase()}
                onSave={handleSaveChanges}
                onDelete={() => handleDelete(selectedUser)}
            />
        </UsersStyle.Container>
    );
}
