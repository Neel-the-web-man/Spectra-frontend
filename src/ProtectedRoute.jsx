/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext.jsx";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    // if(loading) return <div>Loading...</div>
    // console.log(isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // Redirect to login
    }
    return children; // Render the protected component
};

export default ProtectedRoute;
