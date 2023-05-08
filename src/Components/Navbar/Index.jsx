import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="public\icons\logo.svg" alt="" />
      </div>
      <div className="nav-menu">
        <a href="#features-id">Features</a>
        <a href="#team-id">Team</a>
        <a href="#signin-id">Sign In</a>
      </div>
    </nav>
  );
};
