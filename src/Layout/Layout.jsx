import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;
