import { getUser } from "@/actions";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { notificationModel } from "@/models/NotificationModel";
import { PostModel } from "@/models/PostModel";
import { UserModel } from "@/models/UserModel";

export default async function getNotifications() {
  const user = await getUser();
  try {
    await dbConnect();
    const response = await notificationModel
      .find({ referenceId: user?._id, isRead: false })
      .populate({
        model: UserModel,
        path: "userId",
        select: ["avatar"],
      })

      .lean();
    return formateMongo(response);
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
