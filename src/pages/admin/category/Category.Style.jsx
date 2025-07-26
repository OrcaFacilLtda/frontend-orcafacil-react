import styled from 'styled-components';
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from '../../../styles/Root';

 const Container = styled.div`
    padding: 24px;
    background: ${paletteColors.aliceBlue};
    min-height: 100vh;
    box-sizing: border-box;
    font-family: ${fontFamilies.primary};
`;

 const Header = styled.div`
    margin-bottom: 24px;

    h2 {
        margin: 0 0 4px;
        font-weight: ${fontWeights.extraBold};
        font-size: ${fontSizes['2xl']};
        color: ${paletteColors.black};
    }

    p {
        margin: 0;
        color: ${paletteColors.dimGray};
        font-size: ${fontSizes.base};
        font-weight: ${fontWeights.regular};
    }
`;

 const InfoCards = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 34px;
`;

 const Card = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    padding: 16px 20px;
    flex: 1;
    max-width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

 const CardInfo = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: ${fontSizes.base};
        font-weight: ${fontWeights.medium};
        color: ${paletteColors.terciaryText};
    }

    strong {
        font-size: ${fontSizes['2xl']};
        margin-top: 4px;
        font-weight: ${fontWeights.bold};
        color: ${paletteColors.black};
    }
`;

 const IconWrapper = styled.div`
    background: #ffecb5;
    border-radius: 8px;
    padding: 8px;
    font-size: ${fontSizes.lg};
    color: #d97706;
`;

 const Sections = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;

 const Section = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    padding: 45px;
    flex: 1;
    min-width: 720px;
    min-height: 600px;
    max-height: 600px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

 const SectionHeader = styled.div`
    margin-bottom: 12px;
`;

 const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid ${paletteColors.lightGrayBorder};
    border-radius: 6px;
    color: ${paletteColors.dimGray};

    input {
        border: none;
        outline: none;
        width: 100%;
        font-size: ${fontSizes.sm};
        font-family: ${fontFamilies.primary};
        font-weight: ${fontWeights.regular};
    }
`;

 const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

 const ListItem = styled.div`
    border: 1px solid ${paletteColors.primary};
    border-radius: 8px;
    padding: 12px 16px;

    strong {
        display: block;
        margin-bottom: 4px;
        font-weight: ${fontWeights.semiBold};
        font-size: ${fontSizes.base};
        color: ${paletteColors.black};
    }

    p {
        margin: 0 0 8px 0;
        font-size: ${fontSizes.sm};
        color: ${paletteColors.dimGray};
        font-weight: ${fontWeights.regular};
    }
`;

 const ButtonsWrapper = styled.div`
    display: flex;
    gap: 8px;

    button {
        padding: 4px 12px;
        border-radius: 4px;
        border: none;
        font-size: ${fontSizes.sm};
        font-family: ${fontFamilies.primary};
        font-weight: ${fontWeights.medium};
        cursor: pointer;
    }

    button:first-child {
        background: #c67c00;
        color: ${paletteColors.white};
    }

    button:last-child {
        background: #c0c0c0;
        color: #444;
    }
`;

 const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

 const FormGroup = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 6px;
        font-weight: ${fontWeights.semiBold};
        font-size: ${fontSizes.sm};
        color: ${paletteColors.black};
    }

    input {
        border: 1px solid ${paletteColors.lightGrayBorder};
        border-radius: 6px;
        padding: 8px 12px;
        font-size: ${fontSizes.base};
        font-family: ${fontFamilies.primary};
        font-weight: ${fontWeights.regular};
        outline: none;

        &:focus {
            border-color: ${paletteColors.roy};
        }
    }
`;

 const ButtonCreate = styled.button`
    margin-top: 12px;
    padding: 10px;
    background: ${paletteColors.primary};
    color: ${paletteColors.white};
    border: none;
    border-radius: 6px;
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.base};
    font-family: ${fontFamilies.primary};
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: ${paletteColors.roy};
    }
`;


export default {
    Container,
    Header,
    InfoCards,
    Card,
    CardInfo,
    IconWrapper,
    Sections,
    Section,
    SectionHeader,
    SearchInputWrapper,
    List,
    ListItem,
    ButtonsWrapper,
    Form,
    FormGroup,
    ButtonCreate,
};

