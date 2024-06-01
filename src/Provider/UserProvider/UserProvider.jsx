import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const UserContext = createContext(null);

function UserProvider({ children }) {
    const { user } = useContext(AuthContext);
    // user.role = "employee";
    // user.role = "hrManager";
    const userInfo = {
        user,
    };

    return (
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node,
};

export default UserProvider;
