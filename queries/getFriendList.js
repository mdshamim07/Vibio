import { getUser } from "@/actions";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { RequestListModel } from "@/models/RequestListModel";
import { UserModel } from "@/models/UserModel";
import { ObjectId } from "mongodb"; // Make sure to import ObjectId

export default async function getFriendList() {
  const user = await getUser();

  try {
    await dbConnect();
    const response = await UserModel.find(
      {
        active: true,
        _id: { $ne: new ObjectId(user?._id) }, // Exclude the user with this _id
      },
      {
        firstName: 1,
        lastName: 1,
        avatar: 1,
      }
    );

    return formateMongo(response);
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
