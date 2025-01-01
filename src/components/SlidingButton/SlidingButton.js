import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SlideButton.css"; // Import the CSS file

const SlideButton = ({
  icon,
  text,
  to,
  isActive,
  customStyles,
  onClick,
  iconTranslation = "86px", // Default value
  textTranslation = "-30px", // Default value
}) => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const location = useLocation(); // useLocation hook to access current path

  // Determine if the button should be active based on the provided isActive prop OR if the path matches the button's "to" value
  const isButtonActive = isActive !== undefined ? isActive : location.pathname === to;

  const handleClick = () => {
    // Trigger the onClick prop (for external state control)
    if (onClick) onClick();

    // Add a delay to allow the button animation to play before navigating
    setTimeout(() => {
      navigate(to);
    }, 100); // Match the delay to your animation duration
  };

  return (
    <div  className="profileBtnContainer">
      <button
        className={`profileBtn ${isButtonActive ? "" : "active"}`}
        onClick={handleClick}
        style={customStyles} // Apply custom styles
      >
        <span
          className="icon"
          style={{
            height: customStyles?.iconHeight,
            width: customStyles?.iconWidth,
            position: customStyles?.iconLocation,
            transform: isButtonActive ? `translateX(${iconTranslation})` : "none",
            transition: customStyles?.transition,
            left: customStyles?.left, // Control horizontal position
            top: customStyles?.top, // Control vertical position from top
            bottom: customStyles?.bottom, // Control vertical position from bottom
          }}
        >
            <img src={icon} alt={`${text} Icon`} />
          </span>

        <span
          className="text"
          style={{
            transform: isButtonActive ? `translateX(${textTranslation})` : "none", // Use textTranslation prop
            transition: customStyles?.transition,
          }}
        >
          {text}
        </span>
      </button>
    </div>
  );
};

export default SlideButton;
