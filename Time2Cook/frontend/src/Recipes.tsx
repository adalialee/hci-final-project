import React, {useState, useEffect} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Recipe() {
  // store recipe values
  const [individualRecipes, setIndividualRecipes] = useState([]);
  // router
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    // When the component mounts, set the recipe content from window.name
    setIndividualRecipes(window.name.split("Recipe ").slice(1))
    console.log(individualRecipes)
  }, []);

  return (
    <div className="home">
      <h2>Recipes</h2>
      {
        individualRecipes.map((recipe) =>
        <div>
          <br />
          <li className="recipe">{recipe}</li>
          <hr />
        </div>
        )
      }
      <div className="back">
        <Button onClick={returnToHome}>Back to filters!</Button>
      </div>
    </div>
  );
}

export default Recipe;