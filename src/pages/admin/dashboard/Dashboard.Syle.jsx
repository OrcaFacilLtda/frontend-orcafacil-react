import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  background: #f9fafb;
  min-height: 100vh;
    box-sizing: border-box;
`;

export const Header = styled.div`
  margin-bottom: 24px;

  h2 {
    margin: 0 0 4px;
    font-weight: 800;
      font-size: 24px;
  }

  p {
    margin: 0;
    color: #6b7280;
    font-size: 16px;
  }
`;

export const SummaryCards = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 54px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px 20px;
  flex: 1;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

export const CardInfo = styled.div`
  span {
    font-size: 18px;
      font-weight: 500;
    color: #374151;
  }

  strong {
    font-size: 22px;
    display: block;
    margin-top: 4px;
  }
`;

export const IconWrapper = styled.div`
  background: #bfdbfe;
  border-radius: 8px;
  padding: 8px;
  font-size: 20px;
  color: #1e40af;
`;

export const ChartsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const ChartCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 54px;
  flex: 1;
  min-width: 425px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.05);
    background-color: #F3F3F3;
    box-sizing: border-box;
`;

export const ChartFooter = styled.div`
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

// Exporta tudo num objeto chamado DashboardStyle
const DashboardStyle = {
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

export default DashboardStyle;
