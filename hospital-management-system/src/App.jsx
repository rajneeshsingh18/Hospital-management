import Dashboard from "./components/Dashboard";
import BedAvailabilityPage from "./pages/BedAvailabilityPage";
import QueueStatusPage from "./pages/QueueStatusPage";
import AppointmentSchedulingPage from "./pages/AppointmentSchedulingPage";
import MedicineInventoryPage from "./pages/MedicineInventoryPage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addpatients" element={<AddPatient />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/bed-availability" element={<BedAvailabilityPage />} />
        <Route path="/queue-status" element={<QueueStatusPage />} />
        <Route path="/appointments" element={<AppointmentSchedulingPage />} />
        <Route path="/medicine-inventory" element={<MedicineInventoryPage />} />
        {/* Uncomment these lines if you have these pages */}
        {/* <Route path="/health-records" element={<HealthRecordsPage />} /> */}
        {/* <Route path="/remote-consultation" element={<RemoteConsultationPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
