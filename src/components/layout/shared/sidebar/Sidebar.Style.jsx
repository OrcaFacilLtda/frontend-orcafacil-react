import styled from 'styled-components';
import {
    paletteColors,
    fontWeights,
    fontFamilies,
    fontSizes,
} from '../../../../styles/Root.jsx';

 const Container = styled.div`
    width: 240px;
    background: ${paletteColors.white};
    min-height: 100vh;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    font-family: ${fontFamilies.primary};
`;

 const Header = styled.div`
    padding: 24px 16px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #f3f4f6;
    font-family: ${fontFamilies.primary};
`;

 const Logo = styled.div`
    background: ${paletteColors.roy.trim()};
    color: ${paletteColors.white};
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizes['3xl']}; 
    font-family: ${fontFamilies.primary};
    flex-shrink: 0;
`;

 const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${fontFamilies.primary};
`;

 const Title = styled.span`
    font-weight: ${fontWeights.black};  
    font-size: ${fontSizes['2xl']};     
    color: ${paletteColors.terciaryText};  
    line-height: 1.2;
    font-family: ${fontFamilies.primary};
`;

 const Role = styled.span`
    font-size: ${fontSizes.xs};         
    font-weight: ${fontWeights.medium};
    color: #6b7280;                   
    margin-top: 2px;
    font-family: ${fontFamilies.primary};
`;

 const Nav = styled.ul`
  list-style: none;
  padding: 16px 0 0;
  margin: 0;
  font-family: ${fontFamilies.primary};

  li {
    margin: 6px 0;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      border-radius: 8px;
      text-decoration: none;
      color: ${paletteColors.terciaryText};  
      font-weight: ${fontWeights.medium};
        font-size: ${fontSizes.xl};
      font-family: ${fontFamilies.primary};

      &:hover {
        background: #f0f0f0;
      }

      &.active,
      &:focus {
        background: ${paletteColors.roy.trim()};
        color: ${paletteColors.white};
      }
    }
  }
`;

 const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${fontFamilies.primary};
`;

 const Footer = styled.div`
  padding: 16px;
  background: ${paletteColors.aliceBlue.trim()};  
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${fontFamilies.primary};


  strong {
      font-size: ${fontSizes.xl};
    display: block;
    color: ${paletteColors.black};       
    font-family: ${fontFamilies.primary};
  }

  span {
    font-size: ${fontSizes.xs};          
    color: #6b7280;                      
    font-family: ${fontFamilies.primary};
  }
`;

 const LogoutWrapper = styled.div`
  padding: 10px 16px 16px;
  border-top: 1px solid #f3f8f8;
  background: ${paletteColors.aliceBlue.trim()};
  font-family: ${fontFamilies.primary};

  button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border: none;
    background: transparent;
    font-weight: ${fontWeights.medium};
      font-size: ${fontSizes.xl};
    color: ${paletteColors.terciaryText}; 
    cursor: pointer;
    border-radius: 8px;
    font-family: ${fontFamilies.primary};

    &:hover {
      background: #f0f0f0;
    }
  }
`;

export default  {
    Container,
    Header,
    Logo,
    TitleBlock,
    Title,
    Role,
    Nav,
    FooterContainer,
    Footer,
    LogoutWrapper,
};

