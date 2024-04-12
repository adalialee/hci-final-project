import React, {useState, useEffect} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Recipe() {
  // store recipe values
  const [individualRecipes, setIndividualRecipes] = useState([""]);
  // router
  const navigate = useNavigate();

  let title = "";

  const returnToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    // When the component mounts, set the recipe content from window.name
    setIndividualRecipes(window.name.split("Recipe ").slice(1))
    console.log(individualRecipes)
  }, []);

  // this section for image API (future feature)
//  const getPictures = (query: string) : string => {
//    let url = ""
//    fetch(`https://api.unsplash.com/search/photos?client_id=AyHbYtpefN3EQlmCyQi-sHoPosV6UHYcRrKOEU1bzFI&query=${query}`)
//      .then((res) => {
//        return res.json();
//      })
//      .then((data) => {
//        console.log(data["results"][0]["urls"]["small"]);
//        url = data["results"][0]["urls"]["small"];
//      });
//    return url;
//  };

  return (
    <div className="home">
      <h2>Recipes</h2>
      {
        individualRecipes.map((recipe) =>
          <>
            {/*{title = recipe.split("Ingredients:")[0].split(":")[1]}*/}
            {/*<img src={getPictures(title)} alt={title}/>*/}
            <div>
              <br/>
              <li className="recipe">{recipe}</li>
              <hr/>
            </div>
          </>
        )
      }
      <div className="back">
        <Button onClick={returnToHome}>Back to filters!</Button>
      </div>
    </div>
  );
}

export default Recipe;