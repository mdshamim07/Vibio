import mongoose, { Schema } from "mongoose";

const storySchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  audience: {
    type: String,
    required: true,
  },
  htmlContent: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  background: {
    type: String,
    required: true,
  },
});

export const StoryModel =
  mongoose.models.stories ?? mongoose.model("stories", storySchema);
