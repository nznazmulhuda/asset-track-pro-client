import "./index.css";
import React from "react";
import axios from "axios";
import Router from "./Router/Router";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import QueryProvider from "./Provider/QueryProvider/QueryProvider";
import UserProvider from "./Provider/UserProvider/UserProvider";

axios.defaults.baseURL = import.meta.env.BASE_URL;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Query Provider */}
        <QueryProvider>
            {/* Authentication Provider */}
            <AuthProvider>
                {/* User Provider */}
                <UserProvider>
                    {/* Router Provider */}
                    <RouterProvider router={Router} />
                    {/* Toaster */}
                    <Toaster />
                </UserProvider>
            </AuthProvider>
        </QueryProvider>
    </React.StrictMode>,
);
