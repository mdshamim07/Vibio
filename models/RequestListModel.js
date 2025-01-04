import mongoose, { Schema } from "mongoose";

const requestListSchema = new mongoose.Schema({
  requestedUserId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  senderId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const RequestListModel =
  mongoose.models.requests ?? mongoose.model("requests", requestListSchema);
