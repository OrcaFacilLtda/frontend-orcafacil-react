// src/components/ui/register-login-input/RegisterLoginInput.jsx
import React, { useState } from 'react';
import RegisterLoginInputStyle from './RegisterLoginInput.Style.jsx';

const RegisterLoginInput = ({ label, type, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
        <RegisterLoginInputStyle.Container>
            {label && <RegisterLoginInputStyle.Label>{label}</RegisterLoginInputStyle.Label>}
            <RegisterLoginInputStyle.InputWrapper>
                <RegisterLoginInputStyle.Input type={inputType} {...props} />
                {isPassword && (
                    <RegisterLoginInputStyle.Icon onClick={() => setShowPassword(!showPassword)}>
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </RegisterLoginInputStyle.Icon>
                )}
            </RegisterLoginInputStyle.InputWrapper>
        </RegisterLoginInputStyle.Container>
    );
};

export default RegisterLoginInput;
