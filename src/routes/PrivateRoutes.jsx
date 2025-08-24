import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

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
