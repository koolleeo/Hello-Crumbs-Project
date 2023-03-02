import React from "react";
import ComingSoon from "../assets/comingsoon.png";
import "../styles/FavouritesPage.css";

function FavouritesPage() {
  return (
    <div className="img-div">
      <img className="comingsoon-img" src={ComingSoon} />
    </div>
  );
}

export default FavouritesPage;
