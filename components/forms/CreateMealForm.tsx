import { Ingredient, Instruction, Meal, Slot } from "@/utils/types";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
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
  const session: any = useSession();

  const isThereMeal = () => {
    const meal = meals.findIndex(
      (meal) =>
        new Date(meal.date).getDate() ===
          new Date(selectedSlot.day).getDate() &&
        meal.timeSlot === selectedSlot.timeSlot
    );

    return meal;
  };

  const mealIndex = isThereMeal();
  const [mealName, setMealName] = useState<string | undefined>(
    meals[mealIndex]?.title
  );
  const [time, setTime] = useState<string | undefined>(meals[mealIndex]?.time);
  const [mealType, setMealType] = useState<string | undefined>(
    meals[mealIndex]?.type.toString()
  );
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    meals[mealIndex]?.ingredients || []
  );
  const [instructions, setInstructions] = useState<Instruction[]>(
    meals[mealIndex]?.instructions || []
  );

  const handleAddMeal = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMealId = nanoid();
    const res = await fetch("http://localhost:3000/api/create-custom-meal", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: session.data.user.id,
        mealId: meals[mealIndex]?.mealId || newMealId,
        image: "urlimage",
        type: mealType!.split(","),
        customed: true,
        title: mealName,
        time: Number(time),
        date: new Date(selectedSlot.day),
        timeSlot: selectedSlot.timeSlot,
        ingredients: ingredients,
        instructions: instructions,
      }),
    });

    const { message, code } = await res.json();

    if (mealIndex > -1) {
      meals[mealIndex] = {
        userId: session.data.user.id,
        mealId: meals[mealIndex].mealId,
        image: "urlimage",
        type: mealType!.split(","),
        customed: true,
        title: mealName!,
        time: time!,
        date: meals[mealIndex].date,
        timeSlot: meals[mealIndex].timeSlot,
        ingredients: ingredients,
        instructions: instructions,
      };
      setMeals(meals);
    } else
      setMeals([
        ...meals,
        {
          userId: session.data.user.id,
          mealId: newMealId,
          date: new Date(selectedSlot!.day),
          timeSlot: selectedSlot!.timeSlot,
          image: "urlimage",
          type: mealType!.split(","),
          title: mealName,
          time,
          customed: true,
          ingredients,
          instructions,
        },
      ]);
    setShow(!show);
  };

  const handleDeleteIngredient = (ingredient: Ingredient) => {
    setIngredients(
      ingredients.filter(
        (prev) => prev.ingredientId !== ingredient.ingredientId
      )
    );
  };

  const handleDeleteInstruction = (instruction: Instruction) => {
    setInstructions(
      instructions.filter(
        (prev) => prev.instructionId !== instruction.instructionId
      )
    );
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
              placeholder={mealName || "meal title"}
              className="w-full"
              onChange={(e) => setMealName(e.target.value)}
            />
            <input
              type="text"
              placeholder={time || "time required in minutes"}
              className="w-full"
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="text"
              placeholder={mealType || "meal type(s) - separate with commas"}
              className="w-full"
              onChange={(e) => setMealType(e.target.value)}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-2 md:h-[276px] overflow-auto md:p-2">
          <h3 className="font-bold">Ingredients:</h3>

          {ingredients.map((ingredient, index) => (
            <div key={ingredient.ingredientId} className="flex gap-1">
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
                { ingredientId: nanoid(), name: "", amount: "0" },
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
          <div key={instruction.instructionId} className="flex gap-1">
            <input
              type="text"
              placeholder={instruction.text || "instruction"}
              className="w-full mx-auto"
              onChange={(e) => (instruction.text = e.target.value)}
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
            setInstructions([
              ...instructions,
              { instructionId: nanoid(), text: "" },
            ])
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
