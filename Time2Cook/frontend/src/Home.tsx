import React, {useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FilterInput} from "./components/FilterInput";
import {createRecipeService} from "./services/backend-service";
import {constructPrompt} from "./components/PromptGenerator"; // Import the constructPrompt function
import loading from "./img/food-loading.gif"
import chef from "./img/chef.png"

function Home() {
  // router
  const navigate = useNavigate();

  // filter values
  const [timeAvailable, setTimeAvailable] = useState("");
  const [ingredientsAvailable, setIngredientsAvailable] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [preferredCuisine, setPreferredCuisine] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [mealChoice, setMealChoice] = useState("");
  const [owned, setOwned] = useState("");
  const [notOwned, setNotOwned] = useState("");

  // loading gif
  const [isLoading, setIsLoading] = useState(false);

  // when the submit button is clicked
  const getRecipe = () => {
    const prompt = constructPrompt(
      timeAvailable,
      ingredientsAvailable,
      dietaryRestrictions,
      preferredCuisine,
      budgetAmount,
      mealChoice,
      owned,
      notOwned
    );

    // method for api call
    const {request} = createRecipeService().post([
      {
        role: "user",
        content: prompt,
      },
    ]);

    setIsLoading(true);

    // call api
    request
      .then((res) => {
        setIsLoading(false);
        window.name = (res.data);
        navigate("/recipes");
      })
      .catch((err) => {
        alert("Error with API! Could not retrieve recipe!");
      });
  };

  return (
    <div className="home">
      <img className="icon" src={chef} alt="chef icon"/>
      <h1>Time2Cook</h1>
      <br/>
      <p>Looking for the perfect recipe according to your needs? </p>
      <p>Fill out zero fields, or as many fields as you'd like!</p>
      <br/>
      <div className="filter">
        <p>I have </p>
        <FilterInput placeholder={"60 minutes"} value={timeAvailable} setInputValue={setTimeAvailable}
                     tooltipTitle={"time available"}/>
        <p> to cook and </p>
        <FilterInput placeholder={"broccoli, beef, soy sauce"} value={ingredientsAvailable}
                     setInputValue={setIngredientsAvailable} tooltipTitle={"ingredients available"}/>
        <p> in my pantry. </p>
      </div>
      <div className="filter">
        <p>I cannot have </p>
        <FilterInput placeholder={"peanuts or sesame"} value={dietaryRestrictions}
                     setInputValue={setDietaryRestrictions} tooltipTitle={"allergies and dietary restrictions"}/>
        <p>and I want to make </p>
        <FilterInput placeholder={"Asian food"} value={preferredCuisine} setInputValue={setPreferredCuisine}
                     tooltipTitle={"dish/cuisine"}/>
      </div>
      <div className="filter">
        <p>My budget is </p>
        <FilterInput placeholder={"$20"} value={budgetAmount} setInputValue={setBudgetAmount}
                     tooltipTitle={"cost of ingredients"}/>
        <p>for </p>
        <FilterInput placeholder={"a potluck"} value={mealChoice} setInputValue={setMealChoice} tooltipTitle={"meal/occasion"}/>
      </div>
      <div className="filter">
        <p>I own </p>
        <FilterInput placeholder={"an oven"} value={owned} setInputValue={setOwned}
          tooltipTitle={"appliances and tools"}/>
        <p>and I do not want to use </p>
        <FilterInput placeholder={"a mixer"} value={notOwned} setInputValue={setNotOwned} tooltipTitle={"appliances/tools"}/>
      </div>
      <br/>
      <div className="submit">
        <Button onClick={getRecipe}>Find my recipes!</Button>
      </div>
      <div className="loading">
        {isLoading ? <img src={loading} alt="loading gif"/>: <></> }
      </div>
    </div>
  );
}

export default Home;