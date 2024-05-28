import { userModel } from "@/models/users-model";
import connectMongo from "@/services/connectMongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { fname, lname, email, password } = await request.json();
  await connectMongo();
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hashedPassword,
  };
  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
