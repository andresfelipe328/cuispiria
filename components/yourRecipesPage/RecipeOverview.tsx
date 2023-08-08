import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaImage } from "react-icons/fa";
import RecipeRating from "../helpers/RecipeRating";

const RecipeOverview = () => {
  return (
    <div className="group/container">
      <div className="relative w-full h-40 bg-light/70 rounded-lg flex items-center justify-center group-hover/container:shadow-medium transition-all duration-200">
        <FaImage className="text-6xl text-dark group-hover/container:scale-110 transition-all duration-200 ease-in-out" />
      </div>

      <div className="rounded-md p-2 group-hover/container:-translate-y-2 group-hover/container:mx-2 group-hover/container:bg-main group-hover/container:shadow-large transition-all duration-200 ease-in-out">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">Recipe Name</p>
          <div className="flex items-center gap-2">
            <BiTimeFive className="icon text-extra" />
            <small>25 min</small>
          </div>
        </div>

        <RecipeRating />
      </div>
    </div>
  );
};

export default RecipeOverview;
