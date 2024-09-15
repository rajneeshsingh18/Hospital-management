import React, { useState, useEffect } from 'react';
import '../components//DoctorSchedule.css';

const DoctorSchedule = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // Simulate fetching doctor schedule data
    setDoctors([
      { id: 1, name: 'Dr. Smith', department: 'Cardiology', availableSlots: 3 },
      { id: 2, name: 'Dr. Johnson', department: 'Neurology', availableSlots: 0 },
      { id: 3, name: 'Dr. Brown', department: 'Orthopedics', availableSlots: 5 },
      { id: 4, name: 'Dr. Williams', department: 'General Medicine', availableSlots: 2 },
    ]);
  }, []);

  // Search doctors based on user input
  const filteredDoctors = doctors
    .filter((doctor) => doctor.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((doctor) => {
      if (filter === 'Cardiology') return doctor.department === 'Cardiology';
      if (filter === 'Neurology') return doctor.department === 'Neurology';
      if (filter === 'Orthopedics') return doctor.department === 'Orthopedics';
      if (filter === 'General Medicine') return doctor.department === 'General Medicine';
      return true;
    });

  // Sort doctors by name or available slots
  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    if (sortOption === 'slots') return b.availableSlots - a.availableSlots;
    return 0;
  });

  return (
    <div>
      <h2>Doctor Schedule</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Doctor"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Filter by Department */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
        <option value="All">All Departments</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Neurology">Neurology</option>
        <option value="Orthopedics">Orthopedics</option>
        <option value="General Medicine">General Medicine</option>
      </select>

      {/* Sort Options */}
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown">
        <option value="">Sort By</option>
        <option value="name">Doctor Name</option>
        <option value="slots">Available Slots</option>
      </select>

      {/* List of Doctors */}
      <ul>
        {sortedDoctors.length > 0 ? (
          sortedDoctors.map((doctor) => (
            <li key={doctor.id} className="doctor-item">
              <span>{doctor.name}</span>
              <div>Department: {doctor.department}</div>
              <div>Available Slots: {doctor.availableSlots}</div>
            </li>
          ))
        ) : (
          <li>No doctors found.</li>
        )}
      </ul>
    </div>
  );
};

export default DoctorSchedule;
