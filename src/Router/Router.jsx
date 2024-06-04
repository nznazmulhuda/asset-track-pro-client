import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import {
    AddAnAsset,
    AddAnEmployee,
    AllRequests,
    AssetsList,
    CustomRequestList,
    Error,
    Home,
    JoinAsEmployee,
    JoinAsHRManager,
    Login,
    MyAssets,
    MyEmployeeList,
    MyTeam,
    Profile,
    RequestForAsset,
} from "../Pages";
import Employee from "./Employee";
import Manager from "./Manager";
import { Payment } from "../Pages/HRManager";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/joinAsEmployee",
                element: <JoinAsEmployee />,
            },
            {
                path: "/joinAsHRManager",
                element: <JoinAsHRManager />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/myAssets",
                element: (
                    <Employee>
                        <MyAssets />
                    </Employee>
                ),
            },
            {
                path: "/myTeam",
                element: (
                    <Employee>
                        <MyTeam />
                    </Employee>
                ),
            },
            {
                path: "/requestForAsset",
                element: (
                    <Employee>
                        <RequestForAsset />
                    </Employee>
                ),
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/assetList",
                element: (
                    <Manager>
                        <AssetsList />
                    </Manager>
                ),
            },
            {
                path: "/addAnAsset",
                element: (
                    <Manager>
                        <AddAnAsset />
                    </Manager>
                ),
            },
            {
                path: "/allRequests",
                element: (
                    <Manager>
                        <AllRequests />
                    </Manager>
                ),
            },
            {
                path: "/customRequestList",
                element: (
                    <Manager>
                        <CustomRequestList />
                    </Manager>
                ),
            },
            {
                path: "/myEmployeeList",
                element: (
                    <Manager>
                        <MyEmployeeList />
                    </Manager>
                ),
            },
            {
                path: "/payment",
                element: (
                    <Manager>
                        <Payment />
                    </Manager>
                ),
            },
            {
                path: "/addAnEmployee",
                element: (
                    <Manager>
                        <AddAnEmployee />
                    </Manager>
                ),
            },
        ],
    },
]);

export default Router;
