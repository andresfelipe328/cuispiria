import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

import RecipeList from "@/components/searchRecipePage/RecipeList";
import BasicLayout from "@/components/animatedLayouts.tsx/BasicLayout";

export const metadata: Metadata = {
  title: "Cuispiria - Recipe Search",
  description: "Search for a recipe",
};

const page = async () => {
  // Checks for authentication
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <BasicLayout
      Tag={"div"}
      style="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-2 p-4"
    >
      <h2>Recipes</h2>

      <RecipeList />
    </BasicLayout>
  );
};

export default page;
