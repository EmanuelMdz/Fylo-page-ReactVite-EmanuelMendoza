import React from "react";
import "./Hero.css";
import { Button } from "../Buttons/Button";

export const Hero = () => {
  return (
    <div className="hero-div-padre">
      <div className="hero-img">
        <img src="public/images/illustration-intro.png" alt="Imagen Hero" />
      </div>
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo sotres all your most important files in one secure location, Access
        them wherever you need, share an collaborate witch friends, family and
        co-workers.
      </p>
      <Button text="Get Started"></Button>
    </div>
  );
};
