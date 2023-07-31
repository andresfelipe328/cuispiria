"use client";

import React from "react";

import { CUISINE, COURSE, DIET, SORT } from "@/utils/filtering";

import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

type Props = {
  show: boolean;
  setShow: Function;
  setRecipes: Function;
};

const SearchFilterForm = ({ show, setShow, setRecipes }: Props) => {
  const handleRecipeSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("searching for recipe...");
  };

  return (
    <form
      onSubmit={handleRecipeSearch}
      className="relative overflow-auto h-[740px] flex flex-col gap-2 bg-main rounded-md shadow-small p-4"
    >
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="absolute top-4 right-4"
      >
        <FaTimes className="text-dark hover:text-light hover:rotate-180 transition-all duration-200 ease-in-out" />
      </button>

      <h1 className="text-light">Filters</h1>

      <ul className="flex flex-col gap-2">
        <li className="flex flex-col gap-2">
          <h2>Course</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {COURSE.map((course, index) => (
              <div key={index} className="flex gap-2 items-center">
                <label>
                  <input
                    type="checkbox"
                    name={`course-input-${course.text}`}
                    id={`course-input-${course.text}`}
                    className="hidden peer"
                  />
                  <div className="filter-checkbox">
                    <BsCheckLg className="text-base text-extra" />
                  </div>
                </label>
                <p className="font-semibold">{course.text}</p>
              </div>
            ))}
          </ul>
        </li>

        <li className="flex flex-col gap-2">
          <h2>Cuisine</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CUISINE.map((cuisine, index) => (
              <div key={index} className="flex gap-1 items-center">
                <label>
                  <input
                    type="checkbox"
                    name={`cuisine-input-${cuisine.text}`}
                    id={`cuisine-input-${cuisine.text}`}
                    className="hidden peer"
                  />
                  <div className="filter-checkbox">
                    <BsCheckLg className="text-base text-extra" />
                  </div>
                </label>
                <p className="font-semibold">{cuisine.text}</p>
              </div>
            ))}
          </ul>
        </li>

        <li className="flex flex-col gap-2">
          <h2>Diet</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {DIET.map((diet, index) => (
              <div key={index} className="flex gap-1 items-center">
                <label>
                  <input
                    type="checkbox"
                    name={`diet-input-${diet.text}`}
                    id={`diet-input-${diet.text}`}
                    className="hidden peer"
                  />
                  <div className="filter-checkbox">
                    <BsCheckLg className="text-base text-extra" />
                  </div>
                </label>
                <p className="font-semibold">{diet.text}</p>
              </div>
            ))}
          </ul>
        </li>

        <li className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2>Sort</h2>
            <div className="flex items-center">
              <div className="flex gap-1 items-center">
                <label>
                  <input
                    type="checkbox"
                    name="course-input-sort-dir"
                    id="course-input-sort-dir"
                    className="hidden peer"
                  />
                  <div className="filter-checkbox">
                    <BsCheckLg className="text-base text-extra" />
                  </div>
                </label>
                <label htmlFor="course-input" className="font-semibold">
                  descending
                </label>
              </div>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SORT.map((sort, index) => (
              <div key={index} className="flex gap-1 items-center">
                <label>
                  <input
                    type="checkbox"
                    name={`sort-input-${sort.text}`}
                    id={`sort-input-${sort.text}`}
                    className="hidden peer"
                  />
                  <div className="filter-checkbox">
                    <BsCheckLg className="text-base text-extra" />
                  </div>
                </label>
                <p className="font-semibold">{sort.text}</p>
              </div>
            ))}
          </ul>
        </li>
      </ul>

      <button className="mt-2 mx-auto bg-extra/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out">
        <p className="font-semibold">Apply Filters</p>
      </button>
    </form>
  );
};

export default SearchFilterForm;
