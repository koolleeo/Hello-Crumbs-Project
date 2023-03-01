import React from "react";
import RecipeCard from "../components/RecipeCard";
import "../styles/Recipes.css";
import { RecipeList } from "../helpers/RecipeList";

function Recipes() {
  return (
    <div className="recipes">
      <div className="recipeList">
        {RecipeList.map((recipe, idx) => {
          return (
            <RecipeCard
              id={idx}
              name={recipe.name}
              image={recipe.image}
              ingredients={recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
