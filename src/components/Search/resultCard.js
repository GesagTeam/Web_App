import React from 'react';
import './resultCard.css'; // Import the CSS file

const UniversityCard = () => {
  return (
    <div style={{marginTop: "90px"}} className="university-card-container">
      <img
        src="https://via.placeholder.com/150" // Replace with the actual image URL
        alt="University"
        className="university-card-image"
      />
      <div className="university-card-details">
        <h2 className="university-card-name">
          UNIVERSITY NAME <span className="university-card-location">(Location)</span>
          <span className="university-card-rank">    Rank #</span>
        </h2>
        
        <div className="university-card-info">
          <div className="university-card-info-item">
            <img src="/images/institution.svg" alt="Institution Icon" className="university-card-icon" />
            <p>Institution type</p>
          </div>
          <div className="university-card-info-item">
            <img src="/images/language.svg" alt="Language Icon" className="university-card-icon" />
            <p>Language</p>
          </div>
          <div className="university-card-info-item">
            <img src="/images/intake.svg" alt="Intake Icon" className="university-card-icon" />
            <p>Intake</p>
          </div>
          <div className="university-card-info-item">
            <img src="/images/fees.svg" alt="Tuition Icon" className="university-card-icon" />
            <p>Tuition fees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;