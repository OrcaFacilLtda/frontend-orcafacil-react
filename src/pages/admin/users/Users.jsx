import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UsersStyle from './Users.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';

import { getAllUsers, getUsersByStatus, updateUserStatus, deleteUser } from '../../../services/api/adminService';
import { getProviderProfile, updateProviderProfile } from '../../../services/api/providerService';
import { updateClientProfile } from '../../../services/api/profileService';

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
            Swal.fire('Erro!', 'Não foi possível carregar os utilizadores.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const handleOpenAuthorize = (user) => {
        setSelectedUser({ ...user, role: user.userType }); // Adiciona 'role' para o modal
        setIsAuthorizationModalOpen(true);
    };

    const handleOpenEdit = async (user) => {
        try {
            let fullProfile;
            if (user.userType === 'PROVIDER') {
                // Busca o perfil completo do prestador para ter todos os dados
                fullProfile = await getProviderProfile(user.id);
            } else {
                fullProfile = user;
            }
            setSelectedUser(fullProfile);
            setIsEditModalOpen(true);
        } catch (error) {
            Swal.fire('Erro!', 'Não foi possível carregar os dados completos do utilizador.', 'error');
        }
    };

    const handleUpdateStatus = async (userId, newStatus) => {
        try {
            await updateUserStatus(userId, newStatus);
            Swal.fire('Sucesso!', 'O status do utilizador foi atualizado.', 'success');
            fetchAllData();
            setIsAuthorizationModalOpen(false);
        } catch(error) {
            Swal.fire('Erro!', 'Não foi possível atualizar o status.', 'error');
        }
    };

    const handleDelete = (user) => {
        const userToDelete = user.user || user; // Acesso correto ao ID, seja cliente ou prestador
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
                    Swal.fire('Apagado!', 'O utilizador foi removido.', 'success');
                    fetchAllData();
                    setIsEditModalOpen(false);
                } catch (error) {
                    Swal.fire('Erro!', 'Não foi possível apagar o utilizador.', 'error');
                }
            }
        });
    };

    const handleSaveChanges = async (formData) => {
        try {
            if(formData.userType === 'provider') {
                const payload = {
                    userUpdateRequest: {
                        name: formData.user.name,
                        email: formData.user.email,
                        phone: formData.user.phone,
                        address: formData.user.address
                    },
                    companyUpdateRequest: {
                        id: formData.company.id,
                        legalName: formData.company.legalName,
                        cnpj: formData.company.cnpj
                    },
                    categoryId: formData.category.id
                };
                await updateProviderProfile(formData.user.id, payload);
            } else {
                await updateClientProfile(formData.user.id, formData.user);
            }
            Swal.fire('Sucesso!', 'Utilizador atualizado com sucesso.', 'success');
            fetchAllData();
            setIsEditModalOpen(false);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Não foi possível guardar as alterações.';
            Swal.fire('Erro!', errorMessage, 'error');
        }
    };


    return (
        <UsersStyle.Container>
            {/* ... (código do header e dos cartões não muda) ... */}
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