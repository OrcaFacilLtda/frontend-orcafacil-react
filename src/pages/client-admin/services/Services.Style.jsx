import styled from "styled-components";
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from "../../../styles/Root";

const Container = styled.div`
    padding: 24px;
    background: ${paletteColors.aliceBlue};
    min-height: 95vh;
    box-sizing: border-box;
`;

const Header = styled.div`
    margin-bottom: 24px;

    h2 {
        margin: 0 0 4px;
        font-weight: ${fontWeights.extraBold};
        font-size: ${fontSizes['2xl']};
        font-family: ${fontFamilies.primary};
    }

    p {
        margin: 0;
        color: ${paletteColors.dimGray};
        font-size: ${fontSizes.base};
        font-family: ${fontFamilies.primary};
    }
`;

const FilterArea = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    background: ${paletteColors.white};
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`;

const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    color: ${paletteColors.dimGray};
    font-family: ${fontFamilies.primary};

    input {
        border: none;
        outline: none;
        width: 100%;
        font-size: ${fontSizes.sm};
        font-family: ${fontFamilies.primary};
    }
`;

const Input = styled.input`
    flex: 1;
    padding: 10px 14px;
    font-size: ${fontSizes.base};
    border: 1px solid ${paletteColors.lightGrayBorder};
    border-radius: 6px;
    outline: none;
    font-family: ${fontFamilies.primary};
`;

const Select = styled.select`
    padding: 10px 14px;
    font-size: ${fontSizes.base};
    border: 1px solid ${paletteColors.lightGrayBorder};
    border-radius: 6px;
    outline: none;
    font-family: ${fontFamilies.primary};
`;

const Button = styled.button`
    background: ${paletteColors.secondaryText};
    color: ${paletteColors.white};
    border: none;
    padding: 10px 18px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: ${fontWeights.semiBold};
    transition: background 0.2s;
    font-family: ${fontFamilies.primary};

    &:hover {
        background: #1d4ed8;
    }
`;

const Card = styled.div`
    background: ${paletteColors.white};
    border: 1px solid ${paletteColors.lightGrayBorder};
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;
`;

const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        margin: 0;
        font-size: ${fontSizes.lg}; 
        font-weight: ${fontWeights.bold}; 
        font-family: ${fontFamilies.primary};
    }
`;

const Status = styled.span`
    background-color: ${({status}) =>
            status === "Em andamento"
                    ? "#fef08a"
                    : status === "Finalizado"
                            ? "#4ade80"
                            : "#fca5a5"};
    color: ${({status}) =>
            status === "Em andamento"
                    ? "#92400e"
                    : status === "Finalizado"
                            ? "#064e3b"
                            : "#7f1d1d"};
    font-weight: ${fontWeights.semiBold}; 
    padding: 6px 12px;
    border-radius: 20px;
    font-size: ${fontSizes.sm}; 
    font-family: ${fontFamilies.primary};
`;

const Info = styled.p`
    color: ${paletteColors.dimGray};
    font-size: ${fontSizes.sm}; 
    margin: 8px 0;
    font-family: ${fontFamilies.primary};
`;

const Description = styled.p`
    font-size: 15px; 
    color: #374151; 
    margin-bottom: 12px;
    font-family: ${fontFamilies.primary};
`;

const ActionButton = styled.button`
    background: ${paletteColors.secondaryText};
    color: ${paletteColors.white};
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: ${fontWeights.semiBold};
    cursor: pointer;
    transition: background 0.2s;
    font-family: ${fontFamilies.primary};

    &:hover {
        background: #1d4ed8;
    }
`;

export default {
    Container,
    Header,
    FilterArea,
    SearchInputWrapper,
    Input,
    Select,
    Button,
    Card,
    TitleRow,
    Status,
    Info,
    Description,
    ActionButton,
};
