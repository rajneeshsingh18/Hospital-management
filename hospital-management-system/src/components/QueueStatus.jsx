import React, { useEffect, useState } from "react";
import axios from "axios";
import "./QueueStatus.css"; // Make sure this path is correct

const QueueStatus = () => {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        console.log("Fetching patients data...");
        const res = await axios.get("http://localhost:5000/api/patients");
        console.log("Response received:", res);
        setPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients data:", err);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients
    .filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (patient) =>
        statusFilter === "All" || patient.priorityCategory === statusFilter
    );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#ff4d4d"; // Red
      case "Medium":
        return "#ffa500"; // Orange
      case "Low":
        return "#4caf50"; // Green
      default:
        return "#f2f2f2"; // Default color
    }
  };

  return (
    <div className="queue-status-container">
      <h1>Patient Queue Status</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Patient"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Filter by Priority */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="filter-dropdown"
      >
        <option value="All">All Priorities</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>

      {/* List of Patient Queue Status */}
      <div>
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <div
              key={patient._id}
              className="patientProfile"
              style={{
                backgroundColor: getPriorityColor(patient.priorityCategory),
              }}
            >
              <div className="svgContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  color="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ width: "24px", height: "24px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <p>
                  {patient.name} - {patient.age} - {patient.priorityCategory}
                </p>
                <p>Symptoms: {patient.symptoms}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No patients found.</p>
        )}
      </div>
    </div>
  );
};

export default QueueStatus;
