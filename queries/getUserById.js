import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";

export default async function getUserById(userId) {
  try {
    await dbConnect();
    return await formateMongo(UserModel.findById(userId));
  } catch (err) {
    throw new Error(err);
  }
}
