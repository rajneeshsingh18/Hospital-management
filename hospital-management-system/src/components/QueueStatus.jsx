import React, { useState, useEffect } from 'react';
import '../components/QueueStatus.css';

const QueueStatus = () => {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    // Simulate fetching patient queue data
    const fetchData = async () => {
      // Example static data
      const dummyData = [
        { id: 1, name: 'John Doe', condition: 'Heart Attack', priority: 'high' },
        { id: 2, name: 'Jane Smith', condition: 'Flu', priority: 'low' },
        { id: 3, name: 'Emily Johnson', condition: 'Broken Leg', priority: 'medium' },
        { id: 4, name: 'Michael Brown', condition: 'Diabetes', priority: 'medium' },
      ];
      setPatients(dummyData);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh data every 30 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const filteredPatients = patients
    .filter(patient => patient.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(patient => statusFilter === 'All' || patient.priority === statusFilter);

  return (
    <div className="queue-status-container">
      <h2 style={{ color: 'black' }} >Patient Queue Status</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Patient"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Filter by Priority */}
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-dropdown">
        <option value="All">All Priorities</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>

      {/* List of Patient Queue Status */}
      <ul>
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <li key={patient.id} className={`patient-item ${patient.priority}`}>
              <span>{patient.name}</span>
              <div>Condition: {patient.condition}</div>
              <div>Priority: {patient.priority}</div>
            </li>
          ))
        ) : (
          <li>No patients in the queue.</li>
        )}
      </ul>
    </div>
  );
};

export default QueueStatus;
