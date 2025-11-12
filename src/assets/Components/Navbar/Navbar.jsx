import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const activeClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

const Navbar = ({ userEmail, onLogout }) => {
  const handleLogout = () => {
    onLogout?.();
    // redirect to login page after logout
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-title">Invoice Tracker</h1>

        <NavLink to="/dashboard" className={activeClass}>
          Dashboard
        </NavLink>

        <NavLink to="/vendors" className={activeClass}>
          Vendors
        </NavLink>

        <NavLink to="/invoices" className={activeClass}>
          Invoices
        </NavLink>

        <NavLink to="/payments" className={activeClass}>
          Payments
        </NavLink>

        <NavLink to="/alerts" className={activeClass}>
          Alerts
        </NavLink>
      </div>

      <div className="nav-right">
        <span className="user-email">{userEmail}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
