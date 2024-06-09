import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import NewsLetter from "./pages/NewsLetter";
import NewsletterAdd from "./pages/NewsLetterAdd";
import User from "./pages/User";
import UserAdd from "./pages/UserAdd";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <DashboardLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/newsletters",
                    element: <NewsLetter />,
                },
                {
                    path: "/newsletteradd",
                    element: <NewsletterAdd />,
                },
                {
                    path: "/users",
                    element: <User />,
                },
                {
                    path: "/usersadd",
                    element: <UserAdd />,
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

