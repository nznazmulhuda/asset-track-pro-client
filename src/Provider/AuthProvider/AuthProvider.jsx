import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../../Firebase/Firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    // Register with Email and Password
    const register = (email, password) => {
        return auth.createUserWithEmailAndPassword(auth, email, password);
    };

    // Login with Email and Password
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(auth, email, password);
    };

    // Google Login
    const googleLogin = () => {
        return auth.signInWithPopup(auth, new auth.GoogleAuthProvider());
    };

    // Github Login
    const githubLogin = () => {
        return auth.signInWithPopup(auth, new auth.GithubAuthProvider());
    };

    // Unsubscribe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLogin(true);
                setIsLoading(false);
            } else {
                setUser({});
                setIsLogin(false);
                setIsLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        isLogin,
        isLoading,
        login,
        register,
        googleLogin,
        githubLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
