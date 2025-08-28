import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { paletteColors, fontWeights, fontFamilies, fontSizes } from '../../../../styles/Root'

const SidebarContainer = styled.div`
    width: 240px;
    background: ${paletteColors.white};
    min-height: 100vh;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    box-sizing: border-box;
    font-family: ${fontFamilies.primary};
`;

const Logo = styled.div`
    font-size: ${fontSizes['2xl']};    
    font-weight: ${fontWeights.extraBold};
    color: ${paletteColors.roy.trim()};    
    padding: 0 20px;
    margin-bottom: 20px;
    font-family: ${fontFamilies.primary};
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    font-family: ${fontFamilies.primary};
`;

const NavItem = styled.li`
    font-size: ${fontSizes.xl};
    margin: 6px 0;
    font-family: ${fontFamilies.primary};
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: ${paletteColors.terciaryText};  
  font-weight: ${fontWeights.medium};     
  margin: 0 10px;
  font-family: ${fontFamilies.primary};

  &.active {
    background: ${paletteColors.roy.trim()};
    color: ${paletteColors.white};
  }

  &:hover {
    background: #f0f0f0; 
  }
`;

const LogoutButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    margin: 20px 10px 0 10px;
    border: none;
    background: none;
    color: #dc2626;  
    font-weight: ${fontWeights.medium}
    cursor: pointer;
    width: calc(100% - 20px);
    text-align: left;
    border-radius: 8px;
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.xl};

    &:hover {
        background: #fef2f2; 
    }
`;

export default {
    SidebarContainer,
    Logo,
    NavList,
    NavItem,
    NavLinkStyled,
    LogoutButton,
};
