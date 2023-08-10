import dbConnect from "@/config/connectMongoDB";
import { CustomMeal } from "@/models/models";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, mealId } = await request.json();

  try {
    await dbConnect();

    await CustomMeal.deleteOne({ userId, mealId });

    return NextResponse.json({ message: "success", code: 200 });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
