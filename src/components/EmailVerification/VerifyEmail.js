import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "../navbar/Navbar";
import { useState, useRef } from "react";
import SlideButton from "../SlidingButton/SlidingButton"; // Import the SlideButton component
import "./EmailVerification.css"; // Import the CSS file

export default function VerifyEmail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Define refs for input fields
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Define handleSubmit function within component scope
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  async function handleVerification() {
    setLoading(true);
    setError("");

    try {
      // Simulated email verification process (replace with actual verification logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch {
      setError("Failed to verify email. Please try again.");
    }

    setLoading(false);
  }

  return (
    <>
      <MyNavbar isHomeActive={false} isSearchActive={false} isLoginActive={true} />
      <div className="signin-container">
        <div className="signin-form-section R">
          <div className="signin-form-content">
            <div style={{ position: "absolute", top: "70px", left: "0px", zIndex: 1000 }}>
              <SlideButton
                icon="/images/BackIcon.svg"
                text="login"
                to="/"
                isActive={true}
                // Link to the desired route
              />
            </div>

            <div className="text-center mb-4" style={{ marginTop:"100px", width: "400px", height: "300px" }}>
              <div
                className="text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/SigninLogo.svg"
                  alt="Welcome Image"
                  style={{
                    marginTop: "80px", /* Adjusted for better fit */
                       width: "160.92px",
                    height: "180px"
                  }}
                />
              </div>
              <h6
                className="text-center"
                style={{
                  fontSize: "20px", /* Slightly smaller font */
                  color: "#818181",
                  marginTop: "20px"
                }}
              >
                Email Verification Link
              </h6>

              <h6
                className="text-center"
                style={{
                  fontSize: "12px", /* Slightly smaller font */
                  color: "#818181",
                  marginTop: "20px"
                }}
              >
                Please enter your email to receive the verification link to activate your account.
              </h6>

             
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}> {/* Apply handleSubmit function here */}
                {/* Username Field */}
                <Form.Group className="mb-3">
                  <InputGroup style={{ height: "30px" }}>
                    <InputGroup.Text>
                      <img
                        src="/images/Email.svg"
                        alt="User Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </InputGroup.Text>
                    <Form.Control
                      id="email"
                      type="email"
                      ref={emailRef}
                      placeholder="Email Address"
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <div className="w-100 text-start mt-3" style={{ display: "flex", alignItems: "center" }}>
                <p style={{
                  margin: 0,
                  fontSize: "13px"
                }}>
                 <span style={{
                 fontWeight: "bold"
                }}>Note:</span>  this email will be used in case you faced any issues with your account
                </p>
              </div>

                <Button
                  disabled={loading}
                  className="w-100 mt-3"
                  type="submit"
                  style={{
                    backgroundColor: "#FF8D00",
                    borderColor: "#FF8D00",
                  }}
                >
                  Send Link
                </Button>
              </Form>

              
        
            </div>
          </div>
        </div>

        <div className="background-image-section">
          <div className="centered-content navbar-offset">
            <img
              src="/images/LogoRightSide.svg"
              alt="Your Image"
              className="svg-image"
            />
            <h1>GESAG</h1>
            <p>Your Way to Germany...</p>
          </div>
        </div>
      </div>
    </>
  );
}
