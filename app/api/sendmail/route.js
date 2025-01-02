import sendEmail from "./helpers/sendEmail";
import getResponse from "../helpers/getResponse";

export async function POST(request) {
  const { email, otp, name } = await request.json();
  try {
    const response = await sendEmail(email, otp, name);
    if (response.ok) {
      return getResponse(200, true, response.message);
    } else {
      return getResponse(404, false, response.message);
    }
  } catch (err) {
    return getResponse(500, false, err.message);
  }
}
