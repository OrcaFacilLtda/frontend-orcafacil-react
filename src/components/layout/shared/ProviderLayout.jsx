// ProviderLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.jsx';
import SharedLayoutStyle from './SharedLayout.Style';

const ProviderLayout = () => {
    const user = {
        name: 'João Silva',
        role: 'provider',
        avatar: 'https://i.pravatar.cc/100',
        categoria: 'Eletricista',
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

export default ProviderLayout;
