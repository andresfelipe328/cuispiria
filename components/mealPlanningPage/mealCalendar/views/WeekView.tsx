import React, { useState } from "react";

import { Meal } from "@/utils/types";
import { handleWeekView } from "@/utils/calendarHelper";
import { FaTrash, FaCopy, FaPaste } from "react-icons/fa";
import { nanoid } from "nanoid";

type Props = {
  selectedDate: Date;
  setSelectedSlot: Function;
  setShowModal: Function;
  meals: Meal[];
  setMeals: Function;
};

const WeekView = ({
  selectedDate,
  setSelectedSlot,
  setShowModal,
  meals,
  setMeals,
}: Props) => {
  const [copyMeal, setCopyMeal] = useState<Meal | undefined>(undefined);
  const hours = Array.from({ length: 25 }, (_, i) => i);
  const daysInWeek = handleWeekView(selectedDate);

  const handleCellClick = (
    dayIndex: number,
    timeSlotIndex: number,
    daysInWeek: Date[],
    hours: number[]
  ) => {
    if (daysInWeek[dayIndex].getDate() < new Date().getDate()) {
      alert("This day has passed");
      return;
    }
    setShowModal(true);
    setSelectedSlot({
      day: daysInWeek[dayIndex].toDateString(),
      timeSlot: hours[timeSlotIndex],
    });
  };

  const handleDelete = (e: React.SyntheticEvent, selectedMeal: Meal) => {
    e.stopPropagation();
    setMeals(meals.filter((meal) => meal.id !== selectedMeal.id));
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
        name: copyMeal!.name,
        time: copyMeal!.time,
        ingredients: copyMeal!.ingredients,
        instructions: copyMeal!.instructions,
      },
    ]);
    setCopyMeal(undefined);
  };

  const isThereMeal = (day: Date, timeSlot: number) => {
    const meal = meals.find(
      (meal) =>
        meal.day.getDate() === day.getDate() && meal.timeSlot === timeSlot
    );

    return meal;
  };

  const renderMealSummary = (day: Date, timeSlot: number) => {
    const meal = isThereMeal(day, timeSlot);

    if (meal)
      return (
        <div className="absolute text-center top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center">
          <h4 className="font-semibold opacity-0 md:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
            {meal.name}
          </h4>
          <span className="point md:opacity-0 group-hover:-translate-y-3 transition-all duration-300 ease-in-out"></span>
          <div className="flex justify-around w-full">
            <button
              onClick={(e) => handleDelete(e, meal)}
              className=" top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
            >
              <FaTrash className="text-red-500" />
            </button>
            <button
              onClick={(e) => handleCopy(e, meal)}
              className=" bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
            >
              <FaCopy className="text-dark" />
            </button>
          </div>
        </div>
      );
    else if (copyMeal)
      return (
        <div className="text-center">
          <button
            onClick={(e) => handlePaste(e, day, timeSlot)}
            className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
          >
            <FaPaste className="text-dark" />
          </button>
        </div>
      );
    else return null;
  };

  return (
    <>
      <table className="custom-table w-full">
        <thead>
          <tr>
            <th></th>
            {daysInWeek.map((day, index) => (
              <th
                key={index}
                className="border-2 border-dark/80 w-16 h-8 bg-light sticky top-[145px] z-10"
              >
                <p className="text-main">{day.getDate()}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((timeSlot, timeSlotIndex) => (
            <tr key={timeSlot}>
              <th className="border-2 border-dark/70 w-16 h-32 bg-light">
                <p className="text-main">
                  {timeSlot === 0
                    ? "12 AM"
                    : timeSlot < 12
                    ? `${timeSlot} AM`
                    : timeSlot === 12
                    ? "12 PM"
                    : `${timeSlot - 12} PM`}
                </p>
              </th>
              {daysInWeek.map((day, dayIndex) => (
                <td
                  key={`${timeSlot}-${dayIndex}`}
                  className={`group relative table-cell cursor-pointer ${
                    isThereMeal(day, timeSlot) ? "bg-extra/50" : "bg-light/50"
                  } border-2 border-dark/70 hover:bg-extra/50 transition-all duration-200 ease-in-out`}
                  onClick={() =>
                    handleCellClick(dayIndex, timeSlotIndex, daysInWeek, hours)
                  }
                >
                  {renderMealSummary(day, timeSlot)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WeekView;
