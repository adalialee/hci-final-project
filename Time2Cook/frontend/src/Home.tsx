import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/recipes?ingredients=${encodeURIComponent(ingredients)}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;