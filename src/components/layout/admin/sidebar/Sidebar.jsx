import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarStyle from './Sidebar.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTachometerAlt,
    faUsers,
    faCogs,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        navigate('/login');
    };

    return (
        <SidebarStyle.SidebarContainer>
            <SidebarStyle.Logo>OrçaFácil Admin</SidebarStyle.Logo>

            <SidebarStyle.NavList>
                <SidebarStyle.NavItem>
                    <SidebarStyle.NavLinkStyled to="/admin/dashboard">
                        <FontAwesomeIcon icon={faTachometerAlt} />
                        Dashboard
                    </SidebarStyle.NavLinkStyled>
                </SidebarStyle.NavItem>

                <SidebarStyle.NavItem>
                    <SidebarStyle.NavLinkStyled to="/admin/users">
                        <FontAwesomeIcon icon={faUsers} />
                        Usuários
                    </SidebarStyle.NavLinkStyled>
                </SidebarStyle.NavItem>

                <SidebarStyle.NavItem>
                    <SidebarStyle.NavLinkStyled to="/admin/category">
                        <FontAwesomeIcon icon={faCogs} />
                        Categorias
                    </SidebarStyle.NavLinkStyled>
                </SidebarStyle.NavItem>
            </SidebarStyle.NavList>

            <SidebarStyle.LogoutButton onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sair
            </SidebarStyle.LogoutButton>
        </SidebarStyle.SidebarContainer>
    );
};

export default Sidebar;
