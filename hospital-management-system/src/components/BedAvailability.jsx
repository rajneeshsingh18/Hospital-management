import React, { useState, useEffect } from 'react';
import '../components/BedAvailability.css';

const BedAvailability = () => {
  const [beds, setBeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // Simulating fetching bed availability
    setBeds([
      { id: 1, hospital: 'City Hospital', available: 5, status: 'Available' },
      { id: 2, hospital: 'Metro Hospital', available: 0, status: 'Critical' },
      { id: 3, hospital: 'General Hospital', available: 2, status: 'Available' },
      { id: 4, hospital: 'River Hospital', available: 0, status: 'Critical' },
    ]);
  }, []);

  // Search hospitals based on user input
  const filteredBeds = beds
    .filter((bed) => bed.hospital.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((bed) => {
      if (filter === 'Available') return bed.available > 0;
      if (filter === 'Critical') return bed.available === 0;
      return true;
    });

  // Sort hospitals by hospital name or availability
  const sortedBeds = [...filteredBeds].sort((a, b) => {
    if (sortOption === 'name') return a.hospital.localeCompare(b.hospital);
    if (sortOption === 'availability') return b.available - a.available;
    return 0;
  });

  return (
    <div>
      <h2>Real-Time Bed Availability</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Hospital"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Filter by Availability */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
        <option value="All">All</option>
        <option value="Available">Available</option>
        <option value="Critical">Critical</option>
      </select>

      {/* Sort Options */}
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown">
        <option value="">Sort By</option>
        <option value="name">Hospital Name</option>
        <option value="availability">Bed Availability</option>
      </select>

      {/* List of Beds */}
      <ul>
        {sortedBeds.length > 0 ? (
          sortedBeds.map((bed) => (
            <li key={bed.id} className={bed.available > 0 ? 'bg-green' : 'bg-red'}>
              <span>{bed.hospital}</span>
              <div className="bold">{bed.status}</div>
            </li>
          ))
        ) : (
          <li>No hospitals found.</li>
        )}
      </ul>
    </div>
  );
};

export default BedAvailability;

