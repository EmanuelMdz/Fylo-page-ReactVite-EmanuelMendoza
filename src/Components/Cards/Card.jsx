import React from "react";
import "./Cards.css";

export const Card = (prop) => {
  return (
    <>
      {prop.quotes == "true" ? (
        <img id="img-quotes" src="../images/bg-quotes.png" alt="" />
      ) : (
        <div></div>
      )}
      <div className="card-testimonial">
        <p>{prop.p}</p>
        <div className="card-t-logoynombre">
          <div className="card-t-logo">
            {prop.type === "satish" ? (
              <img src="../images/profile-1.jpg" alt="" />
            ) : prop.type === "bruce" ? (
              <img src="../images/profile-2.jpg" alt="" />
            ) : prop.type === "iva" ? (
              <img src="../images/profile-3.jpg" alt="" />
            ) : (
              <div></div>
            )}
          </div>
          <div className="card-t-nombre">
            <h6>{prop.nombre}</h6>
            <p>{prop.puesto}</p>
          </div>
        </div>
      </div>
    </>
  );
};
