import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import UpdateProfile from "./components/UpdateProfile";
import Dashboard from "./components/DashBoard"
import Signin from "./components/Signin"
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";

const App = () => {

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
                      <Route path="/update-profile" element={<UpdateProfile />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/login" element={<Signin />} />
                      <Route path="/forgot-password" element={<ForgetPassword />} />
                    </Routes>
                  </AuthProvider>
                </Router>
              </div>
            </Container>
          );
        };
        
        export default App;
        