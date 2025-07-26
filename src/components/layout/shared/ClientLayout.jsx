// ClientLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.jsx';
import SharedLayoutStyle from './SharedLayout.Style';

const ClientLayout = () => {
    const user = {
        name: 'Maria Souza',
        role: 'client',
        avatar: 'https://i.pravatar.cc/101',
        categoria: 'Cliente',
    };

    return (
        <SharedLayoutStyle.Container>
            <Sidebar user={user} />
            <SharedLayoutStyle.MainContent>
                <Outlet />
            </SharedLayoutStyle.MainContent>
        </SharedLayoutStyle.Container>
    );
};

export default ClientLayout;
