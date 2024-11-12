import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "../navbar/Navbar";
import { useState, useRef } from "react";
import SlideButton from "../SlidingButton/SlidingButton";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reset password form submitted");
  };

  async function handleResetPassword() {
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch {
      setError("Failed to send reset password link. Please try again.");
    }

    setLoading(false);
  }

  return (
    <>
      <MyNavbar isHomeActive={false} isSearchActive={false} isLoginActive={true} />

      <div className="reset-password-container">
        <div className="background-image-section">
          <div className="centered-content navbar-offset">
            <img src="/images/LogoRightSide.svg" alt="Your Image" className="svg-image" />
            <h1>GESAG</h1>
            <p>Your Way to Germany...</p>
          </div>
        </div>

        <div className="reset-password-form-section">
          <div className="reset-password-form-content">
            <div style={{ position: "absolute", top: "70px", left: "0px", zIndex: 1000 }}>
              <SlideButton icon="/images/BackIcon.svg" text="Back" to="/" isActive={true} />
            </div>

            <div className="text-center mb-4" style={{ width: "400px", height: "300px" }}>
              <div className="text-center" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/images/SigninLogo.svg"
                  alt="Reset Password Image"
                  style={{
                    width: "160.92px",
                    height: "180px",
                  }}
                />
              </div>
              <h6 className="text-center" style={{ fontSize: "20px", color: "#818181", marginTop: "20px", marginBottom: "20px" }}>
                Reset Password
              </h6>

              <div style={{ width: "250px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", margin: "10px auto" }}>
                <h6 style={{ fontSize: "12px", color: "#818181", margin: 0 }}>
                  Please enter the email that you have used to create your account to receive reset password link.
                </h6>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <InputGroup style={{ height: "30px" }}>
                    <InputGroup.Text>
                      <img src="/images/Email.svg" alt="Email Icon" style={{ width: "20px", height: "20px" }} />
                    </InputGroup.Text>
                    <Form.Control id="email" type="email" ref={emailRef} placeholder="Email Address" required />
                  </InputGroup>
                </Form.Group>

                <Button
                  disabled={loading}
                  className="w-100 mt-3"
                  type="submit"
                  style={{
                    backgroundColor: "#FF8D00",
                    borderColor: "#FF8D00",
                  }}
                >
                  Send Reset Link
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
