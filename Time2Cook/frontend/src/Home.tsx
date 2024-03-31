import React, {useState} from 'react';
import {Button} from "@mui/material";
import {FilterInput} from "./components/FilterInput";
import {createRecipeService} from "./services/backend-service";

let apiPrompt = "";

function Home() {
  const [timeAvailable, setTimeAvailable] = useState("");
  const [ingredientsAvailable, setIngredientsAvailable] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [preferredCuisine, setPreferredCuisine] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [mealChoice, setMealChoice] = useState("");
  const [recipe, setRecipe] = useState("this is now gpt-linked, recipe displays here for testing purposes only (it takes a few moments)");

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
      apiPrompt += `dish/cuisine: ${preferredCuisine}, `
    }
    if (budgetAmount != "") {
      apiPrompt += `costing less than: ${budgetAmount}, `
    }
    if (mealChoice != "") {
      apiPrompt += `meal of day: ${mealChoice}.`
    }
    return apiPrompt;
  }

  // make call to GPT API
  const getRecipe = () => {
    const prompt = constructPrompt();
    const {request, cancel} = createRecipeService().post([
      {
        role: "user",
        content: prompt,
      },
    ]);

    request
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
      })
      .catch((err) => {
        alert("Could not retrieve recipe!")
      });
  }

  return (
    <div className="home">
      <h1>Time2Cook</h1>

      <p>Looking for the perfect recipe according to your needs? Fill out as many fields as you'd like!</p>

      <br/>

      <div className="filter">
        <p>I have </p>

        <FilterInput
          placeholder={"60 minutes"}
          value={timeAvailable}
          setInputValue={setTimeAvailable}
          tooltipTitle={"time available"}
        />

        <p> to cook and </p>

        <FilterInput
          placeholder={"broccoli, beef, soy sauce"}
          value={ingredientsAvailable}
          setInputValue={setIngredientsAvailable}
          tooltipTitle={"ingredients available"}
        />

        <p> in my pantry. </p>
      </div>

      <div className="filter">
        <p>I cannot have </p>

        <FilterInput
          placeholder={"peanuts or sesame"}
          value={dietaryRestrictions}
          setInputValue={setDietaryRestrictions}
          tooltipTitle={"allergies and dietary restrictions"}
        />

        <p>and I want to make </p>

        <FilterInput
          placeholder={"Asian food"}
          value={preferredCuisine}
          setInputValue={setPreferredCuisine}
          tooltipTitle={"dish/cuisine"}
        />
      </div>

      <div className="filter">
        <p>My budget is </p>

        <FilterInput
          placeholder={"$20"}
          value={budgetAmount}
          setInputValue={setBudgetAmount}
          tooltipTitle={"cost of ingredients"}
        />

        <p>for </p>

        <FilterInput
          placeholder={"dinner"}
          value={mealChoice}
          setInputValue={setMealChoice}
          tooltipTitle={"meal"}
        />
      </div>

      <br/>

      <div className="submit">
        <Button onClick={getRecipe}>Find my recipes!</Button>
      </div>

      <br/>

      <p className="test">{recipe}</p>
    </div>
  );
}

export default Home;