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
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const ModalContainer = styled.div`
    background-color: ${paletteColors.white};
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    font-family: ${fontFamilies.primary};
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h3 {
        margin: 0;
        font-size: ${fontSizes.xl};
        font-family: ${fontFamilies.primary};
    }
`;

const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${paletteColors.terciaryText};
    font-size: ${fontSizes.lg};
    font-family: ${fontFamilies.primary};

    &:hover {
        color: ${paletteColors.black};
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InputRow = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    > div {
        flex: 1;
        min-width: 45%;
    }
`;

const SubmitButton = styled.button`
    margin-top: 12px;
    padding: 12px 16px;
    background-color: ${paletteColors.roy};
    color: ${paletteColors.white};
    border: none;
    border-radius: 4px;
    font-weight: ${fontWeights.bold};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: ${fontFamilies.primary};

    &:hover {
        background-color: #1d4ed8;
    }
`;

export default {
    Overlay,
    ModalContainer,
    Header,
    CloseButton,
    Body,
    InputRow,
    SubmitButton,
};
