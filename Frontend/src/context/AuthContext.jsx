import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();

    const getCurrentUser = async () => {
      
        try {
            const response = await axios.get(
                "http://localhost:8000/api/v1/auth/users/current-user",
                {
                    withCredentials: true,
                }
            );
            const currentUser=response.data.data.user;
            setUser(currentUser);
            setIsLoggedIn(true);
            return currentUser;

        } catch (error) {
            setUser(null);
            setIsLoggedIn(false);
            throw error;
        } finally {
            setLoading(false);
        }
    };
const logOutUser = async () => {
    try {
        await axios.post(
            "http://localhost:8000/api/v1/auth/users/logout",
            {},
            {
                withCredentials: true,
            }
        );

        setUser(null);
        setIsLoggedIn(false);

        toast.success("Logged out successfully");

        setTimeout(() => {
            navigate("/", {
                replace: true,
            });
        }, 500);

    } catch (error) {
        toast.error(
            error.response?.data?.message || "Logout failed"
        );
    }
};
    useEffect(() => {
       getCurrentUser().catch(() => {});
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                setIsLoggedIn,
                loading,
                getCurrentUser,
                logOutUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};