"use server";

import { dbConnect } from "@/connection/dbConnect";
import { notificationModel } from "@/models/NotificationModel";
import { revalidatePath } from "next/cache";

export default async function readNotificationAction(notificationId) {
  try {
    await dbConnect();

    const updateNotification = await notificationModel.updateOne(
      { _id: notificationId },
      {
        isRead: true,
      }
    );
    if (updateNotification.modifiedCount > 0) {
      return {
        ok: true,
      };
      revalidatePath("/");
    }
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
