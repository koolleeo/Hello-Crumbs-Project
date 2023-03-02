import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";
// import FavouritesPage from "./pages/FavouritesPage";
import Recipes from "./pages/Recipes";
import RecipeDisplay from "./pages/RecipeDisplay";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/Recipes" element={<Recipes />} /> */}
          <Route path="/recipe/:id" element={<RecipeDisplay />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/favourites" element={<FavouritesPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
