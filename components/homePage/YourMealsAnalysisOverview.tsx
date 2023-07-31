import React from "react";

const YourMealsAnalysisOverview = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-dark/5 rounded-md shadow-small">
      <h2>Your Meals Analysis</h2>

      <div className="flex gap-8 items-center justify-center">
        <div className="w-52 h-52 rounded-full border-8 border-light/70"></div>
        <ul className="flex flex-col gap-4 list-disc">
          <li>
            <p>Nutrient 1</p>
          </li>
          <li>
            <p>Nutrient 1</p>
          </li>
          <li>
            <p>Nutrient 1</p>
          </li>
          <li>
            <p>Nutrient 1</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default YourMealsAnalysisOverview;
