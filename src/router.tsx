import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <DashboardLayout />,
            children: [
                {
                    path: "/",
                    element: <App />,
                },
            ],
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "/auth/login",
                    element: <Login />,
                },
                {
                    path: "/auth/register",
                    element: <Register />,
                },
            ],
        },  
    ],
);

export default router;

