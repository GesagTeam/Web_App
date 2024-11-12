import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file for styling
import MyNavbar from "../navbar/Navbar";

export default function Home() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/universities");
  
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers.get('Content-Type'));
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const contentType = response.headers.get('Content-Type');
  
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log("Fetched Data:", data);
          setUniversities(data);
        } else {
          throw new Error("Invalid content type. Expected application/json");
        }
      } catch (error) {
        console.error("Failed to fetch:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false); // Ensure loading is set to false after fetching
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <MyNavbar />
    <div className="grid-container" style={{marginTop:"50px"}}>
      {universities.map((university) => (
        <div className="grid-item" key={university.university_id}>
          <h2>{university.name}</h2>
          <p><strong>Type:</strong> {university.institution_type}</p>
          <p><strong>National Ranking:</strong> {university.national_ranking}</p>
          <p><strong>International Ranking:</strong> {university.international_ranking}</p>
          <p><strong>Tuition Fees:</strong> ${university.tuition_fees}</p>
          <p><strong>Admission Requirements:</strong> {university.admission_requirements}</p>
          <p><strong>Application Deadlines:</strong> {new Date(university.application_deadlines).toLocaleDateString()}</p>
          <p><strong>Scholarship Opportunities:</strong> {university.scholarship_opportunities}</p>
          <p><strong>Facilities:</strong> {university.facilities}</p>
          <p><strong>Contact Info:</strong> {university.contact_info}</p>
        </div>
      ))}
    </div>
    </>
  );
}
