import styled from 'styled-components';
import {
    paletteColors,
    fontSizes,
    fontFamilies,
    fontWeights,
} from '../../../styles/Root';

const Container = styled.div`
    padding: 24px;
    background: #f7f9fc;
    min-height: 100vh;
    color: #222;
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
    margin-bottom: 24px;
`;

const Card = styled.div`
    background: ${paletteColors.white};
    border-radius: 8px;
    padding: 16px 20px;
    flex: 1;
    max-width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: ${fontSizes.lg};
    font-weight: ${fontWeights.medium};
    color: ${paletteColors.terciaryText};
  }

  strong {
    font-size: ${fontSizes['2xl']};
    display: block;
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
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
    box-sizing: border-box;
`;

const SectionHeader = styled.div`
    margin-bottom: 12px;

    h4 {
        margin: 0 0 12px 0;
        font-weight: ${fontWeights.semiBold};
        font-size: ${fontSizes.lg};
        color: ${paletteColors.black};
    }
`;

const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid ${paletteColors.lightGrayBorder};
    border-radius: 6px;
    color: ${paletteColors.dimGray};
    margin-bottom: 12px;

    input {
        border: none;
        outline: none;
        width: 100%;
        font-size: ${fontSizes.sm};
        font-family: ${fontFamilies.primary};
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ListItem = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  padding: 12px 16px;

  strong {
    display: block;
    margin-bottom: 4px;
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.base};
    color: ${paletteColors.black};
  }

  p {
    margin: 0 0 8px 0;
    font-size: ${fontSizes.xs}; // 13px ≈ 12px
    color: #555;
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
    font-size: ${fontSizes.xs};
    cursor: pointer;
    font-family: ${fontFamilies.primary};
  }

  .btn-analyze {
    background: #c67c00;
    color: ${paletteColors.white};
  }

  .btn-reject,
  .btn-delete {
    background: #c0c0c0;
    color: #444;
  }

  .btn-edit {
    background: ${paletteColors.roy};
    color: ${paletteColors.white};
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
};
