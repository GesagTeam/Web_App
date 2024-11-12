import React, { useState, useEffect } from "react";
import { Card, Alert, Button, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import MyNavbar from "./navbar/Navbar";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Check if the user's email is verified
  useEffect(() => {
    if (currentUser) {
      setIsEmailVerified(currentUser.emailVerified);
    }
  }, [currentUser]);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      {/* Navbar at the top, spanning the full width */}
      <MyNavbar />

      <Container className="mt-4">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {isEmailVerified ? (
              <>
                <strong>Email:</strong> {currentUser && currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                  Update Profile
                </Link>
              </>
            ) : (
              <Alert variant="warning">
                Your email is not verified. Please check your inbox to verify your email.
              </Alert>
            )}
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button className="btn btn-primary" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Container>
    </>
  );
}
