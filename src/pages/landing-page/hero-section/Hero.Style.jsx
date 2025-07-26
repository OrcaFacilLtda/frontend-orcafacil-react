import { paletteColors,fontFamilies,fontSizes} from "../../../styles/Root.jsx";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 90vh; /* ou 100vh se for ocupar a tela toda */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 80px;
  background: ${paletteColors.backgroundBlueImage};
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
export const HeroImage = styled.img`
    width: 80%;
    height: 80%;
    object-fit: cover;
    object-position: center;
`

export  const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: ${paletteColors.white};
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.medium};
    text-align: flex-start;
    padding: 20px;
`

export const Title = styled.h1`
font-size: ${fontSizes['7xl']};
    font-weight: bold;
    margin-bottom: 10px;
`
export const Description = styled.p`
    font-size: ${fontSizes['2xl']};
    margin-bottom: 20px;
`
export const Button = styled.button`
    padding: 10px 20px; 
    background-color: ${paletteColors.primary};
    color: ${paletteColors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: ${fontSizes.medium};
    &:hover {
        background-color: ${paletteColors.primaryDark};
    }
`;

export default {
  Container: Container,
    Image: HeroImage,
    Content: ContentText,
    Title: Title,
    Description: Description,
    Button: Button
};