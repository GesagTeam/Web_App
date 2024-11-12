import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SlideButton.css"; // Import the CSS file

const SlideButton = ({ icon, text, to, isActive }) => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const location = useLocation(); // useLocation hook to access current path

  // Determine if the button should be active based on the provided isActive prop OR if the path matches the button's "to" value
  const isButtonActive = isActive !== undefined ? isActive : location.pathname === to;

  const handleClick = () => {
    // Add a delay to allow the button animation to play before navigating
    setTimeout(() => {
      navigate(to);
    }, 100); // Match the delay to your animation duration
  };

  return (
    <div className="profileBtnContainer">
      <button
        className={`profileBtn ${isButtonActive ? "" : "active"}`}
        onClick={handleClick}
      >
        <span className="icon">
          <img
            src={icon} // Use icon prop
            alt={`${text} Icon`} // Alt text reflects button text
            style={{ marginBottom: '8px' }}
          />
        </span>
        <span className="text">{text}</span>
      </button>
    </div>
  );
};

export default SlideButton;
