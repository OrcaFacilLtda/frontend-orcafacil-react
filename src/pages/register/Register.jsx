import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import RegisterStyle from './Register.Style';
import api from '../../services/api/api.js';
import RegisterLoginInput from '../../components/ui/register-login-input/RegisterLoginInput.jsx';

// Importando Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('PROVIDER');
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '', email: '', password: '', cpf: '', phone: '', birthDate: '',
        zipCode: '', street: '', number: '', neighborhood: '', city: '', state: '', complement: '',
        legalName: '', cnpj: '', categoryId: '',
    });

    useEffect(() => {
        const fetchCategories = async () => {
            if (userType === 'PROVIDER') {
                try {
                    const response = await api.get('/api/categories');
                    setCategories(response.data.data || []);
                } catch (err) {
                    console.error("Falha ao buscar categorias", err);
                    setError("Não foi possível carregar as categorias de serviço.");
                }
            }
        };
        fetchCategories();
    }, [userType]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const userRequestPayload = {
            name: formData.name, email: formData.email, password: formData.password,
            cpf: formData.cpf, phone: formData.phone, birthDate: formData.birthDate,
            userType: userType, status: 'PENDING',
            address: {
                zipCode: formData.zipCode, street: formData.street, number: formData.number,
                neighborhood: formData.neighborhood, city: formData.city, state: formData.state,
                complement: formData.complement,
            }
        };

        try {
            if (userType === 'CLIENT') {
                await api.post('/api/users', userRequestPayload);
            } else if (userType === 'PROVIDER') {
                const providerPayload = {
                    userRequest: userRequestPayload,
                    companyRequest: {
                        legalName: formData.legalName,
                        cnpj: formData.cnpj,
                        address: userRequestPayload.address
                    },
                    categoryId: parseInt(formData.categoryId, 10)
                };
                await api.post('/api/providers', providerPayload);
            }

            Swal.fire({
                title: 'Sucesso!',
                text: 'Cadastro realizado com sucesso! Seu acesso será liberado após aprovação.',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => navigate('/login'));

        } catch (err) {
            console.error("Erro no cadastro:", err);
            const errorMessage = err.response?.data?.message || "Ocorreu um erro. Tente novamente.";
            Swal.fire({
                title: 'Erro no Cadastro',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Tentar Novamente'
            });
            setError(errorMessage);
        }
    };

    return (
        <RegisterStyle.Wrapper>
            <RegisterStyle.Container>
                <RegisterStyle.BackButton onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </RegisterStyle.BackButton>

                <RegisterStyle.Form as="form" onSubmit={handleSubmit}>
                    {/* Coluna da Esquerda */}
                    <RegisterStyle.Column>
                        <RegisterStyle.Toggle>
                            <RegisterStyle.Button
                                type="button"
                                active={userType === 'PROVIDER'}
                                onClick={() => setUserType('PROVIDER')}
                            >
                                PRESTADOR
                            </RegisterStyle.Button>
                            <RegisterStyle.Button
                                type="button"
                                active={userType === 'CLIENT'}
                                onClick={() => setUserType('CLIENT')}
                            >
                                CLIENTE
                            </RegisterStyle.Button>
                        </RegisterStyle.Toggle>

                        <RegisterStyle.Title>
                            COMO DESEJA SE CADASTRAR?
                        </RegisterStyle.Title>

                        <RegisterLoginInput label="NOME COMPLETO" name="name" value={formData.name} onChange={handleChange} required />
                        <RegisterLoginInput label="EMAIL" type="email" name="email" value={formData.email} onChange={handleChange} required />
                        <RegisterLoginInput label="TELEFONE" name="phone" value={formData.phone} onChange={handleChange} required />
                        <RegisterLoginInput label="CPF" name="cpf" value={formData.cpf} onChange={handleChange} required />
                        <RegisterLoginInput label="CEP" name="zipCode" value={formData.zipCode} onChange={handleChange} required />

                        {userType === 'PROVIDER' && (
                            <>
                                <RegisterLoginInput label="RAZÃO SOCIAL" name="legalName" value={formData.legalName} onChange={handleChange} required />
                                <RegisterLoginInput label="CNPJ" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
                            </>
                        )}
                    </RegisterStyle.Column>

                    {/* Coluna da Direita */}
                    <RegisterStyle.Column>
                        <RegisterStyle.UserIcon>
                            <FontAwesomeIcon icon={faUser} />
                        </RegisterStyle.UserIcon>
                        <RegisterLoginInput label="RUA" name="street" value={formData.street} onChange={handleChange} required />
                        <RegisterLoginInput label="BAIRRO" name="neighborhood" value={formData.neighborhood} onChange={handleChange} required />
                        <RegisterLoginInput label="NÚMERO" name="number" value={formData.number} onChange={handleChange} required />
                        <RegisterLoginInput label="DATA DE NASCIMENTO" type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                        <RegisterLoginInput label="SENHA" type="password" name="password" value={formData.password} onChange={handleChange} required />

                        {userType === 'PROVIDER' && (
                            <select name="categoryId" value={formData.categoryId} onChange={handleChange} required style={{width: '105%', padding: '0.5rem', border: '1.5px solid #3b82f6', borderRadius: '8px', fontSize: '1rem', marginTop: '0.5rem',marginBottom:"0.5rem"}}>
                                <option value="">Selecione uma Categoria</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        )}

                        <RegisterStyle.RegisterButton type="submit">
                            Cadastrar
                        </RegisterStyle.RegisterButton>

                        <RegisterStyle.LoginLink>
                            Já possui conta? <Link to="/login">Logue-se</Link>
                        </RegisterStyle.LoginLink>
                    </RegisterStyle.Column>
                </RegisterStyle.Form>
            </RegisterStyle.Container>
        </RegisterStyle.Wrapper>
    );
};

export default Register;
