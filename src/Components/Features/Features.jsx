import React from "react";
import "./Features.css";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <section id="features-id">
      <div className="card-up">
        <div className="card-container">
          <Feature
            type="access"
            title="Access your files, anywhere"
            p="The ability to use a smartphone, tablet, or computer to access your account means your fules follow you everywhere."
          ></Feature>
        </div>
        <div className="card-container">
          <Feature
            type="security"
            title="Security you can trust"
            p="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          ></Feature>
        </div>
      </div>
      <div className="card-down">
        <div className="card-container">
          <Feature
            type="realtime"
            title="Real-time collaboration"
            p="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          ></Feature>
        </div>
        <div className="card-container">
          <Feature
            type="store"
            title="Store any type of file"
            p="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          ></Feature>
        </div>
      </div>
    </section>
  );
};
