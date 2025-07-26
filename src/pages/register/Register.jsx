import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterStyle from "./Register.Style.jsx";
import RegisterLoginInput from "../../components/ui/./register-login-input/RegisterLoginInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
    const [type, setType] = useState("prestador");
    const navigate = useNavigate();


    return (
        <RegisterStyle.Wrapper>
            <RegisterStyle.Container>
                <RegisterStyle.BackButton onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </RegisterStyle.BackButton>

                <RegisterStyle.Form>
                    <RegisterStyle.Column>
                        <RegisterStyle.Toggle>
                            <RegisterStyle.Button
                                active={type === "prestador"}
                                onClick={() => setType("prestador")}
                            >
                                PRESTADOR
                            </RegisterStyle.Button>
                            <RegisterStyle.Button
                                active={type === "cliente"}
                                onClick={() => setType("cliente")}
                            >
                                CLIENTE
                            </RegisterStyle.Button>
                        </RegisterStyle.Toggle>

                        <RegisterStyle.Title>COMO DESEJA SE CADASTRAR ?</RegisterStyle.Title>

                        <RegisterLoginInput label="NOME COMPLETO" />
                        <RegisterLoginInput label="EMAIL" type="email" />
                        <RegisterLoginInput label="TELEFONE" />
                        <RegisterLoginInput label="CEP" />
                        <RegisterLoginInput label="RUA" />
                        <RegisterLoginInput label={type === "cliente" ? "CPF" : "CNPJ"} />
                    </RegisterStyle.Column>

                    <RegisterStyle.Column>
                        <RegisterStyle.UserIcon>
                            <FontAwesomeIcon icon={faUser} />
                        </RegisterStyle.UserIcon>
                        <RegisterLoginInput label="BAIRRO" />
                        <RegisterLoginInput label="NÚMERO" />
                        <RegisterLoginInput label="TELEFONE" />
                        <RegisterLoginInput label="DATA DE NASCIMENTO" type="date" />
                        <RegisterLoginInput label="SENHA" type="password" />
                        <RegisterStyle.RegisterButton disabled>
                            Register
                        </RegisterStyle.RegisterButton>

                        <RegisterStyle.LoginLink>
                            Já possui conta?
                            <a href="/login">Logue-se</a>
                        </RegisterStyle.LoginLink>
                    </RegisterStyle.Column>
                </RegisterStyle.Form>
            </RegisterStyle.Container>
        </RegisterStyle.Wrapper>
    );
};

export default RegisterForm;
