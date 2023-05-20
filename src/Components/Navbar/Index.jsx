import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Features } from "../Features/Features";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="public\icons\logo.svg" alt="" />
      </div>
      <div className="nav-menu">
        <Link to={"/features"}>Features</Link>
        <a href="#team-id">Team</a>
        <a href="#signin-id">Sign In</a>
      </div>
    </nav>
  );
};
