import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api/api.js";
import { getProviderProfile } from "../services/api/providerService.js";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [providerData, setProviderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const response = await api.get("/api/users/me");
                const userData = response.data.data;
                setUser(userData);

                if (userData.userType === "PROVIDER") {
                    const profile = await getProviderProfile(userData.id);
                    setProviderData(profile);
                }

                redirectUser(userData.userType);
            } catch (error) {
                console.error("Erro ao inicializar auth:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const redirectUser = (userType) => {
        if (userType === "ADMIN") navigate("/admin");
        else if (userType === "PROVIDER") navigate("/provider");
        else if (userType === "CLIENT") navigate("/client");
        else navigate("/");
    };

    const login = async (email, password) => {
        try {
            await api.post("/login", { email, password });

            const response = await api.get("/api/users/me");
            const userData = response.data.data;
            setUser(userData);

            if (userData.userType === "PROVIDER") {
                const profile = await getProviderProfile(userData.id);
                setProviderData(profile);
            }

            redirectUser(userData.userType);
        } catch (error) {
            setUser(null);
            setProviderData(null);
            throw error;
        }
    };

    // Função de logout
    const logout = async () => {
        try {
            await api.post("/logout");
            console.log("Logout realizado com sucesso.");
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        } finally {
            setUser(null);
            setProviderData(null);
            navigate("/login");
        }
    };

    const updateUserData = (newUserData) => {
        setUser(prev => ({ ...prev, ...newUserData }));
    };

    const updateProviderData = (newProviderData) => {
        setProviderData(prev => ({ ...prev, ...newProviderData }));
    };

    if (loading) return <div>A carregar sessão...</div>;

    return (
        <AuthContext.Provider value={{
            user,
            providerData,
            login,
            logout,
            isAuthenticated: !!user,
            updateUserData,
            updateProviderData
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
