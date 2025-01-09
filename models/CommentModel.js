import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const CommentModel =
  mongoose.models.comments ?? mongoose.model("comments", commentSchema);
