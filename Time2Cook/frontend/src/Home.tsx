// Home.tsx
import React, { useState } from "react";
import { Button } from "@mui/material";
import { FilterInput } from "./components/FilterInput";
import { createRecipeService } from "./services/backend-service";
import { constructPrompt } from "./PromptGenerator"; // Import the constructPrompt function

function Home() {
  const [timeAvailable, setTimeAvailable] = useState("");
  const [ingredientsAvailable, setIngredientsAvailable] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [preferredCuisine, setPreferredCuisine] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [mealChoice, setMealChoice] = useState("");

  const getRecipe = () => {
    const prompt = constructPrompt(
      timeAvailable,
      ingredientsAvailable,
      dietaryRestrictions,
      preferredCuisine,
      budgetAmount,
      mealChoice
    );
    const { request, cancel } = createRecipeService().post([
      {
        role: "user",
        content: prompt,
      },
    ]);

    request
      .then((res) => {
        window.name = (res.data);
      })
      .catch((err) => {
        alert("Could not retrieve recipe!");
      });
  };

  return (
    <div className="home">
      <h1 style={{color: "#1D710F"}}>Time2Cook</h1>
      <p>Looking for the perfect recipe according to your needs? Fill out as many fields as you'd like!</p>
      <br />
      <div className="filter">
        <p>I have </p>
        <div className="entry">
          <FilterInput placeholder={"60 minutes"} value={timeAvailable} setInputValue={setTimeAvailable} tooltipTitle={"time available"}/>
        </div>
        <p> to cook and </p>
        <div className="entry">
          <FilterInput placeholder={"broccoli, beef, soy sauce"} value={ingredientsAvailable} setInputValue={setIngredientsAvailable} tooltipTitle={"ingredients available"} />
        </div>
        <p> in my pantry. </p>
      </div>
      <div className="filter">
        <p>I cannot have </p>
        <div className="entry">
          <FilterInput placeholder={"peanuts or sesame"} value={dietaryRestrictions} setInputValue={setDietaryRestrictions} tooltipTitle={"allergies and dietary restrictions"} />
        </div>
        <p>and I want to make </p>
        <div className="entry">
          <FilterInput placeholder={"Asian food"} value={preferredCuisine} setInputValue={setPreferredCuisine} tooltipTitle={"dish/cuisine"} />
        </div>
      </div>
      <div className="filter">
        <p>My budget is </p>
        <div className="entry">
          <FilterInput placeholder={"$20"} value={budgetAmount} setInputValue={setBudgetAmount} tooltipTitle={"cost of ingredients"} />
        </div>
        <p>for </p>
        <div className="entry">
          <FilterInput placeholder={"dinner"} value={mealChoice} setInputValue={setMealChoice} tooltipTitle={"meal"} />
        </div>
      </div>
      <br />
      <div className="submit">
        <a href="/recipes">
          <Button onClick={getRecipe} style={{color: "#1D710F"}}>Find my recipes!</Button>
        </a>
      </div>
    </div>
  );
}

export default Home;