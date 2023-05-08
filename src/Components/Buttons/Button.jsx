import React from "react";
import "../Buttons/button.css";

export const Button = (props) => {
  return (
    <button onClick={props.onClick} className="button-celeste">
      {props.text}
    </button>
  );
};
