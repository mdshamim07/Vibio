import { getUser } from "@/actions";

import { dbConnect } from "@/connection/dbConnect";
import { notificationModel } from "@/models/NotificationModel";
import { RequestListModel } from "@/models/RequestListModel";

export default async function getNavCount() {
  try {
    await dbConnect();
    const user = await getUser();
    const noti = await notificationModel.find({
      referenceId: user?._id,
      isRead: false,
    });
    const requests = await RequestListModel.find({
      requestedUserId: user?._id,
      status: { $in: ["pending"] },
    });
    return {
      totalNotification: noti.length,
      totalFriendRequests: requests.length,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
