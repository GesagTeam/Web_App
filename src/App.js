import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import VerifyEmail from "./components/EmailVerification/VerifyEmail";
import Home from "./components/Home/Home"; // Import Home component
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";
import MyNavbar from "./components/navbar/Navbar"; // Import your Navbar
import ResetPassword from "./components/resetPassword/ResetPassword";
import UniversityCard from "./components/Search/resultCard";
import Filter from "./components/Filter/filter";
import SearchBar from "./components/Search/SearchBar";
import LeftSide from "./components/Profile/leftSide";
import EducationDetails from "./components/Profile/EducationDetails";

const App = () => {
  const [loading, setLoading] = useState(false); // State for loading

  return (
    <div className="app-container">
      <Router>
        <AuthProvider>
          <MyNavbar /> {/* Always render the navbar */}

          {/* Show loading indicator when loading */}
          {loading ? (
            <div className="loading-indicator">
              Loading...
            </div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                  </RequireAuth>
                }
              />
        
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Signin setLoading={setLoading} />} />
              <Route path="/verifyEmail" element={<VerifyEmail setLoading={setLoading} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/Search" element={<UniversityCard />} />
              <Route path="/filter" element={<Filter/>} />
              <Route path="/searchbar" element={<SearchBar/>} />
              <Route path="/profileLeft" element={<LeftSide/>}/>
              <Route path="/EducationDetails" element={<EducationDetails/>}/>

              EducationDetails

            </Routes>
          )}
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
