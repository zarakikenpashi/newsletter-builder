import { useStateContext } from "@/store/ContextProvider";
import { Navigate, Outlet } from "react-router-dom"

export default function AuthLayout() {
  const { userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/" />
  }

    return (
        <div className="flex items-center justify-center h-screen">
        <Outlet />
      </div>
    )
}
