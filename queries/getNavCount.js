import { getUser } from "@/actions";

import { dbConnect } from "@/connection/dbConnect";
import { notificationModel } from "@/models/NotificationModel";

export default async function getNavCount() {
  try {
    await dbConnect();
    const user = await getUser();
    const response = await notificationModel.find({ referenceId: user?._id });
    return {
      totalNotification: response.length,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
