import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ProfileStyle from './Profilie.Style.jsx';
import Input from '../../../components/ui/general-input/GeneralInput.jsx';
import { useAuth } from '../../../context/AuthContext';
import {
    getUserProfile,
    getProviderProfile,
    updateClientProfile,
    updateProviderProfile
} from '../../../services/api/profileService';
import { getAllCategories } from '../../../services/api/categoryService';

import { maskPhone, maskCEP, maskCPF, maskCNPJ, unmask } from '../../../utils/maksUtils.js';

const Profile = ({ isClient }) => {
    const { user: loggedInUser, updateUserData, updateProviderData } = useAuth();

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (!loggedInUser) {
            setLoading(false);
            setError("Usuário não autenticado.");
            return;
        }

        const fetchProfileData = async () => {
            try {
                setLoading(true);
                const userId = loggedInUser.id;
                let profileData;

                if (isClient) {
                    profileData = await getUserProfile(userId);
                } else {
                    profileData = await getProviderProfile(userId);
                }

                const { user, company, category } = profileData || {};
                const userData = isClient ? profileData : user;

                setFormData({
                    name: userData?.name || '',
                    email: userData?.email || '',
                    phone: maskPhone(userData?.phone || ''),
                    cpf: maskCPF(userData?.cpf || ''),
                    currentPassword: '',
                    newPassword: '',

                    street: userData?.address?.street || '',
                    city: userData?.address?.city || '',
                    neighborhood: userData?.address?.neighborhood || '',
                    zipCode: maskCEP(userData?.address?.zipCode || ''),
                    state: userData?.address?.state || '',
                    number: userData?.address?.number || '',
                    complement: userData?.address?.complement || '',
                    addressId: userData?.address?.id || null,

                    legalName: company?.legalName || '',
                    cnpj: maskCNPJ(company?.cnpj || ''),
                    categoryId: category?.id || '',
                    companyId: company?.id || null,
                });

                if (!isClient) {
                    const allCategories = await getAllCategories();
                    setCategories(allCategories);
                }

            } catch (err) {
                setError('Não foi possível carregar os dados do perfil.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [isClient, loggedInUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        let maskedValue = value;

        if (name === 'phone') maskedValue = maskPhone(value);
        if (name === 'zipCode') maskedValue = maskCEP(value);

        if (name === 'cpf') maskedValue = maskCPF(value).slice(0, 14);
        if (name === 'cnpj') maskedValue = maskCNPJ(value);

        setFormData(prev => ({ ...prev, [name]: maskedValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!loggedInUser) {
            Swal.fire('Erro!', 'Sessão expirada. Por favor, faça login novamente.', 'error');
            return;
        }

        const addressRequest = {
            id: formData.addressId,
            street: formData.street,
            city: formData.city,
            neighborhood: formData.neighborhood,
            zipCode: unmask(formData.zipCode),
            state: formData.state,
            number: formData.number,
            complement: formData.complement
        };

        const userUpdateRequest = {
            name: formData.name,
            email: formData.email,
            phone: unmask(formData.phone),
            password: formData.newPassword,
            currentPassword: formData.currentPassword,
            address: addressRequest
        };

        try {
            if (isClient) {
                await updateClientProfile(loggedInUser.id, userUpdateRequest);
                updateUserData({
                    name: formData.name,
                    email: formData.email,
                    phone: unmask(formData.phone),
                    address: addressRequest
                });
            } else {
                const providerUpdateRequest = {
                    userUpdateRequest,
                    companyUpdateRequest: {
                        id: formData.companyId,
                        legalName: formData.legalName,
                        cnpj: unmask(formData.cnpj),
                        address: addressRequest,
                    },
                    categoryId: formData.categoryId
                };

                await updateProviderProfile(loggedInUser.id, providerUpdateRequest);

                updateUserData({
                    name: formData.name,
                    email: formData.email,
                    phone: unmask(formData.phone),
                    address: addressRequest
                });

                updateProviderData({
                    company: {
                        legalName: formData.legalName,
                        address: addressRequest,
                        categoryId: formData.categoryId
                    }
                });
            }

            Swal.fire({
                title: 'Sucesso!',
                text: 'Perfil atualizado com sucesso.',
                icon: 'success',
                confirmButtonColor: '#3085d6'
            });
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Ocorreu um erro ao atualizar o perfil.';
            Swal.fire({
                title: 'Erro!',
                text: errorMessage,
                icon: 'error',
                confirmButtonColor: '#d33'
            });
        }
    };

    if (loading) return <ProfileStyle.Container><h2>Carregando perfil...</h2></ProfileStyle.Container>;
    if (error) return <ProfileStyle.Container><h2 style={{ color: 'red' }}>{error}</h2></ProfileStyle.Container>;

    return (
        <ProfileStyle.Container>
            <h2>Editar Perfil</h2>
            <ProfileStyle.Form onSubmit={handleSubmit}>
                <ProfileStyle.Column>
                    <Input label="Nome:" name="name" value={formData.name || ''} onChange={handleChange} />
                    <Input label="Email:" name="email" value={formData.email || ''} onChange={handleChange} />
                    <Input label="Telefone:" name="phone" value={formData.phone || ''} onChange={handleChange} />
                    <Input label="CPF:" name="cpf" value={formData.cpf || ''} onChange={handleChange} disabled />
                    {!isClient && <Input label="Razão Social:" name="legalName" value={formData.legalName || ''} onChange={handleChange} />}
                    {!isClient && <Input label="CNPJ:" name="cnpj" value={formData.cnpj || ''} onChange={handleChange} disabled />}
                    <Input label="CEP:" name="zipCode" value={formData.zipCode || ''} onChange={handleChange} />
                    <Input label="Cidade:" name="city" value={formData.city || ''} onChange={handleChange} />
                    <Input label="Bairro:" name="neighborhood" value={formData.neighborhood || ''} onChange={handleChange} />
                </ProfileStyle.Column>

                <ProfileStyle.Column>
                    <Input label="Rua:" name="street" value={formData.street || ''} onChange={handleChange} />
                    <Input label="Número:" name="number" value={formData.number || ''} onChange={handleChange} />
                    <Input label="Complemento:" name="complement" value={formData.complement || ''} onChange={handleChange} />
                    {!isClient && (
                        <ProfileStyle.Select name="categoryId" value={formData.categoryId} onChange={handleChange}>
                            <option value="">Selecione a categoria</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </ProfileStyle.Select>
                    )}
                    <Input label="Senha Atual:" type="password" name="currentPassword" value={formData.currentPassword || ''} onChange={handleChange} placeholder="Deixe em branco para não alterar"/>
                    <Input label="Nova Senha:" type="password" name="newPassword" value={formData.newPassword || ''} onChange={handleChange} placeholder="Deixe em branco para não alterar"/>
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
