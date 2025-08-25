// src/pages/client-admin/profilie/Profilie.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ProfileStyle from './Profilie.Style.jsx';
import Input from '../../../components/ui/general-input/GeneralInput.jsx';
import {
    getUserProfile,
    getProviderProfile,
    updateClientProfile,
    updateProviderProfile
} from '../../../services/api/profileService';

const Profile = ({ isClient }) => {
    // IDs mockados. Em um app real, viriam de um contexto de autenticação (useAuth)
    const MOCKED_USER_ID = 1;

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setLoading(true);
                let profileData;
                if (isClient) {
                    profileData = await getUserProfile(MOCKED_USER_ID);
                } else {
                    // Para prestador, buscamos o objeto completo que inclui user, company e category
                    profileData = await getProviderProfile(MOCKED_USER_ID);
                }

                // Desestruturamos os dados para preencher o formulário
                const { user, company, category } = profileData || {};
                const userData = isClient ? profileData : user;

                setFormData({
                    // User data
                    name: userData?.name || '',
                    email: userData?.email || '',
                    phone: userData?.phone || '',
                    cpf: userData?.cpf || '',
                    currentPassword: '', // Senha atual sempre vazia por segurança
                    newPassword: '',     // Nova senha sempre vazia

                    // Address data (fica dentro do objeto 'address' do usuário)
                    street: userData?.address?.street || '',
                    city: userData?.address?.city || '',
                    neighborhood: userData?.address?.neighborhood || '',
                    zipCode: userData?.address?.zipCode || '',
                    state: userData?.address?.state || '',
                    number: userData?.address?.number || '',
                    complement: userData?.address?.complement || '',
                    addressId: userData?.address?.id || null,

                    // Provider-specific data
                    legalName: company?.legalName || '',
                    cnpj: company?.cnpj || '',
                    categoryId: category?.id || '',
                });

            } catch (err) {
                setError('Não foi possível carregar os dados do perfil.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [isClient]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addressRequest = {
            id: formData.addressId,
            street: formData.street, city: formData.city, neighborhood: formData.neighborhood,
            zipCode: formData.zipCode, state: formData.state, number: formData.number, complement: formData.complement
        };

        const userUpdateRequest = {
            name: formData.name, email: formData.email, phone: formData.phone,
            password: formData.newPassword, currentPassword: formData.currentPassword,
            address: addressRequest
        };

        try {
            if (isClient) {
                await updateClientProfile(MOCKED_USER_ID, userUpdateRequest);
            } else {
                const providerUpdateRequest = {
                    userUpdateRequest,
                    companyUpdateRequest: {
                        id: MOCKED_USER_ID, // O ID da company é o mesmo do user no seu modelo
                        legalName: formData.legalName,
                        cnpj: formData.cnpj,
                        address: addressRequest,
                    },
                    categoryId: formData.categoryId
                };
                await updateProviderProfile(MOCKED_USER_ID, providerUpdateRequest);
            }
            Swal.fire('Sucesso!', 'Perfil atualizado com sucesso.', 'success');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Ocorreu um erro ao atualizar o perfil.';
            Swal.fire('Erro!', errorMessage, 'error');
        }
    };

    if (loading) return <ProfileStyle.Container><h2>Carregando perfil...</h2></ProfileStyle.Container>;
    if (error) return <ProfileStyle.Container><h2 style={{color: 'red'}}>{error}</h2></ProfileStyle.Container>;

    return (
        <ProfileStyle.Container>
            <h2>Editar Perfil</h2>

            <ProfileStyle.Form onSubmit={handleSubmit}>
                <ProfileStyle.Column>
                    <Input label="Nome:" name="name" value={formData.name} onChange={handleChange} />
                    <Input label="Email:" name="email" value={formData.email} onChange={handleChange} />
                    <Input label="Telefone:" name="phone" value={formData.phone} onChange={handleChange} />
                    <Input label="CPF:" name="cpf" value={formData.cpf} onChange={handleChange} disabled />

                    {!isClient && <Input label="Razão Social:" name="legalName" value={formData.legalName} onChange={handleChange} />}
                    {!isClient && <Input label="CNPJ:" name="cnpj" value={formData.cnpj} onChange={handleChange} disabled />}

                    <Input label="CEP:" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                    <Input label="Cidade:" name="city" value={formData.city} onChange={handleChange} />
                    <Input label="Bairro:" name="neighborhood" value={formData.neighborhood} onChange={handleChange} />
                </ProfileStyle.Column>

                <ProfileStyle.Column>
                    <Input label="Rua:" name="street" value={formData.street} onChange={handleChange} />
                    <Input label="Número:" name="number" value={formData.number} onChange={handleChange} />
                    <Input label="Complemento:" name="complement" value={formData.complement} onChange={handleChange} />

                    <Input label="Senha Atual:" type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} placeholder="Deixe em branco para não alterar"/>
                    <Input label="Nova Senha:" type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} placeholder="Deixe em branco para não alterar"/>
                </ProfileStyle.Column>
            </ProfileStyle.Form>

            <ProfileStyle.ButtonsWrapper>
                <button disabled>Apagar usuário</button>
                <button className="primary" onClick={handleSubmit}>Salvar Alterações</button>
            </ProfileStyle.ButtonsWrapper>
        </ProfileStyle.Container>
    );
};

export default Profile;