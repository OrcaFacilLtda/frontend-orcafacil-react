import styled from "styled-components";
import { paletteColors,fontSizes } from "../../../styles/Root.jsx";

const Section = styled.section`
  background-color: ${paletteColors.white};
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${fontSizes["3xl"]};
  font-weight: bold;
  color: #121212;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: ${fontSizes["xl"]};
  color: ${paletteColors.dimGray};
  margin-bottom: 90px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:200px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ color }) => color || "#2F80ED"};
  }
`;

const Label = styled.p`
  font-size: ${fontSizes["lg"]};
  font-weight: 500;
  color: ${paletteColors.black};
`;

export default {
  Section,
  Title,
  Description,
  CardsContainer,
  Card,
  Label,
};
