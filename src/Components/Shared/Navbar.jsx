import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Provider/UserProvider/UserProvider";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const drawerWidth = 240;

function Navbar(props) {
    let navItems;
    const { window } = props;
    const { user } = React.useContext(UserContext);
    const { isLogin, logout } = React.useContext(AuthContext);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const logo = "logo";

    if (user.role === "employee") {
        navItems = [
            "Home",
            "My Assets",
            "My Team",
            "Request For Asset",
            "profile",
        ];
    } else if (user.role === "hrManager") {
        navItems = [
            "Home",
            "Asset List",
            "Add An Asset",
            "All Requests",
            "Custom Request List",
            "My Employee List",
            "addAnEmployee",
            "Profile",
        ];
    } else {
        navItems = ["Home", "Join As Employee", "Join As HR Manager"];
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {logo}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <NavLink
                                to={
                                    item === "Home"
                                        ? "/"
                                        : item
                                              .split(" ")
                                              .join("")
                                              .charAt(0)
                                              .toLowerCase() +
                                          item.split(" ").join("").slice(1)
                                }
                            >
                                <ListItemText primary={item} />
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleLogout = () => {
        logout();
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box color={"black"} sx={{ display: "flex" }}>
            <AppBar
                color="secondary"
                style={{
                    position: "sticky",
                    marginBottom: 10,
                }}
                component="nav"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                        }}
                    >
                        {logo}
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingY: "10px",
                        }}
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item}
                                to={
                                    item === "Home"
                                        ? "/"
                                        : item
                                              .split(" ")
                                              .join("")
                                              .charAt(0)
                                              .toLowerCase() +
                                          item.split(" ").join("").slice(1)
                                }
                            >
                                <Button sx={{ color: "#fff" }}>{item}</Button>
                            </NavLink>
                        ))}

                        {isLogin ? (
                            <div className="flex items-center justify-end ml-5">
                                <img
                                    className="md:w-20 md:h-20 rounded-full"
                                    src={user.photoURL}
                                    alt=""
                                />

                                <h1 className="ml-5 font-bold text-lg cursor-pointer">
                                    {user.displayName}
                                </h1>

                                <button
                                    onClick={handleLogout}
                                    className="border py-2 px-4 rounded-lg transition-all ease-in hover:text-[#9826AC] hover:bg-secondary font-bold md:ml-5 text-lg"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to={"/login"}>
                                <button className="border py-2 px-4 rounded-lg transition-all ease-in hover:text-[#9826AC] hover:bg-secondary font-bold md:ml-5 text-lg">
                                    Login
                                </button>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                    <Divider />
                    {isLogin ? (
                        <div className="flex flex-col items-center">
                            <h1 className="ml-5 font-bold text-lg cursor-pointer">
                                {user.displayName}
                            </h1>

                            <div className="flex items-center gap-2 mt-3">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={user.photoURL}
                                    alt=""
                                />

                                <button
                                    onClick={handleLogout}
                                    className="border py-2 px-4 rounded-lg transition-all ease-in hover:text-[#9826AC] hover:bg-secondary font-bold md:ml-5 text-lg"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link to={"/login"}>
                            <button className="border py-2 px-4 rounded-lg transition-all ease-in hover:text-[#9826AC] hover:bg-secondary font-bold md:ml-5 text-lg">
                                Login
                            </button>
                        </Link>
                    )}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;
