import React from "react";
import CustomRecipeOverview from "./CustomRecipeOverview";

const CustomRecipesList = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2>Your Custom Recipes</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CustomRecipeOverview />
        <CustomRecipeOverview />
      </ul>
    </div>
  );
};

export default CustomRecipesList;
