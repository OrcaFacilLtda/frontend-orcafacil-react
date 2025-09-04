import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navigate} from "react-router-dom";

import PrivateRoute from "./PrivateRoutes.jsx";
import LandingPage from "../pages/landing-page/LandingPage.jsx";
import Login from "../pages/login/Login.jsx";
import Register from "../pages/register/Register.jsx";

import AdminLayout from "../components/layout/admin/admin-layout/AdminLayout.jsx";
import Dashboard from "../pages/admin/dashboard/Dashboard.jsx";
import Users from "../pages/admin/users/Users.jsx";
import Categories from "../pages/admin/category/Category.jsx";
import Moderation from "../pages/admin/modaration/Modaration.jsx";

import ProviderLayout from "../components/layout/shared/ProviderLayout.jsx";
import Services from "../pages/client-admin/services/Services.jsx";
import Performance from "../pages/contractor/performance/Perfomece.jsx";
import RequestService from "../pages/client-admin/request-service/RequestService.jsx";
import OrderDetails from "../pages/client-admin/order-details/OrderDetails.jsx";
import OrderProcess from "../pages/client-admin/order-process/OrderProcess.jsx";

import ClientLayout from "../components/layout/shared/ClientLayout.jsx";

import Profile from "../pages/client-admin/profilie/Profilie.jsx";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route
            path="/admin"
            element={
                <AdminLayout/>
            }
        >
            <Route index element={<Navigate to="dashboard" replace/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="category" element={<Categories/>}/>
            <Route path="moderation" element={<Moderation/>}/>

        </Route>

        <Route
            path="/client"
            element={<ClientLayout/>}
        >
            <Route index element={<Navigate to="services" replace/>}/>
            <Route path="services" element={<RequestService isClient={true}/>}/>
            <Route path="services/:id" element={<OrderDetails isProvider={false}/>}/>
            <Route path="manage-services" element={<Services isProvider={false}/>}/>
            <Route path="manage-services/:id" element={<OrderProcess isProvider={false}/>}/>
            <Route path="profile" element={<Profile isClient={true}/>}/>

        </Route>

        <Route
            path="/provider"
            element={<ProviderLayout/>}
        >
            <Route index element={<Navigate to="manage-services" replace/>}/>
            <Route path="manage-services" element={<Services/>}/>
            <Route path="manage-services/:id" element={<OrderProcess isProvider={true}/>}/>
            <Route path="services" element={<RequestService isClient={false}/>}/>
            <Route path="services/:id" element={<OrderDetails isProvider={true}/>}/>
            <Route path="performance" element={<Performance/>}/>
            <Route path="profile" element={<Profile isClient={false}/>}/>
        </Route>


        {/* 404 Page */}
        <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
);

export default AppRoutes;
