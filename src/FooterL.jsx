import React from "react";
import "./footerL.css";
import Logo from "./img/logo-white.webp";
export default function FooterL() {
  return (
    <div className="footerL container-fluid">
      <div className="container">
        <div className="fl-sub">
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Testimonials</p>
        </div>
        <div className="fl-sub">
          <img src={Logo} alt="logo" />
        </div>
        <div className="fl-sub">
          <p>© 2023 Litho is Proudly Powered by <span className="themezaa">ThemeZaa</span> </p>
        </div>
      </div>
    </div>
  );
}
