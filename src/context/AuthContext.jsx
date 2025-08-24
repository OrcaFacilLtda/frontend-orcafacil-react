import { createContext, useState, useEffect } from "react";
import api from "../services/api/api.js";

// 1. Export the AuthContext so other files (like our hook) can import it
export const AuthContext = createContext(null);

// 2. AuthProvider is the only default export
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const response = await api.get("/api/users/me");
            setUser(response.data);
        } catch (error) {
            // FIX: Use the 'error' variable to provide more context in the console
            console.error("Failed to fetch user session:", error.message);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (email, password) => {
        await api.post("/login", { email, password });
        await fetchUser();
    };

    const logout = async () => {
        try {
            await api.post("/logout");
        } finally {
            setUser(null);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};