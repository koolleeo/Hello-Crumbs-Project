import React from "react";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="welcome-msg">
        <button>Welcome to the Home Page!</button>
      </div>
      <div className="brief-about-us">
        <button>Brief "About Us!"</button>
      </div>
      <div class="steps-section">
        <p>This is where you can find information about our company.</p>
      </div>
    </div>
  );
}

export default HomePage;
