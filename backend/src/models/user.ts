import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    schoolEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      // match: /^[^\s@]+@[^\s@]+\.edu$/,
    },
    password: {
      type: String,
      required: true,
    },
    isDoctor: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
