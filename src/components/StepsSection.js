import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

// import HeroImage from "../assets/HeroImage.jpg";
import "../styles/StepsSection.css";
import Step1Icon from "@mui/icons-material/Kitchen";
import Step2Icon from "@mui/icons-material/Keyboard";
import Step3Icon from "@mui/icons-material/ZoomIn";
import Step4Icon from "@mui/icons-material/SavedSearch";

function StepsSection() {
  return (
    <div>
      <h2>How HelloCrumbs work?</h2>
      <div className="step-section">
        <div className="step-card">
          <i>
            <Step1Icon />
          </i>
          <h3>Check for crumbs</h3>

          <p>
            Look around for ingredients that you have in your fridge or cupboard
          </p>
        </div>
        <div className="step-card">
          <i>
            <Step2Icon />
          </i>
          <h3>Crumbs input</h3>

          <p>Let us know what crumbs you have on your hands</p>
        </div>
        <div className="step-card">
          <i>
            <Step3Icon />
          </i>
          <h3>Searching</h3>

          <p>We will show you recipes that match the crumbs that you've got</p>
        </div>
        <div className="step-card">
          <i>
            <Step4Icon />
          </i>
          <h3>Save Recipes</h3>

          <p>Save your favorite recipes for the future</p>
        </div>
      </div>
      <div className="button">
        <button className="button-homepg" onClick={() => "/Search"}>
          Let's crumb it!
        </button>
      </div>
    </div>
  );
}

export default StepsSection;
