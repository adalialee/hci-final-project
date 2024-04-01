import './RecipeDetail';
import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import gifImage from './img/icons8-shopping-cart.gif';



function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState("Name:Nice Soup|Decription: Very nice soup, try it! \n|Ingredients: -Water\n-Other Ingredients\n |Steps: 1.2.3|Cooking Time: 10min|Type:Fish");
  const name = recipe.split('Name:')[1].split('|')[0];
  const description = recipe.split('Decription:')[1].split('|')[0];
  const ingredients = recipe.split('Ingredients:')[1].split('|')[0];
  const steps = recipe.split('Steps:')[1].split('|')[0];
  const time = recipe.split('Cooking Time:')[1].split('|')[0];
  const type = recipe.split('Type:')[1].split('|')[0];


  return (
    <div style={{ background: '#d3d3d3', textAlign: 'center', width: '600px', margin:'auto'}}>
      <br></br>
      <br></br>
      
      <h1>{name}</h1>
      <p> <i>{description}</i> </p>
      <br></br>

      <div style={{ background: 'white' }}>
        <br></br>
        <p> <img src={gifImage} alt="GIF" style={{ width: '20px', height: 'auto' }}/> {} <b>Ingredients:</b></p>
        {/* <pre style={{ marginLeft: '20px'}}>{ingredients}</pre> */}
        <p style={{ marginLeft: '20px'}}>{ingredients}</p>

        <p> <b>Steps:</b> <br></br>  {steps} </p>
        <p> <b>Cooking Time:</b> <br></br> {time} </p>
        {/* <p>Recipe details for ID: {recipeId} will be displayed here</p> */}
        <p>
          <Link to="/recipes">Go back to Recipes</Link>
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;
