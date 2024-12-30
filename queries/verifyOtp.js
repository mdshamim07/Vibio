import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";

export default async function verifyOtpQuery(userId, otpValue) {
  try {
    await dbConnect();
    const response = await UserModel.findById(userId).select(["active", "otp"]);
    if (response) {
      if (response?.active) {
        return {
          ok: "validuser",
          message: "This user is valid user!",
          user: userId,
        };
      } else {
        if (response.otp === parseInt(otpValue)) {
          const verifyOtp = await UserModel.updateOne(
            {
              _id: userId,
            },
            { otp: parseInt(otpValue), active: true }
          );
          return {
            ok: true,
            message: "Otp Verified!",
            user: userId,
          };
        } else {
          return {
            ok: false,
            message: "Invalid otp !",
          };
        }
      }
    } else {
      return {
        ok: false,
        message: "No user found with this id!",
      };
    }
  } catch (err) {
    throw new Error(err);
  }
}
