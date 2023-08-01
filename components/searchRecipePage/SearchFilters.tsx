import React from "react";

import SearchFilterForm from "../forms/SearchFilterForm";

type Props = {
  show: boolean | null;
  setShow: Function;
  setRecipes: Function;
};

const SearchFilters = ({ show, setShow, setRecipes }: Props) => {
  return (
    <SearchFilterForm show={show} setShow={setShow} setRecipes={setRecipes} />
  );
};

export default SearchFilters;
