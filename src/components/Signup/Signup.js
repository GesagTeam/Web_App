import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MyNavbar from "../navbar/Navbar";
import SlideButton from "../SlidingButton/SlidingButton"; // Import the SlideButton component
import "./Signup.css"; // Import the CSS file

export default function Signup() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/verifyEmail";

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(usernameRef.current.value, emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <MyNavbar isHomeActive={false} isSearchActive={false} isLoginActive={true} />
      <div className="signin-container">
        {/* Right half: Signup Form */}
        <div className="signin-form-section R">
          <div className="signin-form-content">
            {/* SlideButton positioned at the top left of the right half */}
            <div style={{ position: "absolute", top: "70px", left: "0px", zIndex: 1000 }}>
              <SlideButton
                icon="/images/BackIcon.svg" // Update with your back icon path
                text="Back"
                to="/" // Link to the desired route
                isActive={true}
              />
            </div>

            <div className="text-center mb-4" style={{ width: "400px", height: "300px" }}>
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
                    width: "140px", /* Scaled down */
                  }}
                />
              </div>
              <h6
                className="text-center"
                style={{
                  fontSize: "24px", /* Slightly smaller font */
                  color: "#818181",
                }}
              >
                Sign up
              </h6>
              <h6
                className="text-center"
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                  marginTop: "0px", // Reduce the margin-top for Username
                  color: "#818181",
                  fontSize: "15px"
                }}
              >
                Username:
              </h6>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                {/* Username Field */}
                <Form.Group className="mb-3">
                  <InputGroup style={{ height: "30px" }}>
                    <InputGroup.Text>
                      <img
                        src="/images/PersonCircle.svg"
                        alt="User Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </InputGroup.Text>
                    <Form.Control
                      id="username"
                      type="text"
                      ref={usernameRef}
                      placeholder="Username"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <h6
                  className="text-center"
                  style={{
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "left",
                    marginTop: "0px", // Reduce the margin-top for Username
                    color: "#818181",
                    fontSize: "15px"
                  }}
                >
                  Email Address:
                </h6>
                {/* Email Field */}
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

                <h6
                  className="text-center"
                  style={{
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "left",
                    marginTop: "10px", // Reduce the margin-top for Username
                    color: "#818181",
                    fontSize: "15px"
                  }}
                >
                  Password:
                </h6>
                {/* Password Field */}
                <Form.Group className="mb-3">
                  <InputGroup style={{ height: "30px" }}>
                    <InputGroup.Text>
                      <img
                        src="/images/LockShield.svg"
                        alt="Lock Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </InputGroup.Text>
                    <Form.Control
                      id="password"
                      type="password"
                      ref={passwordRef}
                      placeholder="Password"
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <h6
                  className="text-center"
                  style={{
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "left",
                    marginTop: "10px", // Reduce the margin-top for Username
                    color: "#818181",
                    fontSize: "15px"
                  }}
                >
                  Confirm Password:
                </h6>
                {/* Confirm Password Field */}
                <Form.Group style={{ height: "20px" }} className="mb-3">
                  <InputGroup style={{ height: "15px" }}>
                    <InputGroup.Text>
                      <img
                        src="/images/LockShield.svg"
                        alt="Lock Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </InputGroup.Text>
                    <Form.Control
                      id="confirm-password"
                      type="password"
                      ref={confirmPasswordRef}
                      placeholder="Confirm Password"
                      required
                    />
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
                  Sign Up
                </Button>
              </Form>

              <div className="w-100 text-start mt-3" style={{ display: "flex", alignItems: "center" }}>
                {/* Checkbox */}
                <Form.Check
                  type="checkbox"
                  id="terms-checkbox"
                  style={{ marginRight: "10px" }}
                />

                {/* Text */}
                <p style={{
                  margin: 0,
                  fontSize: "13px"
                }}>
                  I have read and agreed to the terms and conditions provided by GESAG in the following link{" "}
                  <Link to="/terms-and-conditions" style={{ color: "#FF6400", textDecoration: "none" }}>
                    Terms and Conditions
                  </Link>
                </p>
              </div>
              <h6 style={{ fontSize: "15px" }} className="line-textT">Or</h6>
              <div className="social-icons">
                <img src="/images/Gmail.svg" alt="Gmail" />
                <img src="/images/Apple.svg" alt="Apple" />
                <img src="/images/Facebook.svg" alt="Facebook" />
              </div>
            </div>
          </div>
        </div>

        {/* Left half: Background Image */}
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
