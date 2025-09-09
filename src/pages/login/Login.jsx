import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import LoginStyle from "./Login.Style";
import RegisterLoginInput from "../../components/ui/register-login-input/RegisterLoginInput";
import loginImage from "../../assets/image/loginImage.png";

import { useAuth } from "../../hooks/useAuth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { validateLoginForm } from "../../utils/loginValidation.js";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const validationError = validateLoginForm({ email, password });
        if (validationError) {
            Swal.fire({
                title: "Atenção",
                text: validationError,
                icon: "warning",
                confirmButtonText: "Ok",
                confirmButtonColor: "#d33",
            });
            return;
        }

        try {
            await login(email, password);
        } catch (err) {
            console.error("Erro no login:", err);
            const errorMessage =
                err.response?.status === 401
                    ? "Email ou senha inválidos."
                    : "Ocorreu um erro ao tentar fazer login. Tente novamente.";

            Swal.fire({
                title: "Erro de Autenticação",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "Tentar Novamente",
                confirmButtonColor: "#d33",  
            });

            setError(errorMessage);
        }
    };

    return (
        <LoginStyle.Container>
            <LoginStyle.Card>
                <LoginStyle.BackButton onClick={() => navigate("/")}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Voltar
                </LoginStyle.BackButton>

                <LoginStyle.Illustration>
                    <LoginStyle.Image src={loginImage} alt="Ilustração de Login" />
                </LoginStyle.Illustration>

                <LoginStyle.FormSection as="form" onSubmit={handleSubmit}>
                    <LoginStyle.Title>Bem-vindo de Volta!</LoginStyle.Title>

                    <RegisterLoginInput
                        label="EMAIL"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <RegisterLoginInput
                        label="SENHA"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <LoginStyle.Button type="submit">Entrar</LoginStyle.Button>

                    <LoginStyle.Link>
                        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
                    </LoginStyle.Link>
                </LoginStyle.FormSection>
            </LoginStyle.Card>
        </LoginStyle.Container>
    );
};

export default Login;
