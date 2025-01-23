import React, { useState } from 'react';
import './SearchBar.css'; // Importing the CSS file
import SlideButton from '../SlidingButton/SlidingButton';
import arrowIcon from '../../images/arrow.svg';



const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('browse all'); // State to track active tab
  const [isSlideButtonActive, setIsSlideButtonActive] = useState(false); // State for SlideButton

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab
  };

  const toggleSlideButton = () => {
    setIsSlideButtonActive((prevState) => !prevState); // Toggle the SlideButton state
  };

  return (
    <div className="search-bar-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'browse all' ? 'active' : ''}`}
          onClick={() => handleTabClick('browse all')}
        >
          browse all
        </button>
        <button
          className={`tab ${activeTab === 'universities' ? 'active' : ''}`}
          onClick={() => handleTabClick('universities')}
        >
          universities
        </button>
        <button
          className={`tab ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => handleTabClick('courses')}
        >
          courses
        </button>

        {/* SlideButton with state, size, margin, and style control */}
        <SlideButton
            icon="/images/filterC.svg"
            text="Filter"
            to="/SearchBar"
            isActive={isSlideButtonActive}
            customStyles={{
                marginTop:"5.5px",
                height: "32px", // Button height
                width: "100px", // Button width
                iconHeight: "26px", // Icon height
                iconWidth: "26px", // Icon width
                iconLocation: "absolute", // Ensure absolute positioning
                transition: "all 0.5s ease-in-out", // Smooth transition
                left: "4px", // Horizontal position of the icon
                bottom: "5.7px", // Vertical position from the bottom
                marginLeft: "153px"
            }}
            iconTranslation="63px"
            textTranslation="-30px"
            onClick={toggleSlideButton}
            />
            
            <img className='sortIcon' src={"/images/sort.svg"} alt={`Icon`} />
            

      </div>
      <div className="search-box">
      <div
  className="dropdown-container"
  style={{
    backgroundImage: `url(${arrowIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 15px center',
  }}
>
  <select className="dropdown">
    <option>Undergraduate</option>
    <option>Postgraduate</option>
    <option>PhD</option>
  </select>
</div>

  <div className="divider"></div>
  <input
    type="text"
    className="search-input"
    placeholder="Course Name e.g. Engineering or Mechanical Engineering"
  />
  <button className="search-button">
    
      <img className="search-icon" src={"/images/searchIcon.svg"} alt="Search Icon" />
   
  </button>
</div>



    </div>
  );
};

export default SearchBar;
