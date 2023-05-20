import React from "react";
import "./Cards.css";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <div id="team-id" className="card-testim-container">
      <Card
        type="satish"
        nombre="Satish Pastel"
        puesto="Founder & CEO, Huddle"
        p="Fyto has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        quotes="true"
      ></Card>
      <Card
        type="bruce"
        nombre="Bruce McKenzie"
        puesto="Founder & CEO, Huddle"
        p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine."
      ></Card>
      <Card
        type="iva"
        nombre="Iva Boyd"
        puesto="Founder & CEO, Huddle"
        p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
      ></Card>
    </div>
  );
};
