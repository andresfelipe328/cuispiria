import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";

import BasicLayout from "@/components/animatedLayouts.tsx/BasicLayout";
import RecipesOverview from "@/components/homePage/RecipesOverview";
import YourMealsAnalysisOverview from "@/components/homePage/YourMealsAnalysisOverview";
import YourMealsOverview from "@/components/homePage/YourMealsOverview";

export default async function Home() {
  // Checks for authentication
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <BasicLayout
      Tag={"div"}
      style="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-2 p-4"
    >
      <YourMealsOverview />
      <YourMealsAnalysisOverview />
      <RecipesOverview />
    </BasicLayout>
  );
}
