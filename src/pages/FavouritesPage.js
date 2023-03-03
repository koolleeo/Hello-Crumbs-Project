import React from "react";
import "../styles/FavouritesPage.css";
import { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Checkbox } from "@mui/material";

function FavouritesPage() {

// define state for favourites recipes from local storage

const [recipes, setRecipes] = useState([]);

// load from local storage when page is rendered or wheneven recipe state changes

useEffect(() => {
  const storedRecipes = JSON.parse(localStorage.getItem('recipefavourites'));
  if (storedRecipes) {
    setRecipes(storedRecipes);
  }
}, [recipes]);


  const toggleFavorite = (event, id) => {

    event.preventDefault();

      //get local storage
      let storage = localStorage.getItem("recipefavourites");
      let storageArr = JSON.parse(storage);
    
      //create an empty array and push instance of storage object
      let array = [];
    
      //if storage array already exists, replace existing entry if exists and recreate array of objects
      if (storageArr != null) {
    
          storageArr.forEach(arr => {
      
              if (arr.id === id) {
                  return;
              } else {
                  array.push(arr)
              }
          })
      
      }
    
      localStorage.setItem("recipefavourites", JSON.stringify(array));
    
    };

  return (
    <div id="recipe-container" className="recipes">
      {recipes.map((data) => (
        <div className="recipes" key={data.response.data.id}>
          <div className="recipeList">
            <div id={data.response.data.id} className="recipeCard">
              <img src={data.response.data.image} alt="hey" />
              <h2>{data.response.data.title}</h2>
              <a href={data.response.data.sourceUrl} target="_blank" rel="noreferrer">
                <button style={{ marginBottom: 4 }}>See More</button>
              </a>
              <h5>{data.response.data.sourceName}</h5>
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
                onChange={(event) => {
                  let callID = event.target.parentElement.parentElement.id;
                  toggleFavorite(event, callID);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default FavouritesPage;

// import React from "react";
// import ComingSoon from "../assets/comingsoon.png";
// import "../styles/FavouritesPage.css";

// function FavouritesPage() {
//   return (
//     <div className="img-div">
//       <img className="comingsoon-img" src={ComingSoon} />
//     </div>
//   );
// }

// export default FavouritesPage;
