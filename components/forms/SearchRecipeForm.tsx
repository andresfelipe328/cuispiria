import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  setRecipes: Function;
};

const SearchRecipeForm = ({ setRecipes }: Props) => {
  const handleRecipeSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("searching for recipe...");
  };

  return (
    <form className="relative w-full sm:w-[60%]" onSubmit={handleRecipeSearch}>
      <input
        type="text"
        placeholder="search by ingredients, separated by commas"
        className="w-full pr-10"
      />
      <BiSearch className="absolute right-2 top-3 text-dark text-2xl pointer-events-none" />
    </form>
  );
};

export default SearchRecipeForm;
