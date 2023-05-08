import React, { useState } from "react";
import "./SignUp.css";
import { Button } from "../Buttons/Button";

export const SignUp = () => {
  const expresionCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [correoIngresado, setCorreoIngresado] = useState("");
  const [botonClickeado, setBotonClickeado] = useState(false);
  const [estilo, setEstilo] = useState({ borderColor: "none" });

  const actualImput = (e) => {
    setEstilo({ borderColor: "gray" });
    setBotonClickeado(false);
    setCorreoIngresado(e.target.value);
  };

  const handleClick = () => {
    if (expresionCorreo.test(correoIngresado)) {
      setEstilo({ borderColor: "greenyellow" });
      setBotonClickeado(false);
      return;
    }
    setEstilo({ borderColor: "red" });
    setBotonClickeado(true);
  };

  return (
    <div id="signin-id" className="email-container">
      <h1>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, or support team wold be happy to
        help you.
      </p>
      <div className="email-imput-container">
        <div className="email-imput">
          <input
            type="text"
            id="userEmail"
            placeholder="johnappleseed@mail.com"
            value={correoIngresado}
            onChange={actualImput}
            style={estilo}
          />
        </div>
        <Button onClick={handleClick} text="Get Started For Free"></Button>
      </div>
      {botonClickeado && <p className="error-p">El correo no es correcto</p>}
    </div>
  );
};
