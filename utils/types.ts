export type Slot = {
  day: string;
  timeSlot: number;
};

export type Meal = {
  id: string;
  day: Date;
  timeSlot: number;
  name: string;
  time: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
};

export type Ingredient = {
  id: string;
  name: string;
  amount: string;
  units?: string;
};

export type Instruction = {
  id: string;
  name: string;
};
