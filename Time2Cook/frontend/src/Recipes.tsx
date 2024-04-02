import React, {useState, useEffect} from 'react';

function Recipe() {
  const [recipeContent, setRecipeContent] = useState("");

  useEffect(() => {
    // When the component mounts, set the recipe content from window.name
    setRecipeContent(window.name);
  }, [recipeContent]);

  return (
    <div className="home">
      <h2>Recipe</h2>
      <p className="test">{recipeContent}</p>
    </div>
  );
}

export default Recipe;