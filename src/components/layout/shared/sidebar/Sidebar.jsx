import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SidebarStyle from './Sidebar.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import sidebarLinks from './sidebarLinks';

export default function Sidebar({ user }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const isActive = (path) => (location.pathname.includes(path) ? 'active' : '');

    return (
        <SidebarStyle.Container>
            <div>
                <SidebarStyle.Header>
                    <SidebarStyle.Logo>
                        <FontAwesomeIcon icon={sidebarLinks[0].icon} />
                    </SidebarStyle.Logo>
                    <SidebarStyle.TitleBlock>
                        <SidebarStyle.Title>OrçaFácil</SidebarStyle.Title>
                        <SidebarStyle.Role>{user.role === 'provider' ? 'Provider' : 'Client'}</SidebarStyle.Role>
                    </SidebarStyle.TitleBlock>
                </SidebarStyle.Header>

                <SidebarStyle.Nav>
                    {sidebarLinks
                        .filter((link) => link.showFor.includes(user.role))
                        .map((link) => (
                            <li key={link.key}>
                                <Link
                                    to={user.role === 'provider' ? link.toProvider : link.toClient}
                                    className={isActive(user.role === 'provider' ? link.toProvider : link.toClient)}
                                >
                                    <FontAwesomeIcon icon={link.icon} />
                                    {user.role === 'provider' ? link.labelProvider : link.labelClient}
                                </Link>
                            </li>
                        ))}
                </SidebarStyle.Nav>
            </div>

            <SidebarStyle.FooterContainer>
                <SidebarStyle.Footer>
                    <img src={user.avatar} alt="avatar" />
                    <div>
                        <strong>{user.name}</strong>
                        <span>{user.categoria}</span>
                    </div>
                </SidebarStyle.Footer>
                <SidebarStyle.LogoutWrapper>
                    <button onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                    </button>
                </SidebarStyle.LogoutWrapper>
            </SidebarStyle.FooterContainer>
        </SidebarStyle.Container>
    );
}
