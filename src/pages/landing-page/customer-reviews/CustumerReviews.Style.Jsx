import styled from "styled-components";
import { fontSizes, paletteColors, fontFamilies } from "../../../styles/Root.jsx";

const Section = styled.section`
  padding: 60px 20px;
  background-color: ${paletteColors.lightBackground};
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${fontSizes["5xl"]};
  font-family: ${fontFamilies.primary};
  color: ${paletteColors.secondaryText};
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  width: 80%;
  height: 1px;
  background-color: ${paletteColors.secondaryText};
  border: none;
  margin: 0 auto 40px auto;
  border-radius: 2px;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: transparent;
  border: 1px solid ${paletteColors.roy};
  border-radius: 10px;
  padding: 20px;
  max-width: 440px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
`;

const Avatar = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto 20px auto;
`;

const Name = styled.h4`
  margin: 10px 0 5px 0;
  font-size: ${fontSizes["lg"]};
  font-weight: bold;
`;

const Stars = styled.div`
  color: #f7b500;
  margin-bottom: 10px;

  svg {
    margin: 0 2px;
  }
`;

const Review = styled.p`
  font-size: ${fontSizes["sm"]};
  color: #555;
  line-height: 1.4;
`;

export default {
  Section,
  Title,
  Divider,
  CardsWrapper,
  Card,
  Avatar,
  Name,
  Stars,
  Review,
};
