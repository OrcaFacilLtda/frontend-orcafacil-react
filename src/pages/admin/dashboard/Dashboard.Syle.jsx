import styled from 'styled-components';
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from '../../../styles/Root'; // ajuste o caminho conforme sua estrutura

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

const SummaryCards = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 54px;
    flex-wrap: wrap;
`;

const Card = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    padding: 16px 20px;
    flex: 1;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

const CardInfo = styled.div`
  span {
    font-size: ${fontSizes.lg}; // 18px
    font-weight: ${fontWeights.medium};
    color: ${paletteColors.terciaryText}; 
  }

  strong {
    font-size: ${fontSizes['2xl']}; 
    display: block;
    margin-top: 4px;
    font-weight: ${fontWeights.bold};
    color: ${paletteColors.primary};
  }
`;

const IconWrapper = styled.div`
    background: #bfdbfe; 
    border-radius: 8px;
    padding: 8px;
    font-size: ${fontSizes.lg};
    color: #1e40af; 
`;

const ChartsContainer = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;

const ChartCard = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    padding: 54px;
    flex: 1;
    min-width: 425px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 0.05);
    background-color: #F3F3F3; 
    box-sizing: border-box;
`;

const ChartFooter = styled.div`
  margin-top: 26px;
  line-height: 0.5;

  strong {
    display: block;
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.lg};
    color: ${paletteColors.black};
  }

  p {
    color: ${paletteColors.dimGray};
    font-size: ${fontSizes.base};
    font-weight: ${fontWeights.regular};
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
