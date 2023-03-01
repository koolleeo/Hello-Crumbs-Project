import React from "react";
import { useNavigate } from "react-router-dom";

// import HeroImage from "../assets/HeroImage.jpg";
import "../styles/StepsSection.css";
import Step1Icon from "@mui/icons-material/Kitchen";
import Step2Icon from "@mui/icons-material/Keyboard";
import Step3Icon from "@mui/icons-material/ZoomIn";
import Step4Icon from "@mui/icons-material/SavedSearch";
import Arrow from "@mui/icons-material/KeyboardDoubleArrowRight";

const StepsSection = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>How HelloCrumbs works?</h2>
      <div className="step-section">
        <div className="step-card">
          <i>
            <Step1Icon />
          </i>
          <h3>Check for crumbs</h3>

          <p>
            Check <b>what ingredients you have</b> in your fridge & cupboard
          </p>
        </div>
        <div className="arrow-icon">
          <Arrow />
        </div>
        <div className="step-card">
          <i>
            <Step2Icon />
          </i>
          <h3>Crumbs input</h3>

          <p>
            Let us know what crumbs you have on your hands - we need{" "}
            <b>minimum 3 ingredients </b>from you
          </p>
        </div>
        <div className="arrow-icon">
          <Arrow />
        </div>
        <div className="step-card">
          <i>
            <Step3Icon />
          </i>
          <h3>Getting the results</h3>

          <p>
            We will <b>show you recipes </b> that match the crumbs that you've
            got
          </p>
        </div>
        <div className="arrow-icon">
          <Arrow />
        </div>
        <div className="step-card">
          <i>
            <Step4Icon />
          </i>
          <h3>💚 Recipes</h3>

          <p>
            <b>Save your favorite recipes </b> for the future
          </p>
        </div>
      </div>
      <div className="button">
        <button className="button-homepg" onClick={() => navigate("/Search")}>
          Let's crumb it!
        </button>
      </div>
    </div>
  );
};

export default StepsSection;
