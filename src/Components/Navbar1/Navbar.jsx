import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="../icons/logo.svg" alt="Logo" />
      </div>
      <div className="nav-menu">
        <Link to={"/features"}>Features</Link>
        <a href="#team-id">Team</a>
        <a href="#signin-id">Sign In</a>
      </div>
    </nav>
  );
};
