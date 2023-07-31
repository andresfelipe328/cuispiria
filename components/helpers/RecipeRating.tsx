import React from "react";

import { AiFillStar } from "react-icons/ai";

const RecipeRating = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-primary-dark">
        <AiFillStar className="icon text-extra" />
        <AiFillStar className="icon text-extra" />
        <AiFillStar className="icon text-extra" />
        <AiFillStar className="icon text-extra" />
        <AiFillStar className="icon text-extra" />
      </div>

      <small>5.0 (120 reviews)</small>
    </div>
  );
};

export default RecipeRating;
