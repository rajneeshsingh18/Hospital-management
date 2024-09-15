import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Hospital Management Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/bed-availability">Bed Availability</Link>
        <Link to="/queue-status">Queue Status</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/medicine-inventory">Medicine Inventory</Link>
      </div>

      <main className="main-content">
    </main>
    </div>


  );
};

export default Dashboard;

