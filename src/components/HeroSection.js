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
              We are here to make the most out of your crumbs
            </h1>
            <h4 className="mb-3">
              Ever struggled to find a recipe that matches the ingredients
              you've already got at home? We hear you! <br></br>
              <br></br>We are here to <b>save your time and energy</b>! Instead
              of searching the web and looking at the very many recipes of
              lasagna out there, we will bring you the ones that are the most
              compatible with the ingredients you already have at home.
              <br></br>
              <br></br>Ready? Let's crumb!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
