// ProviderLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.jsx';
import SharedLayoutStyle from './SharedLayout.Style';
import {AuthContext} from "../../../context/AuthContext.jsx"
import { useContext } from 'react';
const ProviderLayout = () => {
    const {user} = useContext(AuthContext);
    const dataUser = {
        name: user.name,
        role: 'provider',
        categoria: 'Prestador',
    };

    return (
        <SharedLayoutStyle.Container>
            <Sidebar user={dataUser} />
            <SharedLayoutStyle.MainContent>
                <Outlet />
            </SharedLayoutStyle.MainContent>
        </SharedLayoutStyle.Container>
    );
};

export default ProviderLayout;
