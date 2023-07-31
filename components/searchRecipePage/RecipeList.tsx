"use client";

import React, { useState } from "react";

import RecipeOverview from "../homePage/RecipeOverview";
import RecipeSearch from "./RecipeSearch";

// Receives default recipes and creates state
const RecipeList = () => {
  const [recipes, setRecipes] = useState(null);

  return (
    <>
      <RecipeSearch setRecipes={setRecipes} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
        <RecipeOverview />
      </div>
    </>
  );
};

export default RecipeList;
