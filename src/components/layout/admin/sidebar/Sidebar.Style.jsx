import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
    width: 240px;
    background: #ffffff;
    min-height: 100vh;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    box-sizing: border-box;
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bolder;
    color: #3b82f6;
    padding: 0 20px;
    margin-bottom: 20px;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
`;

const NavItem = styled.li`
    margin: 6px 0;
`;

const NavLinkStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 8px;
    text-decoration: none;
    color: #111827;
    font-weight: 500;
    margin: 0 10px;

    &.active {
        background: #3b82f6;
        color: white;
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
    font-weight: 500;
    cursor: pointer;
    width: calc(100% - 20px);
    text-align: left;
    border-radius: 8px;

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
