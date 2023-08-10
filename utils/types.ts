export type Slot = {
  day: string;
  timeSlot: number;
};

export type Meal = {
  userId: string;
  date: string;
  timeSlot: number;
  mealId: string;
  image: string;
  title: string;
  time: string;
  type: string[];
  customed: boolean;
  ingredients: Ingredient[];
  instructions: Instruction[];
};

export type Ingredient = {
  ingredientId: string;
  name: string;
  amount: string;
  units?: string;
};

export type TodayMeal = {
  id: string;
  date: string;
  timeSlot: number;
  mealId: number;
  image: string;
  title: string;
  time: number;
  type: String[];
  customed: boolean;
};

export type Instruction = {
  instructionId: string;
  text: string;
};
