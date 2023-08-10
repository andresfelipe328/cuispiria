import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import YourMealOverview from "./YourMealOverview";

import { FaPlus } from "react-icons/fa";
import { areMealsToday } from "@/utils/mongoDBHelpers";

const YourMealsOverview = async () => {
  const session = await getServerSession(authOptions);

  const todayMeals = await areMealsToday(session, new Date());

  return (
    <div className="flex flex-col gap-2 p-4 bg-dark/5 rounded-md shadow-small">
      <h2>Meals for today</h2>
      <div
        className={`${
          todayMeals!.length > 0
            ? "grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "grid place-content-center"
        } `}
      >
        {todayMeals?.map((meal) => (
          <YourMealOverview key={meal.id} meal={meal} />
        ))}

        <div className="flex flex-col gap-1 items-center justify-center">
          <Link
            href="/meal-planning"
            className="bg-extra/50 rounded-3xl p-4 border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out "
          >
            <FaPlus className="icon" />
          </Link>
          <small>add a meal for today</small>
        </div>
      </div>
    </div>
  );
};

export default YourMealsOverview;
