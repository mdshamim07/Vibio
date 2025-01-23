import mongoose from "mongoose";
import { Schema } from "mongoose";
const notificationSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    type: {
      type: String,
      enum: ["friend_request", "message", "like", "comment", "tag", "system"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    referenceId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "typeReference",
      required: false,
    },
    typeReference: {
      type: String,
      enum: ["User", "Post", "Message"],
      required: false,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    contentRef: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "typeReference",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const notificationModel =
  mongoose.models.notifications ??
  mongoose.model("notifications", notificationSchema);
