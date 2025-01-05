import React, { useState } from "react";
import "./SearchWithFilter.css";
import SearchBar from "../Search/SearchBar";
import Filter from "../Filter/filter";
import ResultCard from "../Search/resultCard";

const SearchWithFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="search-with-filter-container">
      {/* Search Bar */}
      <div className="search-bar-wrapper">
        <SearchBar toggleFilter={toggleFilter} />
      </div>

      {/* Results Section */}
      <div className="results-wrapper">
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>

      {/* Filter Panel */}
      <div className={`filter-panel ${showFilter ? "visible" : ""}`}>
        <Filter />
      </div>

      {/* Overlay */}
      {showFilter && <div className="filter-overlay" onClick={toggleFilter}></div>}
    </div>
  );
};

export default SearchWithFilter;
