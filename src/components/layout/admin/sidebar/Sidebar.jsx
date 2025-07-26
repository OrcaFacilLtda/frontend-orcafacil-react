import React from 'react';
import SidebarStyle from './Sidebar.Style.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTachometerAlt,
    faUsers,
    faCogs,
    faShieldAlt,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
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

                {/*<SidebarStyle.NavItem>*/}
                {/*    <SidebarStyle.NavLinkStyled to="/admin/moderation">*/}
                {/*        <FontAwesomeIcon icon={faShieldAlt}/>*/}
                {/*        Moderação*/}
                {/*    </SidebarStyle.NavLinkStyled>*/}
                {/*</SidebarStyle.NavItem>*/}
            </SidebarStyle.NavList>

            <SidebarStyle.LogoutButton onClick={() => console.log('Sair clicado')}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sair
            </SidebarStyle.LogoutButton>
        </SidebarStyle.SidebarContainer>
    );
};

export default Sidebar;
