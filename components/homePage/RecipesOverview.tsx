import React from "react";
import Link from "next/link";

import RecipeOverview from "./RecipeOverview";

const RecipesOverview = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-dark/5 rounded-md shadow-small">
      <h2>Recipes for you</h2>

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
      </div>

      <Link
        href="search-recipe"
        className="mx-auto bg-extra/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out"
      >
        <p className="font-bold">more</p>
      </Link>
    </div>
  );
};

export default RecipesOverview;
