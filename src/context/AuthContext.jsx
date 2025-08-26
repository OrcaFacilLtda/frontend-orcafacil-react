import { createContext, useState, useEffect } from "react";
import api from "../services/api/api.js";
import { jwtDecode } from "jwt-decode"; // 1. IMPORTAR A BIBLIOTECA
import { getProfileByEmail } from "../services/api/profileService.js"; // 2. IMPORTAR A NOVA FUNÇÃO

export const AuthContext = createContext(null);

// Função para ler o cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 3. EFEITO PARA VERIFICAR A SESSÃO NA INICIALIZAÇÃO
    useEffect(() => {
        const initializeAuth = async () => {
            const token = getCookie("auth-token");
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    // O 'sub' (subject) do nosso token é o email
                    const userEmail = decodedToken.sub;
                    if (userEmail) {
                        const userData = await getProfileByEmail(userEmail);
                        setUser(userData);
                    }
                } catch (error) {
                    console.error("Falha ao validar token:", error);
                    setUser(null);
                }
            }
            setLoading(false);
        };

        initializeAuth();
    }, []);

    const login = async (email, password) => {
        try {
            await api.post("/login", { email, password });
            // Após o login, o cookie é definido pelo backend.
            // Agora, buscamos os dados do utilizador com base no novo token.
            const token = getCookie("auth-token");
            if (token) {
                const decodedToken = jwtDecode(token);
                const userData = await getProfileByEmail(decodedToken.sub);
                setUser(userData);
            }
        } catch (error) {
            console.error("Falha no login:", error);
            setUser(null);
            throw error; // Propaga o erro para a página de login poder exibi-lo
        }
    };

    const logout = async () => {
        try {
            await api.post("/logout");
        } finally {
            // Limpa o estado do utilizador independentemente do resultado
            setUser(null);
        }
    };

    if (loading) {
        return <div>A carregar sessão...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};