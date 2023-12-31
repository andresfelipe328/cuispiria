import React from "react";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getAllMeals } from "@/utils/mongoDBHelpers";

import BasicLayout from "@/components/animatedLayouts.tsx/BasicLayout";
import TodayMeals from "@/components/mealPlanningPage/TodayMeals";
import MealsAnalysis from "@/components/mealPlanningPage/MealsAnalysis";
import MainCalendar from "@/components/mealPlanningPage/mealCalendar/MainCalendar";

export const metadata: Metadata = {
  title: "Cuispiria - Meal Planning",
  description: "Plan your meals for the day",
};

const page = async () => {
  // Checks for authentication
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const allMeals = await getAllMeals(session);

  return (
    <BasicLayout
      Tag={"div"}
      style="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-2 p-4"
    >
      <h2>Meal Planning</h2>

      <MainCalendar allMeals={JSON.stringify(allMeals)} />
      <TodayMeals />
      <MealsAnalysis />
    </BasicLayout>
  );
};

export default page;
