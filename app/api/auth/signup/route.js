import { dbConnect } from "@/connection/dbConnect";
import { NextResponse } from "next/server";
import hashedPassword from "./helpers/hashedPassword";
import { UserModel } from "@/models/UserModel";
import getResponse from "../../helpers/getResponse";
import formateMongo from "../../helpers/formateMongo";
import generateOtp from "@/utils/generateOtp";
export async function POST(request) {
  const { firstName, lastName, email, password, gender, dateOfBirth } =
    await request.json();
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      gender.trim().length === 0 ||
      dateOfBirth.trim().length === 0
    ) {
      return getResponse(401, false, "All Field is required!");
    } else if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          status: 401,
          message: "Invalid email!",
        },
        { status: 401 }
      );
    } else if (password.trim().length < 6) {
      return getResponse(
        401,
        false,
        "Password should be greather than 6 character"
      );
    }
    const hashedPass = await hashedPassword(password.trim());

    const newUser = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: hashedPass,
      gender: gender.trim(),
      otp: generateOtp(),
      dateOfBirth: dateOfBirth.trim(),
    };
    await dbConnect();
    const createUser = await UserModel.create(newUser);
    const parshedUser = formateMongo(createUser);
    delete parshedUser.password;
    if (createUser) {
      return getResponse(200, true, "User Created Successfully!", {
        firstName: parshedUser.firstName,
        lastName: parshedUser.lastName,
        email: parshedUser.email,
        id: parshedUser?._id,
      });
    }
  } catch (err) {
    if (err?.code === 11000) {
      return getResponse(401, false, "This email address already exist!");
    }
    return getResponse(
      500,
      false,
      "Internal server error please try again later!"
    );
  }
}
