import { Ingredient, Instruction, Meal, Slot } from "@/utils/types";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

type Props = {
  setMeals: Function;
  meals: Meal[];
  selectedSlot: Slot;
  setShow: Function;
  show: boolean;
};

const CreateMealForm = ({
  setMeals,
  meals,
  selectedSlot,
  setShow,
  show,
}: Props) => {
  const isThereMeal = () => {
    const meal = meals.findIndex(
      (meal) =>
        meal.day.getDate() === new Date(selectedSlot.day).getDate() &&
        meal.timeSlot === selectedSlot.timeSlot
    );

    return meal;
  };

  const mealIndex = isThereMeal();
  const [mealName, setMealName] = useState<string | undefined>(
    meals[mealIndex]?.name
  );
  const [time, setTime] = useState<string | undefined>(meals[mealIndex]?.time);
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    meals[mealIndex]?.ingredients || []
  );
  const [instructions, setInstructions] = useState<Instruction[]>(
    meals[mealIndex]?.instructions || []
  );

  const handleAddMeal = (e: React.FormEvent) => {
    e.preventDefault();

    if (mealIndex > -1) {
      meals[mealIndex] = {
        id: meals[mealIndex].id,
        name: mealName!,
        time: time!,
        day: meals[mealIndex].day,
        timeSlot: meals[mealIndex].timeSlot,
        ingredients: ingredients,
        instructions: instructions,
      };
      setMeals(meals);
    } else
      setMeals([
        ...meals,
        {
          id: nanoid(),
          day: new Date(selectedSlot!.day),
          timeSlot: selectedSlot!.timeSlot,
          name: mealName,
          time,
          ingredients,
          instructions,
        },
      ]);
    setShow(!show);
  };

  const handleDeleteIngredient = (ingredient: Ingredient) => {
    setIngredients(ingredients.filter((prev) => prev.id !== ingredient.id));
  };

  const handleDeleteInstruction = (instruction: Instruction) => {
    setInstructions(instructions.filter((prev) => prev.id !== instruction.id));
  };

  return (
    <form onSubmit={handleAddMeal} className="flex flex-col gap-2">
      <h2>{meals[mealIndex] ? "Edit a Meal" : "Create a Meal:"}</h2>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="flex justify-center md:flex-col gap-2">
          <div className="w-80 max-w-80 h-40 bg-light rounded-md"></div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder={mealName || "meal name"}
              className="w-full"
              onChange={(e) => setMealName(e.target.value)}
            />
            <input
              type="text"
              placeholder={time || "time required"}
              className="w-full"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-2 md:h-[276px] overflow-auto md:p-2">
          <h3 className="font-bold">Ingredients:</h3>

          {ingredients.map((ingredient, index) => (
            <div key={ingredient.id} className="flex gap-1">
              <input
                type="text"
                placeholder={ingredient.name || "ingredient"}
                className="flex-1"
                onChange={(e) => (ingredient.name = e.target.value)}
              />
              <input
                type="text"
                placeholder={ingredient.amount || "amount"}
                className="w-14"
                onChange={(e) => (ingredient.amount = e.target.value)}
              />
              <input
                type="text"
                placeholder={ingredient.units || "units"}
                className="w-14"
                onChange={(e) => (ingredient.units = e.target.value)}
              />

              <button
                className="bg-dark p-2 rounded-md shadow-small"
                onClick={() => handleDeleteIngredient(ingredient)}
              >
                <FaTrash className="text-red-500" />
              </button>
            </div>
          ))}

          <button
            type="button"
            className="bg-light p-2 rounded-md w-fit mx-auto"
            onClick={() =>
              setIngredients([
                ...ingredients,
                { id: nanoid(), name: "", amount: "0" },
              ])
            }
          >
            <p className="text-main font-semibold">add ingredient</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Instructions:</h2>
        {instructions.map((instruction, index) => (
          <div key={instruction.id} className="flex gap-1">
            <input
              type="text"
              placeholder={instruction.name || "instruction"}
              className="w-full mx-auto"
              onChange={(e) => (instruction.name = e.target.value)}
            />
            <button
              className="bg-dark p-2 rounded-md shadow-small"
              onClick={() => handleDeleteInstruction(instruction)}
            >
              <FaTrash className="text-red-500" />
            </button>
          </div>
        ))}

        <button
          type="button"
          className="bg-light p-2 rounded-md w-fit mx-auto"
          onClick={() =>
            setInstructions([...instructions, { id: nanoid(), name: "" }])
          }
        >
          <p className="text-main font-semibold">add instruction</p>
        </button>
      </div>
      <button
        disabled={
          meals[mealIndex] ||
          (mealName &&
            time &&
            ingredients.length > 0 &&
            instructions.length > 0)
            ? false
            : true
        }
        className="bg-extra py-3 rounded-md w-[70%] mx-auto mt-2 disabled:opacity-50"
      >
        <p>submit</p>
      </button>
    </form>
  );
};

export default CreateMealForm;
