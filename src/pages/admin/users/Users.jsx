// src/pages/admin/users/Users.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UsersStyle from './Users.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';

import { getAllUsers, getUsersByStatus, updateUserStatus, deleteUser } from '../../../services/api/adminService';

// Remova os modais de edição por enquanto para focar na aprovação
// import UserAuthorizationModal from '../../../components/ui/modals/user-authorization-modal/UserAuthorizationModal.jsx';
// import EditUserModal from '../../../components/ui/modals/edit-user-modal/EditUserModal.jsx';

export default function Users() {
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
            // Filtra os usuários que não estão pendentes para a lista principal
            setAllUsers(all.filter(user => user.status !== 'PENDING') || []);
        } catch (error) {
            Swal.fire('Erro!', 'Não foi possível carregar os usuários.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const handleApprove = async (user) => {
        try {
            await updateUserStatus(user.id, 'APPROVED');
            Swal.fire('Aprovado!', `${user.name} foi aprovado com sucesso.`, 'success');
            fetchAllData(); // Recarrega as listas
        } catch (error) {
            Swal.fire('Erro!', 'Não foi possível aprovar o usuário.', 'error');
        }
    };

    const handleReject = async (user) => {
        // No backend, a rejeição pode ser um status 'REJECTED' ou simplesmente deletar.
        // Vamos usar a deleção para simplificar.
        Swal.fire({
            title: 'Confirmar Rejeição',
            text: `Tem certeza que deseja rejeitar e apagar o cadastro de ${user.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Sim, rejeitar!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteUser(user.id);
                    Swal.fire('Rejeitado!', 'O usuário foi rejeitado e removido.', 'success');
                    fetchAllData(); // Recarrega as listas
                } catch (error) {
                    Swal.fire('Erro!', 'Não foi possível rejeitar o usuário.', 'error');
                }
            }
        });
    };

    const handleDelete = async (user) => {
        Swal.fire({
            title: 'Apagar Usuário',
            text: `Esta ação é irreversível. Deseja apagar permanentemente ${user.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteUser(user.id);
                    Swal.fire('Apagado!', 'O usuário foi removido do sistema.', 'success');
                    fetchAllData(); // Recarrega as listas
                } catch (error) {
                    Swal.fire('Erro!', 'Não foi possível apagar o usuário.', 'error');
                }
            }
        });
    };


    return (
        <UsersStyle.Container>
            <UsersStyle.Header>
                <h2>Usuários</h2>
                <p>Gerencie os usuários do sistema</p>
            </UsersStyle.Header>

            <UsersStyle.InfoCards>
                <UsersStyle.Card>
                    <UsersStyle.CardInfo>
                        <span>Aguardando aprovação</span>
                        <strong>{pendingUsers.length}</strong>
                    </UsersStyle.CardInfo>
                    <UsersStyle.IconWrapper>
                        <FontAwesomeIcon icon={faUsers} />
                    </UsersStyle.IconWrapper>
                </UsersStyle.Card>
            </UsersStyle.InfoCards>

            <UsersStyle.Sections>
                <UsersStyle.Section>
                    <UsersStyle.SectionHeader>
                        <h4>Usuários aguardando aprovação:</h4>
                    </UsersStyle.SectionHeader>
                    {loading ? <p>Carregando...</p> : (
                        <UsersStyle.List>
                            {pendingUsers.map((user) => (
                                <UsersStyle.ListItem key={user.id}>
                                    <strong>{user.name} - {user.userType}</strong>
                                    <p>{user.email}</p>
                                    <UsersStyle.ButtonsWrapper>
                                        <button className="btn-analyze" onClick={() => handleApprove(user)}>Aprovar</button>
                                        <button className="btn-reject" onClick={() => handleReject(user)}>Rejeitar</button>
                                    </UsersStyle.ButtonsWrapper>
                                </UsersStyle.ListItem>
                            ))}
                        </UsersStyle.List>
                    )}
                </UsersStyle.Section>

                <UsersStyle.Section border>
                    <UsersStyle.SectionHeader>
                        <h4>Lista de Usuários no Sistema</h4>
                    </UsersStyle.SectionHeader>
                    {loading ? <p>Carregando...</p> : (
                        <UsersStyle.List>
                            {allUsers.map((user) => (
                                <UsersStyle.ListItem key={user.id}>
                                    <strong>{user.name} - {user.userType} ({user.status})</strong>
                                    <p>{user.email}</p>
                                    <UsersStyle.ButtonsWrapper>
                                        <button className="btn-edit" >Editar</button>
                                        <button className="btn-delete" onClick={() => handleDelete(user)}>Apagar</button>
                                    </UsersStyle.ButtonsWrapper>
                                </UsersStyle.ListItem>
                            ))}
                        </UsersStyle.List>
                    )}
                </UsersStyle.Section>
            </UsersStyle.Sections>
        </UsersStyle.Container>
    );
}