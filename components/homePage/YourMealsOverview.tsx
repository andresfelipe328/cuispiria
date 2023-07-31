import React from "react";
import YourMealOverview from "./YourMealOverview";

import { FaPlus } from "react-icons/fa";

const YourMealsOverview = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-dark/5 rounded-md shadow-small">
      <h2>Meals for today</h2>
      <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <YourMealOverview />

        <div className="flex flex-col gap-1 items-center justify-center">
          <button className="bg-extra/50 rounded-3xl p-4 border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out ">
            <FaPlus className="icon" />
          </button>
          <small>add a meal for today</small>
        </div>
      </div>
    </div>
  );
};

export default YourMealsOverview;
