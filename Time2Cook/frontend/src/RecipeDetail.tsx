import './RecipeDetail';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
  const { recipeId } = useParams();

  return (
    <div>
      <h1>Recipe Detail Page</h1>
      <p>Recipe details for ID: {recipeId} will be displayed here</p>
      <p>
        <Link to="/recipes">Go back to Recipes</Link>
      </p>
    </div>
  );
}

export default RecipeDetail;
