import React, { useState } from "react";

import { FaTrash, FaCopy, FaPaste } from "react-icons/fa";
import { Meal } from "@/utils/types";
import { nanoid } from "nanoid";

type Props = {
  selectedDate: Date;
  setSelectedSlot: Function;
  setShowModal: Function;
  meals: Meal[];
  setMeals: Function;
};

const DayView = ({
  meals,
  setMeals,
  selectedDate,
  setShowModal,
  setSelectedSlot,
}: Props) => {
  const hours = Array.from({ length: 25 }, (_, i) => i);
  const [copyMeal, setCopyMeal] = useState<Meal | undefined>(undefined);

  const isThereMeal = (day: Date, timeSlot: number) => {
    return meals.find(
      (meal) =>
        new Date(meal.date).getDate() === day.getDate() &&
        meal.timeSlot === timeSlot
    );
  };

  const handleDelete = (e: React.SyntheticEvent, selectedMeal: Meal) => {
    e.stopPropagation();
    setMeals(meals.filter((meal) => meal.mealId !== selectedMeal.mealId));
  };

  const handleCopy = (e: React.SyntheticEvent, selectedMeal: Meal) => {
    e.stopPropagation();
    setCopyMeal(selectedMeal);
  };

  const handlePaste = (
    e: React.SyntheticEvent,
    day: Date,
    timeSlot: number
  ) => {
    e.stopPropagation();
    setMeals([
      ...meals,
      {
        id: nanoid(),
        day: day,
        timeSlot: timeSlot,
        name: copyMeal!.title,
        time: copyMeal!.time,
        ingredients: copyMeal!.ingredients,
        instructions: copyMeal!.instructions,
      },
    ]);
    setCopyMeal(undefined);
  };

  const handleCellClick = (timeSlotIndex: number) => {
    if (selectedDate.getDate() < new Date().getDate()) {
      alert("This day has passed");
      return;
    }
    setShowModal(true);
    setSelectedSlot({
      day: selectedDate.toDateString(),
      timeSlot: hours[timeSlotIndex],
    });
  };

  const renderMealSummary = (day: Date, timeSlot: number) => {
    const meal = isThereMeal(day, timeSlot);

    if (meal)
      return (
        <>
          <button
            onClick={(e) => handleDelete(e, meal)}
            className=" top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
          >
            <FaTrash className="text-red-500" />
          </button>
          <h4 className="font-semibold">{meal.title}</h4>
          <button
            onClick={(e) => handleCopy(e, meal)}
            className=" bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
          >
            <FaCopy className="text-dark" />
          </button>
        </>
      );
    else if (copyMeal)
      return (
        <>
          <button
            onClick={(e) => handlePaste(e, day, timeSlot)}
            className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
          >
            <FaPaste className="text-dark" />
          </button>
        </>
      );
    else return null;
  };

  return (
    <div className="day-view flex flex-col gap-1">
      {hours.map((timeSlot, index) => (
        <div
          onClick={() => handleCellClick(timeSlot)}
          className={`relative group flex cursor-pointer ${
            isThereMeal(selectedDate, timeSlot) ? "bg-extra/50" : "bg-light/50"
          } border-2 border-dark/70 hover:bg-extra/50 transition-all duration-200 ease-in-out`}
          key={index}
        >
          <p className="w-16 py-2 h-14 bg-light text-main text-center">
            {timeSlot === 0
              ? "12 AM"
              : timeSlot < 12
              ? `${timeSlot} AM`
              : timeSlot === 12
              ? "12 PM"
              : `${timeSlot - 12} PM`}
          </p>
          <div className="flex-1 flex gap-4 items-center justify-center">
            {renderMealSummary(selectedDate, timeSlot)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayView;
