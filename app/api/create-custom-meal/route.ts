import dbConnect from "@/config/connectMongoDB";
import { CustomMeal } from "@/models/models";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    userId,
    mealId,
    image,
    type,
    customed,
    title,
    time,
    date,
    timeSlot,
    ingredients,
    instructions,
  } = await request.json();

  try {
    await dbConnect();

    const isMeal = await CustomMeal.findOne({
      userId,
      mealId,
    });

    if (!isMeal) {
      await CustomMeal.create({
        userId: userId,
        mealId: mealId,
        date: new Date(date).toDateString(),
        timeSlot: timeSlot,
        image: image,
        title: title,
        time: time,
        type: type,
        customed: customed,
        ingredients: ingredients,
        instructions: instructions,
      });
    } else {
      await CustomMeal.updateOne(
        { userId, mealId },
        {
          userId: userId,
          mealId: mealId,
          date: new Date(date).toDateString(),
          timeSlot: timeSlot,
          image: image,
          title: title,
          time: time,
          type: type,
          customed: customed,
          ingredients: ingredients,
          instructions: instructions,
        }
      );
    }

    return NextResponse.json({ message: "success", code: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "success" });
  }
}
