import Home from "./pages/home";
import Ours from "./pages/ours";
import Recipes from "./pages/recipes";
import Contact from "./pages/contact";
import Recipe from "./pages/recipe";
import { Routes, Route } from "react-router-dom";
import { RecipesProvider } from "./components/recipeProvider";
import Category from "./pages/category";

function App() {
  return (
    <>
      <RecipesProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Ours" element={ <Ours /> } />
          <Route path="/Recipes" element={ <Recipes /> } />
          <Route path="/Recipe/:id" element={ <Recipe /> } />
          <Route path="/Contact" element={ <Contact /> } />
          <Route path="/Category/:category" element={ <Category /> } />
        </Routes>
      </RecipesProvider>
    </>
  );
}
export default App;