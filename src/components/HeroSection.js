import React from "react";
import HeroImage from "../assets/HeroImageeee.jpg";
import "../styles/Hero.css";

function HeroSection() {
  return (
    <div>
      <div className="hero-section">
        <div className="image">
          <img src={HeroImage} />
          <div className="text">
            <h1 className="mb-3">
              Ever wondered how to put together the ingredients you've already
              got at home? We hear you!
            </h1>
            <h4 className="mb-3">
              Let's not waste time and energy in searching for recipes that
              don't match your ingredients. <br></br>
              <br></br>Instead we will show you recipes that require the crumbs
              you already have - EASY!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
