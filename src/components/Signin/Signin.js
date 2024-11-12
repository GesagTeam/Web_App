import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MyNavbar from "../navbar/Navbar";
import "./Signin.css"; // Import the CSS file

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true); // Start loading
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath);
    } catch {
      setError("Failed to log in");
    }

    setLoading(false); // Stop loading
}


  return (
    <>
      <MyNavbar isHomeActive={false} isSearchActive={false} isLoginActive={true} />
      <div className="signin-container">
        {/* Right half: Login Form */}
        <div className="signin-form-section">
          <div className="signin-form-content">
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
                    marginTop: "90px", // Reduce the margin-top here
                    width: "200.92px",
                   
                  }}
                />
              </div>

              <h6
                className="text-center"
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                  marginTop: "0px", // Reduce the margin-top for Username
                  color: "#818181",
                }}
              >
                Username:
              </h6>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>
                      <img
                        src="/images/PersonCircle.svg"
                        alt="User Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </InputGroup.Text>
                    <Form.Control
                      id="email"
                      type="email"
                      ref={emailRef}
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
                    color: "#818181",
                  }}
                >
                  Password:
                </h6>

                <Form.Group className="mb-3">
                  <InputGroup>
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

                <div className="w-100 text-center mt-3">
                  <Link
                    to="/resetPassword"
                    style={{ color: "#FF6400", textDecoration: "none" }}
                  >
                    <p style={{

                      textAlign: "right",
                      marginBottom: "10px",
                      fontSize: "15px",
                      
                      }}>Forgot Password?</p>
                  </Link>
                </div>

                <Button
                  disabled={loading}
                  className="w-100 mt-2" // Adjusted margin-top for better alignment
                  type="submit"
                  style={{
                    backgroundColor: "#FF8D00",
                    borderColor: "#FF8D00",
                  }}
                >
                  Login
                </Button>
              </Form>

              <div 
              
              style={{

                fontSize: "15px"

              }}
              
              className="w-100 text-center mt-2">
                You don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "#FF6400", textDecoration: "none" }}
                >
                  Create Account
                </Link>
              </div>
              <h6 className="line-text">Or</h6>
              <h6 className="text-center">Continue with</h6>
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
