// src/pages/login/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LoginStyle from './Login.Style.jsx';
import RegisterLoginInput from '../../components/ui/./register-login-input/RegisterLoginInput.jsx';
import LoginImage from '../../assets/image/loginImage.png';

const Login = () => {
    const navigate = useNavigate();

    return (
        <LoginStyle.Container>
            <LoginStyle.Card>
                <LoginStyle.BackButton onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </LoginStyle.BackButton>

                <LoginStyle.Illustration>
                    <LoginStyle.Image src={LoginImage} alt="Ilustração de login" />
                </LoginStyle.Illustration>

                <LoginStyle.FormSection>
                    <LoginStyle.Title>Login</LoginStyle.Title>

                    <RegisterLoginInput type="email" placeholder="Email" />
                    <RegisterLoginInput type="password" placeholder="Password" />

                    <LoginStyle.Button>Login</LoginStyle.Button>
                    <LoginStyle.Link href="/register">
                        Não possui conta?
                        <a href="/register">Registre-se</a>

                    </LoginStyle.Link>
                </LoginStyle.FormSection>
            </LoginStyle.Card>
        </LoginStyle.Container>
    );
};

export default Login;
