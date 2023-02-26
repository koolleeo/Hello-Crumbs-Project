import React from "react";
import RecipeCard from "../components/RecipeCard";
// import "../styles/Recipe.css";
import { RecipeList } from "../helpers/RecipeList";

function Recipes() {
  return (
    <div className="recipes">
      <h1>Recipes Gallery</h1>
      <div className="recipeList">
        {RecipeList.map((recipe, idx) => {
          return (
            <RecipeCard id={idx} name={recipe.name} image={recipe.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
