import styled from "styled-components";
import { paletteColors, fontSizes,fontFamilies,fontWeights} from "../../../styles/Root";

export const Conteiner = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${paletteColors.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  padding: 0 135px;
  margin: 0;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;  

export const Logo = styled.img`
  width: 140px;
    height: auto;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        width: 120px;
    }
    @media (max-width: 480px) {
        width: 100px;
    }
    @media (max-width: 320px) {
        width: 80px;
    }
`;

export const Title = styled.h1`
  font-size: 24px;      
    color: ${paletteColors.primaryText};
    margin-bottom: 10px;
    @media (max-width: 768px) {
    font-size: 20px;
    }
    @media (max-width: 480px) {
        font-size: 18px;
    }
    @media (max-width: 320px) {
        font-size: 16px;
    }
`;

export const Button = styled.button`
  background-color: ${paletteColors.primary};
    color: ${paletteColors.white};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${paletteColors.secondaryText};
    }
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 16px;
    }
`;

export const LoginAndRegisterConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;


export const Link = styled.a`
  position: relative;
  color: ${paletteColors.secondaryText};
  text-decoration: none;
  font-size: ${fontSizes.lg};
  font-family: ${fontFamilies.primary};
  font-weight: ${fontWeights.bold};
  transition: color 0.3s ease;

  &:hover {
    color: ${paletteColors.secondaryText};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${paletteColors.primary};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.sm.fontSize}; // 14px
  }
`;
export default {
  Container: Conteiner,
  Logo: Logo,
  Title: Title,
  Button: Button,
  LoginAndRegisterConteiner: LoginAndRegisterConteiner,
  Nav: Nav,
  Link: Link
};