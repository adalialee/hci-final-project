import React, { useState, useEffect } from 'react';
import { constructPrompt } from './PromptGenerator'; // importing the prompt generator function

function Recipe() {
  const [recipeContent, setRecipeContent] = useState("");

  useEffect(() => {
    // When the component mounts, set the recipe content from window.name
    setRecipeContent(window.name);
  }, []);

  return (
    <div className="home">
      <h2>Recipe</h2>
      <p className="test">{recipeContent}</p>
    </div>
  );
}

export default Recipe;