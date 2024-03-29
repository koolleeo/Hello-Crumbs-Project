import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ image, name, ingredients, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="recipeCard"
      onClick={() => {
        navigate("/recipe/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h3> {name} </h3>
      <p> Ingredients: {ingredients} </p>
    </div>
  );
}

export default RecipeCard;
