import styled from "styled-components";
import {
    paletteColors,
    fontSizes,
    fontWeights,
    fontFamilies,
} from "../../../../styles/Root.jsx";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    padding: 24px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    font-family: ${fontFamilies.primary};
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h3 {
        margin: 0;
        font-size: ${fontSizes.lg};
        font-family: ${fontFamilies.primary};
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${paletteColors.terciaryText};
        font-family: ${fontFamilies.primary};
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Footer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 12px;

    input {
        flex: 1;
    }
`;

const SubmitButton = styled.button`
    background-color: ${paletteColors.roy};
    color: ${paletteColors.white};
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    font-weight: ${fontWeights.bold};
    cursor: pointer;
    font-family: ${fontFamilies.primary};

    &:hover {
        background-color: #1d4ed8;
    }
`;

export default {
    Overlay,
    ModalContainer,
    Header,
    Body,
    Footer,
    SubmitButton,
};
