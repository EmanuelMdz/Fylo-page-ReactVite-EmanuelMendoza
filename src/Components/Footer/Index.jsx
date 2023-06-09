import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="container__footer">
      <div className="Logo">
        <img src="../icons/logo.svg" alt="" />
      </div>
      <div className="text1">
        <div className="text1-ico">
          <img src="../icons/icon-location.svg" alt="" />
        </div>
        <div className="text1-cont">
          <p>
            Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className="text2">
        <div className="text2-telefono">
          <img src="../icons/icon-phone.svg" alt="" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="text2-correo">
          <img src="../icons/icon-email.svg" alt="" />
          <p>example@fylo.com</p>
        </div>
      </div>
      <div className="text3">
        <a href="">About Us</a>
        <a href="">Jobs</a>
        <a href="">Press</a>
        <a href="">Blog</a>
      </div>
      <div className="text4">
        <a href="">Contact Us</a>
        <a href="">Terms</a>
        <a href="">Privacy</a>
      </div>
      <div className="text5">
        <a href=""></a>
        <img src="../icons/redes/fb-logo.png" alt="" />
        <img src="../icons/redes/twt-logo.png" alt="" />
        <img src="../icons/redes/ig-logo.png" alt="" />
      </div>
    </div>
  );
};
