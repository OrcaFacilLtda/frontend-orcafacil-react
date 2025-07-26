import styled from "styled-components";
import { fontSizes, paletteColors, fontFamilies } from "../../../styles/Root.jsx";

const Section = styled.section`
  background-color: ${paletteColors.lightBackground};
  padding: 100px 5px 25px 5px;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: ${fontSizes["6xl"]};
  font-weight: bold;
  color: ${paletteColors.secondaryText};
  margin-bottom: 50px;
  font-family: ${fontFamilies.primary};
  max-width: 800px;
  width: 100%;
  text-align: center;
  word-wrap: break-word;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  width: 405px;
  height: 380px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  box-shadow: 0 4px 8px #00000010;
`;

const IconWrapper = styled.div`
  background-color: #e9f1ff;
  padding: 16px;
  border-radius: 50%;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${paletteColors.roy};
    width: 72px;
    height: 72px;
  }
`;

const Label = styled.p`
  font-size: ${fontSizes.xl};
  font-weight: bold;
  color: ${paletteColors.black};
`;

export default {
  Section,
  TitleWrapper,
  Title,
  CardsContainer,
  Card,
  IconWrapper,
  Label,
};
