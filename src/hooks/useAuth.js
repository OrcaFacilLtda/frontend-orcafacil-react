import { useContext } from "react";
// Importe o AuthContext diretamente do ficheiro onde ele é criado.
// Certifique-se de exportar o AuthContext no ficheiro de contexto.
import { AuthContext } from "../context/AuthContext.jsx";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};