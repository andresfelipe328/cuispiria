import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  userId: String,
  date: String,
  timeSlot: Number,
  mealId: Number,
  image: String,
  title: String,
  time: Number,
  type: [String],
  customed: Boolean,
  rating: Number,
});

const customMealSchema = new mongoose.Schema({
  userId: String,
  date: String,
  timeSlot: Number,
  mealId: String,
  image: String,
  title: String,
  time: Number,
  type: [String],
  customed: Boolean,
  ingredients: [
    {
      ingredeitnId: String,
      name: String,
      amount: String,
      units: String,
    },
  ],
  instructions: [{ instructionId: String, text: String }],
});

const preferencesSchema = new mongoose.Schema({
  userId: String,
  list: [String],
});

const Meal = mongoose.models.meal || mongoose.model("meal", mealSchema);

const CustomMeal =
  mongoose.models.customMeal || mongoose.model("customMeal", customMealSchema);

const Preferences =
  mongoose.models.preferences ||
  mongoose.model("preferences", preferencesSchema);

export { Meal, CustomMeal, Preferences };
