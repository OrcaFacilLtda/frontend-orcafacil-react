import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// children: conteúdo da rota
// allowed: tipo de usuário permitido
const PrivateRoute = ({ children, allowed }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.tipo !== allowed) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
