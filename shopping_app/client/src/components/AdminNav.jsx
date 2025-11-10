import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNav.css";

const AdminNav = () => {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <aside className="admin-nav">
      <h3>Admin Panel</h3>
      <nav>
        <NavLink to="/admin/overview" className={linkClass}>Overview</NavLink>
        <NavLink to="/admin/users" className={linkClass}>Users</NavLink>
        <NavLink to="/admin/reports" className={linkClass}>Reports</NavLink>
        <NavLink to="/admin/settings" className={linkClass}>Settings</NavLink>
      </nav>
    </aside>
  );
};

export default AdminNav;
