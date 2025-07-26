import styled from 'styled-components';

const Container = styled.div`
    background: #f9fafb;
    min-height: 95vh;
    padding: 24px;
    box-sizing: border-box;
`;

const Header = styled.div`
    margin-bottom: 24px;

    h2 {
        margin: 0 0 4px;
        font-weight: 800;
        font-size: 24px;
        color: #111827;
    }

    p {
        margin: 0;
        color: #6b7280;
        font-size: 16px;
    }
`;

const SummaryCards = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    flex-wrap: wrap;
`;

const Card = styled.div`
    background: white;
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
        font-size: 14px;
        font-weight: 500;
        color: #6b7280;
    }

    strong {
        font-size: 26px;
        font-weight: 800;
        color: #111827;
        display: block;
        margin-top: 4px;
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
    gap: 24px;
    flex-wrap: wrap;
`;

const ChartCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 54px;
    flex: 1;
    min-width: 425px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    background-color: #f3f3f3;
    box-sizing: border-box;
`;

const ChartFooter = styled.div`
    margin-top: 26px;
    line-height: 0.5;

    strong {
        display: block;
        font-weight: 700;
        font-size: 18px;
    }

    p {
        color: #6b7280;
        font-size: 16px;
    }
`;

const PerformanceStyle = {
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

export default PerformanceStyle;
