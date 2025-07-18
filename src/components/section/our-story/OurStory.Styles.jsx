import styled from "styled-components";
import { fontSizes, paletteColors, fontFamilies,fontWeights} from "../../../styles/Root";

const Container = styled.div`
  font-family: ${fontFamilies.primary};
  color: ${paletteColors.secondaryText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${paletteColors.lightBackground};
`;

const Title = styled.h1`
  padding-top: 90px;
  font-size: ${fontSizes["5xl"]};
  font-weight: 700;
  text-align: center;
  color: ${paletteColors.primary};
  margin-bottom: 30px;
`;

const Divider = styled.hr`
  width: 80%;
  height: 1px;
  background-color: ${paletteColors.secondaryText};
  border: none;
  margin: 0 auto 40px auto;
  border-radius: 2px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 80%;
  font-size: ${fontSizes.base};
  color: ${paletteColors.terciaryText};
  text-align: left;
`;

const Icon = styled.div`
  font-size: 36px;
  color: ${paletteColors.primary};
  margin-bottom: 10px;
  text-align: center;

  svg {
    font-size: 70px;
  }
`;

const Subtitle = styled.em`
  display: block;
  font-size: ${fontSizes["3xl"]};
  margin-bottom: 20px;
  color: ${paletteColors.primary};
  text-align: center;
`;

const Paragraph = styled.p`
Font-size: ${fontSizes.lg};
font-weight:100;
margin-bottom: 20px;
`;

const List = styled.ul`
  width: 100%;
  padding-left: 20px;
  list-style-position: inside;
  color: ${paletteColors.terciaryText};
  font-weight: 200;
  text-align: flex-start;
  text-decoration: underline;
  cursor: default;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

export default {
  Container,
  Title,
  Divider,
  Section,
  Icon,
  Subtitle,
  Paragraph,
  List,
  ListItem,
};
