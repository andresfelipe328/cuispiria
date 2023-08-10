import { Meal, Slot } from "@/utils/types";
import React, { useState } from "react";
import CreateMealForm from "@/components/forms/CreateMealForm";
import { FaTimes } from "react-icons/fa";

type Props = {
  meals: Meal[];
  selectedSlot: Slot;
  show: boolean;
  setShow: Function;
  setMeals: Function;
};

const CreateMealModal = ({
  meals,
  selectedSlot,
  show,
  setShow,
  setMeals,
}: Props) => {
  const dayMeals = meals.filter(
    (meal) =>
      new Date(meal.date).getDate() === new Date(selectedSlot!.day).getDate() &&
      meal.timeSlot === selectedSlot!.timeSlot
  );

  const renderTime = () => {
    const timeSlot = selectedSlot.timeSlot;
    return timeSlot === 0
      ? "12 AM"
      : timeSlot < 12
      ? `${timeSlot} AM`
      : timeSlot === 12
      ? "12 PM"
      : `${timeSlot - 12} PM`;
  };

  return (
    <div className="absolute w-full h-full p-2 top-0 left-0 flex items-center justify-center bg-dark/30 backdrop-blur-[2px] z-50">
      <div className="relative bg-main p-4 w-full md:w-fit h-full md:h-1/2 overflow-auto">
        <h1>
          {selectedSlot!.day} - {renderTime()}
        </h1>
        <button
          onClick={() => setShow(!show)}
          className="group absolute top-4 right-4"
        >
          <FaTimes className="text-dark group-hover:scale-105 group-hover:rotate-180 transition-all duration-200 ease-in-out" />
        </button>

        <CreateMealForm
          meals={meals}
          setMeals={setMeals}
          setShow={setShow}
          show={show}
          selectedSlot={selectedSlot}
        />
      </div>
    </div>
  );
};

export default CreateMealModal;
