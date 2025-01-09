import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    requried: true,
  },
  audience: {
    type: String,
    required: true,
  },
  htmlContent: {
    type: String,
    required: false,
  },
  postImages: {
    type: Array,
    requried: false,
  },
  postVideos: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postId: {
    type: String,
    required: true,
  },
});

export const PostModel =
  mongoose.models.posts ?? mongoose.model("posts", postSchema);
