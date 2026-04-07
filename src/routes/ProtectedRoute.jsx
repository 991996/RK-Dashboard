import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import App from "@/App";

export default function ProtectedRoute() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return <App />;
}
