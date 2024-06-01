import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const UserContext = createContext(null);

function UserProvider({ children }) {
    const { role } = useContext(AuthContext);

    const userInfo = {
        role,
    };

    return (
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node,
};

export default UserProvider;
