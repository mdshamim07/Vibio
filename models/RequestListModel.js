import mongoose, { Schema } from "mongoose";

const requestListSchema = new mongoose.Schema({
  requestedUserId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  recipient: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
});

export const RequestListModel =
  mongoose.models.requests ?? mongoose.model("requests", requestListSchema);
