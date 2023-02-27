import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
// import "../App.css";
import "../styles/NavigationBar.css";

function NavigationBar() {
  const [expandNavigationBar, setExpandNavigationBar] = useState(false);

  const location = useLocation();

  // run this useEffect when the location (that is inside array) changes - set the Navbar to 'false' which = 'close state'
  useEffect(() => {
    setExpandNavigationBar(false);
  }, [location]);

  return (
    <div className="navigationbar" id={expandNavigationBar ? "open" : "close"}>
      {/* Button used for expanding the navbar on a smaller screen */}
      <div className="toggleButton">
        {/* Function inside the button to set expand state when the button is clicked  */}
        <button
          onClick={() => {
            setExpandNavigationBar((prev) => !prev);
          }}
        >
          {/* Adding the menu icon for mobile screen */}
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Search">Search</Link>
        <Link to="/Recipes">Recipes</Link>
        <Link to="/FavouritesPage">Favourites</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
