import { useState } from 'react'

import Dashboard from './components/Dashboard';
import BedAvailabilityPage from './pages/BedAvailabilityPage';
import QueueStatusPage from './pages/QueueStatusPage';
import AppointmentSchedulingPage from './pages/AppointmentSchedulingPage';
import MedicineInventoryPage from './pages/MedicineInventoryPage';
// import RemoteConsultationPage from './pages/RemoteConsultationPage';
// import HealthRecordsPage from './pages/HealthRecordsPage';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bed-availability" element={<BedAvailabilityPage />} />
        <Route path="/queue-status" element={<QueueStatusPage />} />
        <Route path="appointments" element={<AppointmentSchedulingPage />} />
        <Route path="medicine-inventory" element={<MedicineInventoryPage />} />
        {/* <Route path="health-records" element={<HealthRecordsPage />} /> */}
        {/* <Route path="remote-consultation" element={<RemoteConsultationPage />} /> */}
        
      </Routes>
    </Router> 
    </>
  )
}

export default App



