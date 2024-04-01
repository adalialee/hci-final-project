// Recipe.tsx
import React, { useState, useEffect } from 'react';
import { constructPrompt } from './PromptGenerator'; // importing the prompt generator function

function Recipe() {
  return (
    <div className="home">
      <h2>Recipe</h2>
      <p className="test">{window.name}</p>
    </div>
  );
}

export default Recipe;
