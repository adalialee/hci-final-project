import "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipes" Component={Recipes} />
        <Route path="/recipe/:recipeId" Component={RecipeDetail} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
