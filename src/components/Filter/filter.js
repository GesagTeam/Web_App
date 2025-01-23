import React, { useState, useRef } from "react";
import "./filter.css";
import { ReactComponent as ArrowTwo } from "../../images/arrowTwo.svg";
import CheckboxCheckedIcon from "../../images/checkBox.svg";

const Filter = () => {
  const [selectedInstituteTypes, setSelectedInstituteTypes] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [priceRange, setPriceRange] = useState(50);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [locationDropdownHeight, setLocationDropdownHeight] = useState(0);
  const [coursesDropdownHeight, setCoursesDropdownHeight] = useState(0);
  const locationDropdownContentRef = useRef(null);
  const coursesDropdownContentRef = useRef(null);

  const toggleSelection = (item, setSelected) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const clearFilters = () => {
    setSelectedInstituteTypes([]);
    setSelectedLevels([]);
    setSelectedLanguages([]);
    setSelectedStates([]);
    setSelectedCourses([]);
    setPriceRange(50);
  };

  const toggleLocationDropdown = () => {
    if (isLocationDropdownOpen) {
      setLocationDropdownHeight(0);
      setIsLocationDropdownOpen(false);
    } else {
      setIsLocationDropdownOpen(true);
      const contentHeight = locationDropdownContentRef.current.scrollHeight;
      setLocationDropdownHeight(contentHeight);
    }
  };

  const toggleCoursesDropdown = () => {
    if (isCoursesDropdownOpen) {
      setCoursesDropdownHeight(0);
      setIsCoursesDropdownOpen(false);
    } else {
      setIsCoursesDropdownOpen(true);
      const contentHeight = coursesDropdownContentRef.current.scrollHeight;
      setCoursesDropdownHeight(contentHeight);
    }
  };

  return (
    <div className="filter-container">
      <div className="firstContainer">
        <div className="filter-header">
          <h2>
            Filter{" "}
            <span className="filter-icon">
              <img src="../images/filter.svg" alt="Filter Icon" />
            </span>
          </h2>
        </div>

        <div className="filter-warning-box">
          <div className="innerContent">
            <p>
              <span className="filter-warning-icon">
                <img src="../images/filterTwo.svg" alt="Warning Icon" />
              </span>{" "}
              Select your institute type to get more filters and customize your
              desired results.
            </p>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Institute type</h3>
        <div className="filter-options">
          {["Ausbildung", "Language Center", "University", "Technical University"].map(
            (type) => (
              <button
                key={type}
                className={`filter-option ${
                  selectedInstituteTypes.includes(type) ? "selected" : ""
                }`}
                onClick={() => toggleSelection(type, setSelectedInstituteTypes)}
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>

      <div className="filter-section">
        <h3>Price range</h3>
        <input
          type="range"
          className="filter-slider"
          min="0"
          max="100"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <p>Selected Price Range: {priceRange}</p>
      </div>

      {/* Location Dropdown */}
      <div className="filter-section">
        <h3
          onClick={toggleLocationDropdown}
          className="dropdown-header"
          style={{
            paddingLeft: "10px",
            paddingBottom: "10px",
          }}
        >
          <span className="dropdown-title">
            Location <span className="dropdown-subtitle">(state)</span>
          </span>
          <ArrowTwo
            className={`dropdown-arrow ${isLocationDropdownOpen ? "open" : ""}`}
          />
        </h3>
        <div
          className={`dropdown-border ${isLocationDropdownOpen ? "expanded" : ""}`}
          style={{
            height: `${locationDropdownHeight}px`,
            overflow: "hidden",
            transition: "height 0.3s ease", // Adjusted for faster transitions
          }}
        >
          <div ref={locationDropdownContentRef} className="filter-checkbox-group">
            {["State 1", "State 2", "State 3", "State 4"].map((state) => (
              <label key={state} className="checkbox-label">
                <span className="custom-checkbox">
                  {selectedStates.includes(state) && (
                    <img src={CheckboxCheckedIcon} alt="Checked Icon" />
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={selectedStates.includes(state)}
                  onChange={() => toggleSelection(state, setSelectedStates)}
                  className="hidden-checkbox"
                />
                {state}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Teaching language</h3>
        <div className="filter-options">
          {["German", "English"].map((language) => (
            <button
              key={language}
              className={`filter-option ${
                selectedLanguages.includes(language) ? "selected" : ""
              }`}
              onClick={() => toggleSelection(language, setSelectedLanguages)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Dropdown */}
      <div className="filter-section">
        <h3
          onClick={toggleCoursesDropdown}
          className="dropdown-header"
          style={{
            paddingLeft: "10px",
            paddingBottom: "10px",
          }}
        >
          <span className="dropdown-title">
            Course <span className="dropdown-subtitle">(selection)</span>
          </span>
          <ArrowTwo
            className={`dropdown-arrowTwo ${isCoursesDropdownOpen ? "open" : ""}`}
          />
        </h3>
        <div
          className={`dropdown-border ${isCoursesDropdownOpen ? "expanded" : ""}`}
          style={{
            height: `${coursesDropdownHeight}px`,
            overflow: "hidden",
            transition: "height 0.3s ease", // Adjusted for faster transitions
          }}
        >
          <div ref={coursesDropdownContentRef} className="filter-checkbox-group">
            {["Mechanical Engineering", "IT", "Business Administration", "Law"].map(
              (course) => (
                <label key={course} className="checkbox-label">
                  <span className="custom-checkbox">
                    {selectedCourses.includes(course) && (
                      <img src={CheckboxCheckedIcon} alt="Checked Icon" />
                    )}
                  </span>
                  <input
                    type="checkbox"
                    checked={selectedCourses.includes(course)}
                    onChange={() => toggleSelection(course, setSelectedCourses)}
                    className="hidden-checkbox"
                  />
                  {course}
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="filter-actions">
        <button className="filter-button clear" onClick={clearFilters}>
          Clear filters
        </button>
        <button className="filter-button apply">Apply</button>
      </div>
    </div>
  );
};

export default Filter;
