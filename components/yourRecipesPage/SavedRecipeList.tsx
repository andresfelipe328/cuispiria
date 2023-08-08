import React from "react";
import RecipeOverview from "./RecipeOverview";

const SavedRecipeList = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2>Your Favorite Recipes</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RecipeOverview />
        <RecipeOverview />
      </ul>
    </div>
  );
};

export default SavedRecipeList;
