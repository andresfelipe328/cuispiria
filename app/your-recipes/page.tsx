import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import BasicLayout from "@/components/animatedLayouts.tsx/BasicLayout";
import RecipesList from "@/components/yourRecipesPage/RecipesList";

export const metadata: Metadata = {
  title: "Cuispiria - Your Recipes",
  description: "List of all your saved and custom recipes",
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
      <RecipesList />
    </BasicLayout>
  );
};

export default page;
