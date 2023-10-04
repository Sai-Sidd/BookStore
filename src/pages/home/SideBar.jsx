import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? "active" : ""}`}>
      <div className="sidebar-icon" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-links">
          <Link to="/" onClick={toggleSidebar} className="sidebar-link">
            Home
          </Link>
          <Link to="/authors" onClick={toggleSidebar} className="sidebar-link">
            Authors
          </Link>
          <Link to="/about" onClick={toggleSidebar} className="sidebar-link">
            About Us
          </Link>
          <Link to="/contact" onClick={toggleSidebar} className="sidebar-link">
            Contact Us
          </Link>
          <Link to="/register" onClick={toggleSidebar} className="sidebar-link">
            Register
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
