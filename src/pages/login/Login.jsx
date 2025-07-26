// src/pages/login/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Style from './Login.Style.jsx';
import RegisterLoginInput from '../../components/ui/./register-login-input/RegisterLoginInput.jsx';
import LoginImage from '../../assets/image/loginImage.png';

const Login = () => {
    const navigate = useNavigate();

    return (
        <Style.Container>
            <Style.Card>
                <Style.BackButton onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </Style.BackButton>

                <Style.Illustration>
                    <Style.Image src={LoginImage} alt="Ilustração de login" />
                </Style.Illustration>

                <Style.FormSection>
                    <Style.Title>Login</Style.Title>

                    <RegisterLoginInput type="email" placeholder="Email" />
                    <RegisterLoginInput type="password" placeholder="Password" />

                    <Style.Button>Login</Style.Button>
                    <Style.Link href="/register">
                        Não possui conta?
                        <a href="/register">Registre-se</a>

                    </Style.Link>
                </Style.FormSection>
            </Style.Card>
        </Style.Container>
    );
};

export default Login;
