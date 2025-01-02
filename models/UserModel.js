import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
    default: "",
  },
  about: {
    work: {
      type: String,
      default: "",
    },
    education: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    skills: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
  },
  otp: {
    type: Number,
    required: true,
  },

  active: {
    type: Boolean,
    default: false,
  },
});

export const UserModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
