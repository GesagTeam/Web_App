import React, { useState } from "react"; // Import useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import UpdateProfile from "./components/UpdateProfile";
import Dashboard from "./components/DashBoard";
import Signin from "./components/Signin";
import VerifyEmail from "./components/VerifyEmail"; // Add VerifyEmail component
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";

const App = () => {
  // Define view state and setView function
  const [view, setView] = useState(""); 

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <RequireAuth>
                    <UpdateProfile />
                  </RequireAuth>
                }
              />
              <Route path="/signup" element={<Signup setView={setView} />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route path="/verify-email" element={<VerifyEmail />} /> {/* Add this line */}
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
