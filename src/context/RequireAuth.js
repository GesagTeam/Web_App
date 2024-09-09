import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    // If the user is not logged in, redirect them to the login page
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  if (!currentUser.emailVerified) {
    // If the user is logged in but hasn't verified their email, redirect them
    return <Navigate to="/verify-email" state={{ path: location.pathname }} />;
  }

  // If both checks pass, render the children (protected content)
  return children;
};

export default RequireAuth;
