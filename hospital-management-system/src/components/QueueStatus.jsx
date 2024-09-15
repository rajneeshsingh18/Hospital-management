import React, { useState, useEffect } from 'react';
import '../components/QueueStatus.css';

const QueueStatus = () => {
  const [queueData, setQueueData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // Simulate fetching queue data
    setQueueData([
      { id: 1, opd: 'Cardiology', patientsAhead: 5, estimatedWait: 15 },
      { id: 2, opd: 'Neurology', patientsAhead: 2, estimatedWait: 10 },
      { id: 3, opd: 'Orthopedics', patientsAhead: 8, estimatedWait: 25 },
      { id: 4, opd: 'General Medicine', patientsAhead: 1, estimatedWait: 5 },
    ]);
  }, []);

  // Search OPD based on user input
  const filteredQueueData = queueData
    .filter((data) => data.opd.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((data) => {
      if (filter === 'Short') return data.estimatedWait <= 10;
      if (filter === 'Medium') return data.estimatedWait > 10 && data.estimatedWait <= 20;
      if (filter === 'Long') return data.estimatedWait > 20;
      return true;
    });

  // Sort OPDs by name or estimated wait time
  const sortedQueueData = [...filteredQueueData].sort((a, b) => {
    if (sortOption === 'name') return a.opd.localeCompare(b.opd);
    if (sortOption === 'wait') return a.estimatedWait - b.estimatedWait;
    return 0;
  });

  return (
    <div>
      <h2>Current Queue Status</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search OPD"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Filter by Wait Time */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
        <option value="All">All</option>
        <option value="Short">Short Wait Time</option>
        <option value="Medium">Medium Wait Time</option>
        <option value="Long">Long Wait Time</option>
      </select>

      {/* Sort Options */}
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown">
        <option value="">Sort By</option>
        <option value="name">OPD Name</option>
        <option value="wait">Estimated Wait Time</option>
      </select>

      {/* List of OPDs */}
      <ul>
        {sortedQueueData.length > 0 ? (
          sortedQueueData.map((data) => (
            <li key={data.id} className="queue-item">
              <span>{data.opd}</span>
              <div>Patients Ahead: {data.patientsAhead}</div>
              <div>Estimated Wait: {data.estimatedWait} mins</div>
            </li>
          ))
        ) : (
          <li>No OPD found.</li>
        )}
      </ul>
    </div>
  );
};

export default QueueStatus;
