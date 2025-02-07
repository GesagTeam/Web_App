import React, { useState } from "react";
import "./EducationDetails.css";

const EducationDetails = () => {
  const [qualificationLevel, setQualificationLevel] = useState("");
  const [showQualificationDropdown, setShowQualificationDropdown] = useState(false);

  const [country, setCountry] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const [gradeType, setGradeType] = useState("CGPA");
  const [showGradeTypeDropdown, setShowGradeTypeDropdown] = useState(false);

  const [gradeValue, setGradeValue] = useState("");

  const handleQualificationSelect = (value) => {
    setQualificationLevel(value);
    setShowQualificationDropdown(false);
  };

  const handleCountrySelect = (value) => {
    setCountry(value);
    setShowCountryDropdown(false);
  };

  const handleGradeTypeSelect = (value) => {
    setGradeType(value);
    setShowGradeTypeDropdown(false);
  };

  const handleSave = () => {
    alert("Form saved successfully!");
  };

  const handleAddCertificate = () => {
    alert("Add Certificate button clicked!");
  };

  return (
    <div className="education-details-container">
      <h3 className="title">Education Details</h3>

      {/* Qualification Level */}
      <div className="form-group">
        <label htmlFor="qualification-level" className="label">
          Qualification level
        </label>
        <div
          className="custom-dropdown"
          onClick={() => setShowQualificationDropdown(!showQualificationDropdown)}
        >
          <div className="dropdown-selected">
            {qualificationLevel || "Select a course type"}
          </div>
          {showQualificationDropdown && (
            <ul className="dropdown-options">
              <li
                className="dropdown-option"
                onClick={() => handleQualificationSelect("Bachelor's")}
              >
                Bachelor's
              </li>
              <li
                className="dropdown-option"
                onClick={() => handleQualificationSelect("Master's")}
              >
                Master's
              </li>
              <li
                className="dropdown-option"
                onClick={() => handleQualificationSelect("Ph.D.")}
              >
                Ph.D.
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Country of Issuing */}
      <div className="form-group">
        <label htmlFor="country" className="label">
          Country of issuing
        </label>
        <div
          className="custom-dropdown"
          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
        >
          <div className="dropdown-selected">{country || "Select a country"}</div>
          {showCountryDropdown && (
            <ul className="dropdown-options">
              <li
                className="dropdown-option"
                onClick={() => handleCountrySelect("Afghanistan")}
              >
                Afghanistan
              </li>
              <li
                className="dropdown-option"
                onClick={() => handleCountrySelect("Albania")}
              >
                Albania
              </li>
              <li
                className="dropdown-option"
                onClick={() => handleCountrySelect("Algeria")}
              >
                Algeria
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Grade */}
      <div className="form-group">
        <label htmlFor="grade" className="label">
          Grade
        </label>
        <div className="grade-container">
          <div
            className="custom-dropdown grade-dropdown"
            onClick={() => setShowGradeTypeDropdown(!showGradeTypeDropdown)}
          >
            <div className="dropdown-selected">{gradeType}</div>
            {showGradeTypeDropdown && (
              <ul className="dropdown-options">
                <li
                  className="dropdown-option"
                  onClick={() => handleGradeTypeSelect("CGPA")}
                >
                  CGPA
                </li>
                <li
                  className="dropdown-option"
                  onClick={() => handleGradeTypeSelect("Percentage")}
                >
                  Percentage
                </li>
              </ul>
            )}
          </div>
          <input
            type="text"
            id="grade-value"
            className="input grade-input"
            placeholder={gradeType === "CGPA" ? "--" : "0%"}
            value={gradeValue}
            onChange={(e) => setGradeValue(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="btn add-button" onClick={handleAddCertificate}>
          + Add Certificate
        </button>
        <button className="btn save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EducationDetails;
