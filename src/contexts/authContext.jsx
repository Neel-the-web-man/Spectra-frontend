/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import axios from "axios";
import { useLocation } from "react-router";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");
      // console.log(accessToken);
      if (accessToken) {
        try {
          const response = await axios.get("/users/current-user");
          if (response.status === 200) {
            setIsAuthenticated(true);
            setUser(response.data.data.user);
            //setuser properly
            // console.log("HI user: ",response);
            return <Navigate to="/" replace />; // Redirect to login
          } else {
            localStorage.removeItem("accessToken");
            setIsAuthenticated(false);
            setUser(null);
          }
        } catch (error) {
          // console.log("Get current user error: ",error);
          //401-token hai but expired hai refreshToken call laga
          if (error.status == 401) {
            try {
              // console.log("Trying to refresh token");
              const response = await axios.post("/users/refresh-token");
              // console.log("Refreshed Access Token: ",response);
              //store accessToken in localStorage here
              localStorage.setItem(
                "accessToken",
                response.data.data.accessToken,
              );
              return <Navigate to="/" replace />; // Redirect to login
            } catch (error) {
              //agar refresh token pe error ara hai toh login pe bhej
              // console.log("Error in refresh Token: ",error);
              setIsAuthenticated(false);
              return <Navigate to="/login" replace />;
            }
          }
          localStorage.removeItem("accessToken");
        }
      } else {
        localStorage.removeItem("accessToken");
        setIsAuthenticated(false);
        setUser(null);
        return <Navigate to="/login" replace />;
      }
      setLoading(false);
    };
    checkAuth();
  }, [location]);

  const login = async (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
