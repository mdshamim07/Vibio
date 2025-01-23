import { dbConnect } from "@/connection/dbConnect";
import { notificationModel } from "@/models/NotificationModel";

export default async function addNewNotification(
  userId,
  type,
  content,
  typeReference,
  contentRef,
  referenceId
) {
  try {
    await dbConnect();
    const newNotification = {
      userId: userId, // Owner of the post
      type: type,
      content: content,
      referenceId,
      typeReference,
      contentRef,
    };

    await notificationModel.create(newNotification);
    return {
      ok: true,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
