import React, { useState, useEffect } from 'react';
import '../components/BedAvailability.css';

const BedAvailability = () => {
  const [beds, setBeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedBed, setSelectedBed] = useState(null);

  useEffect(() => {
    // Simulate fetching bed availability data
    const fetchData = async () => {
      // Example static data; replace with API call
      const bedData = [
        { id: 1, hospital: 'City Hospital', department: 'Emergency', available: 5, status: 'Available' },
        { id: 2, hospital: 'Metro Hospital', department: 'Surgery', available: 0, status: 'Critical' },
        { id: 3, hospital: 'Greenwood Clinic', department: 'ICU', available: 2, status: 'Low Stock' },
        { id: 4, hospital: 'Bright Hospital', department: 'General', available: 10, status: 'Available' },
      ];
      setBeds(bedData);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh data every 30 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const filteredBeds = beds
    .filter(bed => bed.hospital.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(bed => statusFilter === 'All' || bed.status === statusFilter);

  const handleBookBed = (bed) => {
    setSelectedBed(bed);
    // Simulate booking process
    alert(`Bed at ${bed.hospital}, Department: ${bed.department} booked!`);
  };

  return (
    <div className="bed-availability-container">
      <h2 style={{ color: 'black' }} >Real-Time Bed Availability</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Hospital"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Filter by Status */}
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-dropdown">
        <option value="All">All Status</option>
        <option value="Available">Available</option>
        <option value="Low Stock">Low Stock</option>
        <option value="Critical">Critical</option>
      </select>

      {/* List of Bed Availability */}
      <ul>
        {filteredBeds.length > 0 ? (
          filteredBeds.map((bed) => (
            <li
              key={bed.id}
              className={`bed-item ${bed.status.toLowerCase().replace(' ', '-')}`}
            >
              <span>{bed.hospital} - {bed.department}</span>
              <div>Available Beds: {bed.available}</div>
              <div>Status: {bed.status}</div>
              {bed.available > 0 && (
                <button onClick={() => handleBookBed(bed)} className="book-button">
                  Book Bed
                </button>
              )}
            </li>
          ))
        ) : (
          <li>No beds available.</li>
        )}
      </ul>

      {selectedBed && (
        <div className="booking-modal">
          <h3>Booking Confirmation</h3>
          <p>You have booked a bed at {selectedBed.hospital}, Department: {selectedBed.department}.</p>
          <button onClick={() => setSelectedBed(null)} className="close-button">Close</button>
        </div>
      )}
    </div>
  );
};

export default BedAvailability;
