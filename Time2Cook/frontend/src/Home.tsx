import React, {useState} from 'react';
import {Button, Tooltip} from "@mui/material";

export var apiPrompt = "";

function Home() {
  const [timeAvailable, setTimeAvailable] = useState("");
  const [ingredientsAvailable, setIngredientsAvailable] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [preferredCuisine, setPreferredCuisine] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [mealChoice, setMealChoice] = useState("");

  const constructPrompt = () => {
    apiPrompt = "Generate a recipe with detailed step by step instructions. "

    if (timeAvailable != "") {
      apiPrompt += `cook time: ${timeAvailable}, `
    }
    if (ingredientsAvailable != "") {
      apiPrompt += `using: ${ingredientsAvailable}, `
    }
    if (dietaryRestrictions != "") {
      apiPrompt += `keeping these allergies/dietary restrictions in mind: ${dietaryRestrictions}, `
    }
    if (preferredCuisine != "") {
      apiPrompt += `cuisine: ${preferredCuisine}, `
    }
    if (budgetAmount != "") {
      apiPrompt += `costing less than: ${budgetAmount}.`
    }
    if (mealChoice != "") {
      apiPrompt += `meal of day: ${mealChoice}.`
    }
    console.log(apiPrompt);
  }

  return (
    <div className="home">
      <h1>Time2Cook</h1>

      <p>Looking for the perfect recipe according to your needs? Fill out as many fields as you'd like!</p>

      <br />

      <div className="filter">
        <p>I have </p>

        <Tooltip title="time available" placement="right">
          <input
            type="text"
            placeholder="60 minutes"
            value={timeAvailable}
            onChange={(event) => {
            setTimeAvailable((event.target.value));
          }}/>
        </Tooltip>

        <p> to cook and </p>

        <Tooltip title="ingredients available" placement="right">
          <input
            type="text"
            placeholder="broccoli, beef, soy sauce"
            value={ingredientsAvailable}
            onChange={(event) => {
            setIngredientsAvailable((event.target.value));
          }}/>
        </Tooltip>

        <p> in my pantry. </p>
      </div>

      <div className="filter">
        <p>I cannot have </p>

        <Tooltip title="allergies, dietary restrictions" placement="right">
          <input
            type="text"
            placeholder="peanuts or sesame"
            value={dietaryRestrictions}
            onChange={(event) => {
            setDietaryRestrictions((event.target.value));
          }}/>
        </Tooltip>

        <p>and I prefer eating </p>

        <Tooltip title="cuisine" placement="right">
          <input
            type="text"
            placeholder="Asian food"
            value={preferredCuisine}
            onChange={(event) => {
            setPreferredCuisine((event.target.value));
          }}/>
        </Tooltip>
      </div>

      <div className="filter">
        <p>My budget is </p>

        <Tooltip title="cost of ingredients" placement="right">
          <input
            type="text"
            placeholder="$20"
            value={budgetAmount}
            onChange={(event) => {
            setBudgetAmount((event.target.value));
          }}/>
        </Tooltip>

        <p>for </p>

        <Tooltip title="meal" placement="right">
          <input
            type="text"
            placeholder="dinner"
            value={mealChoice}
            onChange={(event) => {
            setMealChoice((event.target.value));
          }}/>
        </Tooltip>
      </div>

      <br />

      <div className="submit">
        <Button onClick={constructPrompt}>Find my recipes!</Button>
      </div>
    </div>
  );
}

export default Home;