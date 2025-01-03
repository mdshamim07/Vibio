import mongoose, { Schema } from "mongoose";

const requestListSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const RequestListModel =
  mongoose.models.users ?? mongoose.model("requests", requestListSchema);
