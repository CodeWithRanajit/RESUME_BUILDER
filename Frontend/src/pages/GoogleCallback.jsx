import {
    useContext,
    useEffect,
    useRef,
} from "react";

import {
    useNavigate,
    useSearchParams,
} from "react-router-dom";

import toast from "react-hot-toast";

import { AuthContext } from "../context/AuthContext.jsx";

const GoogleAuthCallback = () => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const { getCurrentUser } = useContext(AuthContext);

    const hasHandledCallback = useRef(false);

    useEffect(() => {
        if (hasHandledCallback.current) {
            return;
        }

        hasHandledCallback.current = true;

        const handleGoogleCallback = async () => {
            const status = searchParams.get("status");
            
            if (status !== "success") {
                toast.error(
                    "Google login failed. Please try again."
                );

                setTimeout(() => {
                    navigate("/login", {
                        replace: true,
                    });
                }, 500);

                return;
            }

            try {
                await getCurrentUser();

                toast.success(
                    "Google login successful!"
                );

                setTimeout(() => {
                    navigate("/", {
                        replace: true,
                    });
                }, 500);

            } catch (error) {
                console.error(
                    "Google authentication failed:",
                    error
                );

                toast.error(
                    "Authentication failed. Please try again."
                );

                setTimeout(() => {
                    navigate("/login", {
                        replace: true,
                    });
                }, 500);
            }
        };

        handleGoogleCallback();
    }, [
        getCurrentUser,
        navigate,
        searchParams,
    ]);

    return <div>Signing you in...</div>;
};

export default GoogleAuthCallback;