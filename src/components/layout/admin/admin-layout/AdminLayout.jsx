import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar.jsx';
import AdminLayoutStyle from './AdminLayout.Style.jsx';

const AdminLayout = () => {
    return (
        <AdminLayoutStyle.Container>
            <Sidebar />
            <AdminLayoutStyle.MainContent>
                <Outlet />
            </AdminLayoutStyle.MainContent>
        </AdminLayoutStyle.Container>
    );
};

export default AdminLayout;
