import styled from "styled-components";
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from "../../../styles/Root";

const Container = styled.div`
    max-width: 1200px;
    margin: 40px;
    font-family: ${fontFamilies.primary};
    color: ${paletteColors.black};
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const TitleSection = styled.div``;

const Title = styled.h2`
    margin: 0;
    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.primary};
`;

const Subtitle = styled.p`
    margin: 4px 0 0 0;
    color: #555;
    font-size: ${fontSizes.sm};
    font-family: ${fontFamilies.primary};
`;

const HeaderButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const RejectButton = styled.button`
    background-color: #e74c4c;
    color: ${paletteColors.white};
    border: none;
    padding: 8px 16px;
    font-weight: ${fontWeights.semiBold};
    border-radius: 6px;
    cursor: pointer;
    font-family: ${fontFamilies.primary};
`;

const StatusBadge = styled.div`
    background-color: #f6a40a;
    color: ${paletteColors.white};
    font-weight: ${fontWeights.semiBold};
    padding: 8px 16px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: ${fontSizes.xs};
    font-family: ${fontFamilies.primary};
`;

const Content = styled.div`
    display: flex;
    gap: 40px;
`;

const LeftPanel = styled.div`
    flex: 2;
    background: #f8fafc;
    border-radius: 10px;
    padding: 0px 30px;
`;

const RightPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Card = styled.div`
    background: ${paletteColors.white};
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

const PersonInfo = styled.div`
    text-align: center;
`;

const PersonImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;

const PersonName = styled.h4`
    margin: 0;
    font-family: ${fontFamilies.primary};
`;

const PersonAddress = styled.p`
    font-size: ${fontSizes.xs};
    color: #666;
    margin: 5px 0 15px 0;
    font-family: ${fontFamilies.primary};
`;

const ContactButton = styled.a`
    display: block;
    margin: 5px 0;
    background-color: ${({ phone }) => (phone ? paletteColors.roy : "#d0d3d9")};
    color: ${({ phone }) => (phone ? paletteColors.white : "#444")};
    padding: 8px;
    border-radius: 6px;
    font-size: ${fontSizes.sm};
    text-decoration: none;
    cursor: pointer;
    font-family: ${fontFamilies.primary};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover {
        background-color: ${({ phone }) => (phone ? "#1a56d6" : "#c1c3c9")};
    }
`;

const ServiceDetails = styled.div`
    font-size: ${fontSizes.sm};
    color: #444;
    font-family: ${fontFamilies.primary};
`;

const ServiceRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
    }
`;

const ServiceLabel = styled.span`
    font-weight: ${fontWeights.semiBold};
    color: #666;
    font-family: ${fontFamilies.primary};
`;

const ServiceValue = styled.span`
    color: #333;
    font-family: ${fontFamilies.primary};
`;

const MaterialsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: ${fontFamilies.primary};
`;

const TableHead = styled.thead`
    font-weight: ${fontWeights.semiBold};
    border-bottom: 2px solid #ddd;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
    text-align: left;
    padding: 8px;
    color: #555;
    font-family: ${fontFamilies.primary};
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
    padding: 8px;
    border-bottom: 1px solid #eee;
    color: #444;
    font-family: ${fontFamilies.primary};
`;

export default {
    Container,
    Header,
    TitleSection,
    Title,
    Subtitle,
    HeaderButtons,
    RejectButton,
    StatusBadge,
    Content,
    LeftPanel,
    RightPanel,
    Card,
    PersonInfo,
    PersonImage,
    PersonName,
    PersonAddress,
    ContactButton,
    ServiceDetails,
    ServiceRow,
    ServiceLabel,
    ServiceValue,
    MaterialsTable,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableData,
};
