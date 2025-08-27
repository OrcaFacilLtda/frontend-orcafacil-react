import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api/api.js";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Inicializa autenticação ao montar
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                // Ajuste do endpoint
                const response = await api.get("/api/users/me");

                // response.data.data porque ApiResponse retorna { success, message, data }
                const userData = response.data.data;
                setUser(userData);

                // Redireciona de acordo com tipo
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
            redirectUser(userData.userType);
        } catch (error) {
            setUser(null);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await api.post("/logout");
        } finally {
            setUser(null);
            navigate("/login");
        }
    };

    if (loading) return <div>A carregar sessão...</div>;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};