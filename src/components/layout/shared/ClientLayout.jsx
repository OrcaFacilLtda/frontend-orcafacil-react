import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.jsx';
import SharedLayoutStyle from './SharedLayout.Style';
import {AuthContext} from "../../../context/AuthContext.jsx" 
import { useContext } from 'react';
const ClientLayout = () => {
    const {user} = useContext(AuthContext);
    const dataUser = {
        name: user.name,
        role: 'client',
        categoria: 'Cliente',
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

export default ClientLayout;
