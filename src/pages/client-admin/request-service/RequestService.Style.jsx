import styled from "styled-components";
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
`;

const Header = styled.div`
    margin-bottom: 24px;

    h2 {
        margin: 0 0 4px;
        font-weight: ${fontWeights.extraBold};
        font-size: ${fontSizes['3xl']};        
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

const SummaryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin-bottom: 40px;
`;

const SummaryItem = styled.div`
    background: ${paletteColors.white};
    padding: 0px 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SummaryIcon = styled.div`
    background-color: ${({ color }) => color || "#ccc"};
    padding: 6px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizes['2xl']}; 
    color: ${paletteColors.white};
`;

const SummaryTitle = styled.p`
    font-size: ${fontSizes.base};  
    font-weight: ${fontWeights.semiBold};
    color: ${paletteColors.dimGray};
    font-family: ${fontFamilies.primary};
`;

const SummaryValue = styled.p`
    font-size: ${fontSizes['3xl']}; 
    font-weight: ${fontWeights.extraBold}; 
    color: ${paletteColors.terciaryText};
    font-family: ${fontFamilies.primary};
`;

const RecentArea = styled.div`
    margin-top: 32px;
`;

const RecentTitle = styled.h3`
    font-size: ${fontSizes.lg};    
    font-weight: ${fontWeights.semiBold}; 
    color: ${paletteColors.primary};
    margin-bottom: 16px;
    font-family: ${fontFamilies.primary};
`;

const FilterBox = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1 1 200px;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: ${fontSizes.sm};   
    font-family: ${fontFamilies.primary};

    &:focus {
        outline: none;
        border-color: ${paletteColors.secondaryText};
        box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
    }
`;

const Select = styled.select`
    flex: 1 1 180px;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: ${fontSizes.sm};
    background-color: ${paletteColors.white};
    color: ${paletteColors.dimGray};
    font-family: ${fontFamilies.primary};

    &:focus {
        outline: none;
        border-color: ${paletteColors.secondaryText};
        box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
    }
`;

const FilterButton = styled.button`
    background-color: ${paletteColors.secondaryText};
    color: ${paletteColors.white};
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: ${fontSizes.sm};
    cursor: pointer;
    font-family: ${fontFamilies.primary};

    &:hover {
        background-color: #1e40af;
    }
`;

const ServiceList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ServiceItem = styled.li`
    background: ${paletteColors.white};
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const ServiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0.1;
`;

const ClientName = styled.p`
    font-weight: ${fontWeights.semiBold};  
    color: ${paletteColors.terciaryText};
    font-family: ${fontFamilies.primary};
`;

const ServiceName = styled.p`
    font-size: ${fontSizes.sm};
    color: ${paletteColors.dimGray};
    font-family: ${fontFamilies.primary};
`;

const ServiceTime = styled.span`
    font-size: ${fontSizes.xs};
    color: #9ca3af; 
    font-family: ${fontFamilies.primary};
`;

const ViewButton = styled.button`
    background-color: ${paletteColors.secondaryText};
    color: ${paletteColors.white};
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: ${fontSizes.sm};
    cursor: pointer;
    font-family: ${fontFamilies.primary};

    &:hover {
        background-color: #1e40af;
    }
`;

const HireButton = styled.button`
    background-color: ${paletteColors.secondaryText};
    color: ${paletteColors.white};
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: ${fontSizes.sm};
    cursor: pointer;
    font-family: ${fontFamilies.primary};

    &:hover {
        background-color: #1d4ed8;
    }
`;

export default {
    Container,
    Header,
    SummaryGrid,
    SummaryItem,
    TextContainer,
    SummaryIcon,
    SummaryTitle,
    SummaryValue,
    RecentArea,
    RecentTitle,
    FilterBox,
    Input,
    Select,
    FilterButton,
    ServiceList,
    ServiceItem,
    ServiceInfo,
    ClientName,
    ServiceName,
    ServiceTime,
    ViewButton,
    HireButton,
};
