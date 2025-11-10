import React from "react";
import { NavLink } from "react-router-dom";
import "./UserNavbar.css";

const UserNavbar = () => {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <div className="user-navbar">
      <div className="container user-navbar-inner">
        <div className="brand">🛒 Your Account</div>
        <div className="links">
          <NavLink to="/user/cart" className={linkClass}>Cart</NavLink>
          <NavLink to="/user/orders" className={linkClass}>Orders</NavLink>
          <NavLink to="/user/profile" className={linkClass}>Profile</NavLink>
          <NavLink to="/user/logout" className={linkClass}>Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
