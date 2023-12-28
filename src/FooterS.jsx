import React from "react";
import "./footerS.css";
import Logo from "./img/logo-white.webp";

export default function FooterS() {
  return (
    <div className="footerS container-fluid">
      <div className="container">
        <div className="fs-sub">
          <img src={Logo} alt="logo" />
        </div>
        <div className="fs-sub">
          <div className="s1">
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Testimonials</p>
          </div>
          <div className="s2">
            <p>
              © 2023 Litho is Proudly Powered by <span className="themezaa">ThemeZaa</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
