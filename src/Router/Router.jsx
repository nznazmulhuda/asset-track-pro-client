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
                element: <MyAssets />,
            },
            {
                path: "/myTeam",
                element: <MyTeam />,
            },
            {
                path: "/requestForAsset",
                element: <RequestForAsset />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/assetList",
                element: <AssetsList />,
            },
            {
                path: "/addAnAsset",
                element: <AddAnAsset />,
            },
            {
                path: "/allRequests",
                element: <AllRequests />,
            },
            {
                path: "/customRequestList",
                element: <CustomRequestList />,
            },
            {
                path: "/myEmployeeList",
                element: <MyEmployeeList />,
            },
            {
                path: "/addAnEmployee",
                element: <AddAnEmployee />,
            },
        ],
    },
]);

export default Router;
