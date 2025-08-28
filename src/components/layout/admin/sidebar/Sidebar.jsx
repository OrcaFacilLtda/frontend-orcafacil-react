import React,{useContext} from 'react';
import SidebarStyle from './Sidebar.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTachometerAlt,
    faUsers,
    faCogs,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../../context/AuthContext'; // 2. Importe o seu AuthContext


const Sidebar = () => {
    const { logout } = useContext(AuthContext);
    const handleLogout = (e) => {
        e.preventDefault();
        logout();     };

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

            <SidebarStyle.LogoutButton as="button" type="button" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sair
            </SidebarStyle.LogoutButton>
        </SidebarStyle.SidebarContainer>
    );
};

export default Sidebar;
