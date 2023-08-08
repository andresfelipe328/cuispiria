import React from "react";

import BasicLayout from "@/components/animatedLayouts.tsx/BasicLayout";
import RecipesList from "@/components/yourRecipesPage/RecipesList";

const page = () => {
  return (
    <BasicLayout
      Tag={"div"}
      style="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-2 p-4"
    >
      <RecipesList />
    </BasicLayout>
  );
};

export default page;
