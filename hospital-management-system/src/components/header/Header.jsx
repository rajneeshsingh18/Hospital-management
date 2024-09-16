import { FaBed, FaClipboardList, FaCalendarAlt, FaPills } from "react-icons/fa"; // Icons for links
import { Link } from "react-router-dom";
import Hospital from "./hospital.svg";

const Header = () => {
  return (
    <header>
      {/* Header Left: Logo and Title */}
      <div className="header-left">
        {/* Link to Root for the Dashboard Title */}
        <Link to="/" className="dashboard-title-link">
          <img src={Hospital} alt="Hospital Icon" width={60} height={60} />
          <h1 className="dashboard-title">Hospital Management Dashboard</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="dashboard-links">
        <Link to="/bed-availability" className="dashboard-link">
          <FaBed className="link-icon" />
          Bed Availability
        </Link>
        <Link to="/queue-status" className="dashboard-link">
          <FaClipboardList className="link-icon" />
          Queue Status
        </Link>
        <Link to="/appointments" className="dashboard-link">
          <FaCalendarAlt className="link-icon" />
          Appointments
        </Link>
        <Link to="/medicine-inventory" className="dashboard-link">
          <FaPills className="link-icon" />
          Medicine Inventory
        </Link>
      </nav>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  );
};

export default Header;
