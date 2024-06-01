import { useContext } from "react";
import { UserContext } from "../Provider/UserProvider/UserProvider";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";

function Employee({ children }) {
    const { role } = useContext(UserContext);
    const navigate = useNavigate();

    if (role === "hrManager") {
        return <>{children}</>;
    }

    if (role === "employee") {
        navigate("/");
        return toast.error("This route is for employee");
    }

    navigate("/");
    return;
}

Employee.propTypes = {
    children: PropTypes.node,
};

export default Employee;
