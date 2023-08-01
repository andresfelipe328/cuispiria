import React from "react";

import { BiTimeFive } from "react-icons/bi";
import { FaImage } from "react-icons/fa";

const TodayMeals = () => {
  const date = new Date();
  return (
    <div className="flex flex-col gap-2 p-4 bg-dark/5 rounded-md shadow-small">
      <h3>
        Today -{" "}
        <span className="text-light font-semibold">
          {date.toISOString().slice(0, 10)}
        </span>
      </h3>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-main p-4 rounded-md shadow-small flex flex-col gap-4">
          <h3>breakfast</h3>

          <div className="relative w-full mx-auto max-w-[450px] h-40 bg-light/70 rounded-lg flex items-center justify-center group-hover/container:shadow-medium transition-all duration-200">
            <FaImage className="text-6xl text-dark group-hover/container:scale-110 transition-all duration-200 ease-in-out" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Recipe Name</p>
            <div className="flex items-center gap-2">
              <BiTimeFive className="icon text-extra" />
              <small>25 min</small>
            </div>
          </div>

          <ul className="grid grid-cols-4 gap-2 text-center">
            <li>
              <p>ingredient 1</p>
            </li>
            <li>
              <p>ingredient 2</p>
            </li>
            <li>
              <p>ingredient 3</p>
            </li>
            <li>
              <p>ingredient 4</p>
            </li>
            <li>
              <p>ingredient 5</p>
            </li>
            <li>
              <p>ingredient 6</p>
            </li>
            <li>
              <p>ingredient 7</p>
            </li>
            <li>
              <p>ingredient 8</p>
            </li>
            <li>
              <p>ingredient 9</p>
            </li>
            <li>
              <p>ingredient 10</p>
            </li>
          </ul>

          <div className="flex items-center justify-around gap-2">
            <button className="mx-auto bg-extra/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out">
              <p className="font-semibold">Edit</p>
            </button>
            <button className="group mx-auto bg-red-500/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-red-500 hover:shadow-medium transition-all duration-200 ease-in-out">
              <p className="font-semibold group-hover:text-main">Delete</p>
            </button>
          </div>
        </div>
        <div className="bg-main p-4 rounded-md shadow-small flex flex-col gap-4">
          <h3>Lunch</h3>

          <div className="relative w-full mx-auto max-w-[450px] h-40 bg-light/70 rounded-lg flex items-center justify-center group-hover/container:shadow-medium transition-all duration-200">
            <FaImage className="text-6xl text-dark group-hover/container:scale-110 transition-all duration-200 ease-in-out" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Recipe Name</p>
            <div className="flex items-center gap-2">
              <BiTimeFive className="icon text-extra" />
              <small>25 min</small>
            </div>
          </div>

          <ul className="grid grid-cols-4 gap-2 text-center">
            <li>
              <p>ingredient 1</p>
            </li>
            <li>
              <p>ingredient 2</p>
            </li>
            <li>
              <p>ingredient 3</p>
            </li>
            <li>
              <p>ingredient 4</p>
            </li>
            <li>
              <p>ingredient 5</p>
            </li>
            <li>
              <p>ingredient 6</p>
            </li>
            <li>
              <p>ingredient 7</p>
            </li>
            <li>
              <p>ingredient 8</p>
            </li>
            <li>
              <p>ingredient 9</p>
            </li>
            <li>
              <p>ingredient 10</p>
            </li>
          </ul>

          <div className="flex items-center justify-around gap-2">
            <button className="mx-auto bg-extra/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out">
              <p className="font-semibold">Edit</p>
            </button>
            <button className="group mx-auto bg-red-500/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-red-500 hover:shadow-medium transition-all duration-200 ease-in-out">
              <p className="font-semibold group-hover:text-main">Delete</p>
            </button>
          </div>
        </div>
        <div className="bg-main p-4 rounded-md shadow-small flex flex-col gap-4">
          <h3>Dinner</h3>

          <div className="relative w-full mx-auto max-w-[450px] h-40 bg-light/70 rounded-lg flex items-center justify-center group-hover/container:shadow-medium transition-all duration-200">
            <FaImage className="text-6xl text-dark group-hover/container:scale-110 transition-all duration-200 ease-in-out" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Recipe Name</p>
            <div className="flex items-center gap-2">
              <BiTimeFive className="icon text-extra" />
              <small>25 min</small>
            </div>
          </div>

          <ul className="grid grid-cols-4 gap-2 text-center">
            <li>
              <p>ingredient 1</p>
            </li>
            <li>
              <p>ingredient 2</p>
            </li>
            <li>
              <p>ingredient 3</p>
            </li>
            <li>
              <p>ingredient 4</p>
            </li>
            <li>
              <p>ingredient 5</p>
            </li>
            <li>
              <p>ingredient 6</p>
            </li>
            <li>
              <p>ingredient 7</p>
            </li>
            <li>
              <p>ingredient 8</p>
            </li>
            <li>
              <p>ingredient 9</p>
            </li>
            <li>
              <p>ingredient 10</p>
            </li>
          </ul>

          <div className="flex items-center justify-around gap-2">
            <button className="mx-auto bg-extra/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-extra hover:shadow-medium transition-all duration-200 ease-in-out">
              <p className="font-semibold">Edit</p>
            </button>
            <button className="group mx-auto bg-red-500/50 w-fit px-10 py-2 rounded-md border-2 border-extra hover:bg-red-500 hover:shadow-medium transition-all duration-200 ease-in-out">
              <p className="font-semibold group-hover:text-main">Delete</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayMeals;
