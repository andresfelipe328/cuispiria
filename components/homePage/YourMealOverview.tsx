import { TodayMeal } from "@/utils/types";
import React from "react";

import { BiTimeFive } from "react-icons/bi";
import { FaImage } from "react-icons/fa";

type Props = {
  meal: TodayMeal;
};

const YourMealOverview = ({ meal }: Props) => {
  return (
    <div className="group/container">
      <div className="relative w-full h-40 bg-light/70 rounded-lg flex items-center justify-center group-hover/container:shadow-medium transition-all duration-200">
        <FaImage className="text-6xl text-dark group-hover/container:scale-110 transition-all duration-200 ease-in-out" />
      </div>

      <div className="flex flex-col gap-2 rounded-md p-2 group-hover/container:-translate-y-2 group-hover/container:mx-2 group-hover/container:bg-main group-hover/container:shadow-large transition-all duration-200 ease-in-out">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">{meal.title}</p>
          <div className="flex items-center gap-2">
            <BiTimeFive className="icon text-extra" />
            <small>{meal.time} min</small>
          </div>
        </div>

        <p className="uppercase font-semibold">Meal Type: {meal.type[0]}</p>
      </div>
    </div>
  );
};

export default YourMealOverview;
