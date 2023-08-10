import { ObjectId } from "mongodb";

import dbConnect from "@/config/connectMongoDB";
import { CustomMeal, Meal, Preferences } from "@/models/models";
import { TodayMeal } from "./types";

const arePreferencesSet = async (session: any) => {
  try {
    if (session) {
      await dbConnect();

      const preferences = await Preferences.findOne({
        userId: new ObjectId(session.user.id),
      });

      return preferences ? true : false;
    }
  } catch (err) {
    console.log("Preferences: ", err);
  }
};

const areMealsToday = async (session: any, date: Date) => {
  try {
    let todayMeals: TodayMeal[] = [];
    if (session) {
      await dbConnect();

      const meals = await Meal.find({
        userId: session.user.id,
        date: date.toDateString(),
      });

      meals.forEach((meal) =>
        todayMeals.push({
          id: meal._id,
          date: meal.date,
          timeSlot: meal.timeSlot,
          mealId: meal.mealId,
          image: meal.image,
          title: meal.title,
          time: meal.time,
          type: meal.type,
          customed: meal.customed,
        })
      );

      const customMeals = await CustomMeal.find({
        userId: session.user.id,
        date: date.toDateString(),
      });

      customMeals.forEach((meal) =>
        todayMeals.push({
          id: meal._id,
          date: meal.date,
          timeSlot: meal.timeSlot,
          mealId: meal.mealId,
          image: meal.image,
          title: meal.title,
          time: meal.time,
          type: meal.type,
          customed: meal.customed,
        })
      );
    }

    return todayMeals;
  } catch (err) {
    console.log("TodayMealss: ", err);
  }
};

const getAllMeals = async (session: any) => {
  await dbConnect();

  try {
    const meals = await CustomMeal.find({
      userId: session.user.id,
    });

    return meals;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { arePreferencesSet, areMealsToday, getAllMeals };
