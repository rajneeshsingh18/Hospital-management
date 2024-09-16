import { Link } from "react-router-dom";
import "../components/Dashboard.css";
import MaleDoctor from "../assets/maledoctor.svg";
import Queue from "../assets/queue.svg";
import MedicalFiles from "../assets/medicalFiles.svg";
import HospitalBed from "../assets/hospitalBed.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Main Content */}
      <main className="main-content">
        {/* Overview Panels */}
        <div className="overview-panels">
          <div className="info-card">
            <h3>Total Patients</h3>
            <p>120</p>
          </div>
          <div className="info-card">
            <h3>Available Beds</h3>
            <p>25</p>
          </div>
          <div className="info-card">
            <h3>Today's Appointments</h3>
            <p>32</p>
          </div>
          <div className="info-card">
            <h3>Critical Alerts</h3>
            <p>3</p>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="activity-feed">
          <h2 style={{ color: "black" }}>Recent Activity</h2>
          <ul>
            <li>
              <strong>12:30 PM</strong> - Patient John Doe admitted
            </li>
            <li>
              <strong>1:15 PM</strong> - Bed 23 is now available
            </li>
            <li>
              <strong>1:45 PM</strong> - Emergency call in ER
            </li>
          </ul>
        </div>

        {/* Bed Availability */}
        <div className="panel bed-availability">
          <h2 style={{ color: "black" }}>Real-Time Bed Availability Tracker</h2>
          <img src={HospitalBed} alt="Hospital Icon" width={150} height={150} />

          <div className="bed-card">
            <h3>General Ward</h3>
            <p>
              Status: Available <br /> Beds: 10
            </p>
          </div>
          <div className="bed-card">
            <h3>ICU</h3>
            <p>
              Status: Reserved <br /> Beds: 2
            </p>
          </div>
          <div className="bed-card">
            <h3>Pediatrics</h3>
            <p>
              Status: Critical <br /> Beds: 1
            </p>
          </div>
        </div>

        {/* Queue Status for OPD */}
        <div className="panel queue-status">
          <h2 style={{ color: "black" }}>Queue Status for OPD</h2>

          <img src={Queue} alt="Hospital Icon" width={150} height={150} />
          <div className="queue-card">
            <h3>General OPD</h3>
            <p>
              Queue Length: 15 <br /> Estimated Wait Time: 45 minutes
            </p>
          </div>
          <div className="queue-card">
            <h3>Cardiology OPD</h3>
            <p>
              Queue Length: 10 <br /> Estimated Wait Time: 30 minutes
            </p>
          </div>
        </div>

        {/* Doctor Availability */}
        <div className="panel doctor-availability">
          <img src={MaleDoctor} alt="Hospital Icon" width={150} height={150} />

          <h2 style={{ color: "black" }}>Doctor Availability and Scheduling</h2>
          <div className="doctor-card">
            <h3>Dr. John Doe</h3>
            <p>
              Specialty: Cardiology <br /> Available: 10 AM - 4 PM
            </p>
          </div>
          <div className="doctor-card">
            <h3>Dr. Jane Smith</h3>
            <p>
              Specialty: Pediatrics <br /> Available: 1 PM - 6 PM
            </p>
          </div>
        </div>

        {/* Patient Health Records */}
        <div className="panel health-record">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "auto",
            }}
          >
            <img
              src={MedicalFiles}
              alt="Hospital Icon"
              style={{
                width: "100%", // Full width on smaller screens
                maxWidth: "150px", // Limits the size on larger screens
                height: "auto",
              }}
            />
          </div>
          <h2 style={{ color: "black" }}>Patient Health Record Integration</h2>
          <input type="file" />
          <button>Upload</button>
          <div className="record-history">
            <h3>View Previous Visits</h3>
            <p>Visit on 01/05/2023 - Dr. John Doe</p>
            <p>Visit on 15/04/2023 - Dr. Jane Smith</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="footer">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Dashboard;
