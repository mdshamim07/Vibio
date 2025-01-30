import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    text: {
      type: String,
      trim: true,
    },
    media: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["sent", "delivered", "seen"],
      default: "sent",
    },
    // deletedBy: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export const chatModel =
  mongoose.models.chats ?? mongoose.model("chats", messageSchema);
