import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";
import PasswordChecklist from "react-password-checklist";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, password);
      setShowVerificationMessage(true);  // Show message to verify email
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      {showVerificationMessage ? (
        <VerificationPrompt />
      ) : (
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  ref={passwordRef}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password-confirm">
                  Password Confirmation
                </Form.Label>
                <Form.Control
                  id="password-confirm"
                  type="password"
                  ref={passwordConfirmRef}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
              </Form.Group>

              <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital", "match"]}
                minLength={6}
                value={password}
                valueAgain={passwordConfirm}
                onChange={(isValid) => {}}
              />

              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

function VerificationPrompt() {
  const { currentUser } = useAuth();
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Poll to check if the user has verified their email
    const interval = setInterval(() => {
      currentUser.reload().then(() => {
        if (currentUser.emailVerified) {
          clearInterval(interval);  // Stop checking once verified
          setIsVerified(true);
        }
      });
    }, 3000);  // Poll every 3 seconds

    return () => clearInterval(interval);
  }, [currentUser]);

  useEffect(() => {
    if (isVerified) {
      navigate("/");  // Redirect to home page when verified
    }
  }, [isVerified, navigate]);

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Verify Your Email</h2>
        <p className="text-center">
          Please check your inbox for a verification email. Once you verify your email, you will be redirected to the home page.
        </p>
        <Button variant="primary" className="w-100" onClick={() => navigate("/verify-email")}>
          I have verified my email
        </Button>
      </Card.Body>
    </Card>
  );
}
