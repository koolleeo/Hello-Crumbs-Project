import React from "react";
import { useParams } from "react-router-dom";
import { RecipeList } from "../helpers/RecipeList";
import "../styles/RecipeDisplay.css";

function RecipeDisplay() {
  const { id } = useParams();
  const recipe = RecipeList[id];
  return (
    <div className="recipe">
      <h1> {recipe.name} </h1>
      <img src={recipe.image} />
      <p>
        <b>Ingredients: </b>
        {recipe.ingredients}
      </p>
      <a href="https://google.com" target="_blank"></a>
    </div>
  );
}

export default RecipeDisplay;
