import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const access_token = localStorage.getItem("access_token");
  const location = useLocation();
  if (!access_token && location.pathname !== "/login") {
    return <Navigate to="/login" replace></Navigate>;
  } else if (access_token && location.pathname == "/login") {
    return <Navigate to="/" replace></Navigate>;
  }

  return children;
}
