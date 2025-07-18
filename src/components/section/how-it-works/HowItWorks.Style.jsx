import styled from "styled-components";
import { fontSizes, paletteColors, fontFamilies } from "../../../styles/Root";

export const Section = styled.section`
  background: #f9fbfd;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${fontSizes["5xl"]};
  font-weight: bold;
  color: ${paletteColors.secondaryText};
  font-family: ${fontFamilies.primary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px; /* Espaçamento horizontal aumentado */
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  max-width: 300px;
  text-align: justify;
  padding: 0 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Icon = styled.div`
  background-color: #2f80ed;
  color: white;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 40px;
  }
`;

export const Texts = styled.div`
  h4 {
    font-size: ${fontSizes["xl"]}; /* Era 15px, agora usa xl */
    font-weight: 600;
    color: #121212;
    margin: 0;
  }

  p {
    font-size: ${fontSizes["sm"]}; /* Era 13px, agora sm (ou md, se preferir mais destaque) */
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 520px; /* Aumentado */
  height: auto;
  object-fit: contain;

  @media (max-width: 900px) {
    margin: 20px 0;
    width: 240px; /* Também ajustado no mobile */
  }
`;

export default {
  Section,
  Title,
  Content,
  Side,
  Item,
  Icon,
  Texts,
  ImageWrapper,
  Image,
};
