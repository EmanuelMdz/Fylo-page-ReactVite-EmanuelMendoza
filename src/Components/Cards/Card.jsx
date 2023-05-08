import React from "react";
import "./Cards.css";

export const Card = (prop) => {
  return (
    <>
      {prop.quotes === "true" ? (
        <img id="img-quotes" src="public\images\bg-quotes.png" alt="" />
      ) : (
        confirm
      )}
      <div className="card-testimonial">
        <p>{prop.p}</p>
        <div className="card-t-logoynombre">
          <div className="card-t-logo">
            {prop.type === "satish" ? (
              <img src="public\images\profile-1.jpg" alt="" />
            ) : prop.type === "bruce" ? (
              <img src="public\images\profile-2.jpg" alt="" />
            ) : prop.type === "iva" ? (
              <img src="public\images\profile-3.jpg" alt="" />
            ) : (
              confirm
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
