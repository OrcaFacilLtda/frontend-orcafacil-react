import styled from 'styled-components';
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from "../../../styles/Root";


const Container = styled.div`
    background: ${paletteColors.aliceBlue};
    min-height: 95vh;
    padding: 24px;
    box-sizing: border-box;
    font-family: ${fontFamilies.primary};
`;

const Header = styled.div`
    margin-bottom: 24px;

    h2 {
        margin: 0 0 4px;
        font-weight: ${fontWeights.extraBold};
        font-size: ${fontSizes['2xl']};
        color: ${paletteColors.terciaryText};
        font-family: ${fontFamilies.primary};
    }

    p {
        margin: 0;
        color: ${paletteColors.dimGray};
        font-size: ${fontSizes.base};
        font-family: ${fontFamilies.primary};
    }
`;

const SummaryCards = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    flex-wrap: wrap;
`;

const Card = styled.div`
    background: ${paletteColors.white};
    border-radius: 12px;
    padding: 16px 20px;
    flex: 1;
    min-width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const CardInfo = styled.div`
    span {
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.medium};
        color: ${paletteColors.dimGray};
        font-family: ${fontFamilies.primary};
    }

    strong {
        font-size: ${fontSizes['3xl']};
        font-weight: ${fontWeights.extraBold};
        color: ${paletteColors.terciaryText};
        display: block;
        margin-top: 4px;
        font-family: ${fontFamilies.primary};
    }
`;

const IconWrapper = styled.div`
    background: ${(props) => props.bg || '#DBEAFE'};
    color: ${(props) => props.color || '#1D4ED8'};
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ChartsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ChartCard = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    padding: 30px; 
    width: 100%;
    max-width: 800px; 
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    background-color: #f3f3f3;
    box-sizing: border-box;
`;

const ChartFooter = styled.div`
    margin-top: 26px;
    line-height: 0.5;
    text-align: center; 

    strong {
        display: block;
        font-weight: ${fontWeights.bold};
        font-size: ${fontSizes.lg};
        font-family: ${fontFamilies.primary};
    }

    p {
        color: ${paletteColors.dimGray};
        font-size: ${fontSizes.base};
        font-family: ${fontFamilies.primary};
    }
`;

export default {
    Container,
    Header,
    SummaryCards,
    Card,
    CardInfo,
    IconWrapper,
    ChartsContainer,
    ChartCard,
    ChartFooter,
};