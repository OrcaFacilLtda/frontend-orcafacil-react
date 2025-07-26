import { createContext, useContext, useState, useEffect } from "react";

// Criação do contexto de autenticação
const AuthContext = createContext(null);

// Provedor do contexto — envolve a aplicação no main.jsx
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Recupera usuário salvo no localStorage quando o app inicia
    useEffect(() => {
        try {
            const savedUser = localStorage.getItem("user");
            if (savedUser) setUser(JSON.parse(savedUser));
        } catch (error) {
            console.error("Erro ao recuperar usuário do localStorage:", error);
            localStorage.removeItem("user");
        }
    }, []);

    // Função para login — salva no state e localStorage
    const login = (tipo, dados) => {
        const userData = { tipo, ...dados };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    // Função para logout — limpa estado e localStorage
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook customizado para usar o contexto de autenticação
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};
