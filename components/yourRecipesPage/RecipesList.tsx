import React from "react";
import RecipeOverview from "./RecipeOverview";
import SavedRecipeList from "./SavedRecipeList";
import CustomRecipesList from "./CustomRecipesList";

const RecipesList = () => {
  return (
    <>
      <SavedRecipeList />
      <CustomRecipesList />
    </>
  );
};

export default RecipesList;
