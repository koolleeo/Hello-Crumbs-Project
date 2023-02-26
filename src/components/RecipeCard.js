import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="recipeCard"
      onClick={() => {
        navigate("/recipe/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default RecipeCard;