"use client";

import React, { useState } from "react";
import gsap from "gsap";

import SearchFilters from "./SearchFilters";
import SearchRecipeForm from "../forms/SearchRecipeForm";
import CollapseLayout from "../animatedLayouts.tsx/CollapseLayout";

type Props = {
  setRecipes: Function;
};

// Recieves setRecipies to update list
const RecipeSearch = ({ setRecipes }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <CollapseLayout
        show={show}
        setShow={setShow}
        style="absolute top-0 left-0 w-full h-screen opacity-0 invisible z-50 flex items-center justify-center p-4 backdrop-blur-[2px] bg-dark/30"
      >
        <SearchFilters show={show} setShow={setShow} setRecipes={setRecipes} />
      </CollapseLayout>

      <div className="flex gap-2 mb-2 items-center justify-center ">
        <SearchRecipeForm setRecipes={setRecipes} />
        <button
          onClick={() => setShow(!show)}
          className="bg-extra/50 w-fit px-5 py-2 rounded-md border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out"
        >
          <p>Filters</p>
        </button>
      </div>
    </>
  );
};

export default RecipeSearch;
