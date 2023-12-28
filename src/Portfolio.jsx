import React from "react";
import "./portfolio.css";
import Car from "./img/home-creative-agency-img-01.webp";
import Coke from "./img/home-creative-agency-img-02.webp";
import Tshirt from "./img/home-creative-agency-img-03.webp";
import Shoe from "./img/home-creative-agency-img-04.webp";
import Jacket from "./img/home-creative-agency-img-05.webp";
import Man from "./img/home-creative-agency-img-06.webp";

export default function Portfolio() {
  return (
    <div className="portfolio container-fluid">
        <div className="p-sub-1">
            <p className="yellow">RECENT PROJECTS</p>
            <h2>Selected Portfolio</h2>
        </div>
      <div className="p-sub-2">
        <div className="car">
          <img src={Car} alt="car" />
        </div>
        <div className="coke">
          <img src={Coke} alt="coke" />
        </div>
        <div className="tshirt">
          <img src={Tshirt} alt="tshirt" />
        </div>
        <div className="shoe">
          <img src={Shoe} alt="shoe" />
        </div>
        <div className="jacket">
          <img src={Jacket} alt="jacket" />
        </div>
        <div className="man">
          <img src={Man} alt="man" />
        </div>
      </div>
    </div>
  );
}
