"use server";

import loginQuery from "@/queries/loginQuery";
import { cookies } from "next/headers";

export default async function loginAction(formData) {
  const cookieStore = await cookies();
  try {
    const response = await loginQuery(formData);
    console.log(response);
    if (response.ok) {
      cookieStore.set("user", response?.data?.id);

      return response;
    } else {
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
}
