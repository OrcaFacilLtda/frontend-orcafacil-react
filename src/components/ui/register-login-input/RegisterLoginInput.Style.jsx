// src/components/ui/register-login-input/RegisterLoginInput.Style.jsx

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    color: #217198;
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 15px;
    padding: 1rem;
    border: 1.5px solid #3b82f6;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;

    &:focus {
        border-color: #2563eb;
    }
`;

export const Icon = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #217198;
    cursor: pointer;
    font-size: 1.2rem;
`;

export default {
    Container,
    Label,
    InputWrapper,
    Input,
    Icon,
};
