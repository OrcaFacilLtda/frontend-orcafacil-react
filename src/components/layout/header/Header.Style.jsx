import styled from "styled-components";
import { paletteColors } from "../../../styles/Root";

export const Conteiner = styled.div`
  width: 100%;
  min-height: 22px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${paletteColors.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  padding: 0 135px;
  margin: 0;
  /* Removido position: relative */
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
  color: ${paletteColors.secondaryText};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
  &:hover {
    color: ${paletteColors.secondaryText};
  }
  @media (max-width: 768px) {
    font-size: 14px;
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