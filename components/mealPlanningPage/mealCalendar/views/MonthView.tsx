import { Meal } from "@/utils/types";
import { handleMonthView } from "@/utils/calendarHelper";
import React from "react";

type Props = {
  selectedDate: Date;
  meals: Meal[];
};

const MonthView = ({ selectedDate, meals }: Props) => {
  const daysInMonthView = handleMonthView(selectedDate);

  const isThereMeal = (date: Date) => {
    const dayMeals = meals.filter(
      (meal) => meal.day.toDateString() === date.toDateString()
    );

    if (dayMeals.length > 0)
      return dayMeals.map((meal, index) => (
        <div
          key={index}
          className="w-1 h-1 sm:w-2 sm:h-2 rounded-3xl bg-extra"
        ></div>
      ));
    else return null;
  };

  return (
    <div className="month-view grid grid-cols-7 gap-1 h-full">
      {daysInMonthView.map((date) =>
        date.getMonth() === selectedDate.getMonth() ? (
          <div
            key={date.toISOString()}
            className="day bg-light border-2 border-dark/70"
          >
            <p className="text-main text-lg text-center">{date.getDate()}</p>

            <div className="flex justify-center flex-wrap gap-1">
              {isThereMeal(date)}
            </div>
          </div>
        ) : (
          <div
            key={date.toISOString()}
            className="day bg-light border-2 border-dark/70 opacity-70"
          >
            <p className="text-main text-lg text-center">{date.getDate()}</p>

            <div className="flex justify-center flex-wrap gap-1">
              {isThereMeal(date)}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MonthView;
