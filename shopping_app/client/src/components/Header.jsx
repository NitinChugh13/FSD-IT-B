import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <Link to="/">🛍️ MyShop</Link>
        </div>

        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/user">User</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/login" className="btn small">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
