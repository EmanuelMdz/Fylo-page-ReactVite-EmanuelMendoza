import React from "react";
import "./Section.css";

export const Section = () => {
  return (
    <section className="section-div">
      <div className="section-img">
        <img src="../images/illustration-stay-productive.png" alt="" />
      </div>
      <div className="section-text">
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required
        </p>
        <a href="#features-id">
          See how Fylo works <img src="../icons/flechaderecha.png" alt="" />
        </a>
      </div>
    </section>
  );
};
