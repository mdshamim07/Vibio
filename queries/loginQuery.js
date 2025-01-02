import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";
import comparePassword from "@/utils/comparePassword";

export default async function loginQuery(formData) {
  try {
    await dbConnect();

    const userInfo = await UserModel.find({ email: formData?.email.trim() });
    const parsedUserInfo = userInfo.length > 0 && formateMongo(userInfo[0]);

    if (userInfo.length === 0) {
      return {
        ok: false,
        message: "Invalid email address!",
      };
    } else {
      const isMatchPass = await comparePassword(
        formData?.password.trim(),
        userInfo[0]?.password
      );
      if (!isMatchPass) {
        return {
          ok: false,
          message: "Invalid password!",
        };
      } else {
        return {
          ok: true,
          message: "Login successfull!",
          data: {
            id: parsedUserInfo?._id,
          },
        };
      }
    }
  } catch (err) {
    return {
      error: true,
      ok: false,
      message: err.message,
    };
  }
}
