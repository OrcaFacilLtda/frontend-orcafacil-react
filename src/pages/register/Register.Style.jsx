import styled from "styled-components";
import { paletteColors, fontSizes, fontFamilies, fontWeights } from '../../styles/Root.jsx';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;


const Container = styled.div`
    width: 75%;
    height: auto;
    padding: 25px 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    max-width: 1600px;
    background-color: ${paletteColors.white};
`;
const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: ${paletteColors.secondaryText};
    font-weight: ${fontWeights.bold};
    cursor: pointer;
    font-family: ${fontFamilies.primary};
    margin-bottom: 20px;
    font-size: ${fontSizes.lg};

    &:hover {
        text-decoration: underline;
    }
`;

const Toggle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
`;

const Button = styled.button`
    width: 100%;
    max-width: 200px;
    height: 60px;
    border: none;
    background-color: ${({ active }) => (active ? paletteColors.roy : "#bdbdbd")};
    color: ${paletteColors.primaryText};
    font-weight: ${fontWeights.bold};
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: ${fontFamilies.primary};

    &:first-child {
        border-radius: 10px 0 0 10px;
    }

    &:last-child {
        border-radius: 0 10px 10px 0;
    }

    &:hover {
        background-color: ${({ active }) => (active ? "#2563EB" : "#9e9e9e")};
    }
`;

const Title = styled.h2`
    color: ${paletteColors.secondaryText};
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes['4xl']};
    font-family: ${fontFamilies.primary};
`;

const Form = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px 60px;
    align-items: flex-start;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    width:95%;
`;


const UserIcon = styled.div`
    padding: 15px;
    margin-bottom: 45px;
    width: 100px;
    height: 100px;
    background-color: ${paletteColors.roy};
    border-radius: 100%;
    font-size: ${fontSizes['6xl']};
    color: ${paletteColors.primaryText};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RegisterButton = styled.button`
    background-color: ${paletteColors.roy};
    color: ${paletteColors.primaryText};
    font-weight: ${fontWeights.bold};
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 100%;
    min-width: 300px;
    height: 45px;
    transition: background-color 0.3s;
    font-family: ${fontFamilies.primary};

    &:hover {
        background-color: #1a5ee0;
    }

    &:disabled {
        background-color: #bdbdbd;
        cursor: not-allowed;
    }
`;

const LoginLink = styled.p`
    margin-top: 15px;
    text-align: center;
    font-size: ${fontSizes.base};
    color: ${paletteColors.secondaryText};
    font-family: ${fontFamilies.primary};

    a {
        color: ${paletteColors.roy};
        text-decoration: none;
        font-weight: ${fontWeights.bold};
        margin-left: 5px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;


export default {
    Wrapper,
    Container,
    Toggle,
    Button,
    Title,
    Form,
    Column,
    UserIcon,
    RegisterButton,
    LoginLink,
    BackButton
};
