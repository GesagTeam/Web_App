import React, { useEffect, useState } from "react";
import { getAuth, sendEmailVerification, onAuthStateChanged } from "firebase/auth";
import { Alert, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationLinkClicked, setVerificationLinkClicked] = useState(false); // State to track if link has been clicked
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Reload user to get updated info
        if (user.emailVerified) {
          navigate("/"); // Redirect to home if email is verified
        }
      }
    };

    // Check verification status every 3 seconds
    const interval = setInterval(() => {
      checkVerification();
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [auth, navigate]);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.reload().then(() => {
          if (user.emailVerified) {
            navigate("/"); // Redirect to home if email is verified
          }
        });
      }
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleResendVerification = async () => {
    setLoading(true);
    setError("");
    const user = auth.currentUser;

    if (!user) {
      setError("No user is currently logged in.");
      setLoading(false);
      return;
    }

    try {
      await sendEmailVerification(user);
      setMessage("Verification email sent. Please check your inbox.");
    } catch (err) {
      console.error(err); // Log error for debugging
      setError("Failed to send verification email. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Verify Your Email</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Alert variant="warning">
          Please check your email for the verification link. If you haven't received it, click below to resend.
        </Alert>
        <Button disabled={loading} onClick={handleResendVerification} className="w-100">
          Resend Verification Email
        </Button>
        {verificationLinkClicked && (
          <div className="mt-3">
            <Button onClick={() => setVerificationLinkClicked(true)} className="w-100">
              I have verified my email
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
