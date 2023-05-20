import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Features } from "../Features/Features";
import Logo from "../../public/icons/logo.svg";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="Logo" alt="" />
      </div>
      <div className="nav-menu">
        <Link to={"/features"}>Features</Link>
        <a href="#team-id">Team</a>
        <a href="#signin-id">Sign In</a>
      </div>
    </nav>
  );
};
