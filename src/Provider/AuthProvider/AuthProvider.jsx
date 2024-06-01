import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);

    user.displayName = "Nazmul Huda";
    user.photoURL =
        "https://www.corporatephotographerslondon.com/wp-content/uploads/2021/06/non-smiling-LinkedIn-profile-photo.jpg";

    const authInfo = {
        user,
        isLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
