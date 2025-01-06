import mongoose, { Schema } from "mongoose";

const friendListSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const FriendListModel =
  mongoose.models.friends ?? mongoose.model("friends", friendListSchema);
