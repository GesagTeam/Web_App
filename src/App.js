import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import ForgetPassword from "./components/ForgetPassword";
import UpdateProfile from "./components/UpdateProfile";
import Dashboard from "./components/DashBoard";
import Signin from "./components/Signin/Signin";
import VerifyEmail from "./components/EmailVerification/VerifyEmail";
import Home from "./components/Home/Home"; // Import Home component
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";
import MyNavbar from "./components/navbar/Navbar"; // Import your Navbar
import ResetPassword from "./components/resetPassword/ResetPassword";

const App = () => {
  const [loading, setLoading] = useState(false); // State for loading

  return (
    <div className="app-container">
      <Router>
        <AuthProvider>
          <MyNavbar /> {/* Always render the navbar */}

          {/* Show loading indicator when loading */}
          {loading ? (
            <div className="loading-indicator">
              Loading...
            </div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Dashboard setLoading={setLoading} />
                  </RequireAuth>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <RequireAuth>
                    <UpdateProfile setLoading={setLoading} />
                  </RequireAuth>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Signin setLoading={setLoading} />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route path="/verifyEmail" element={<VerifyEmail setLoading={setLoading} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/resetPassword" element={<ResetPassword />} />

            </Routes>
          )}
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
