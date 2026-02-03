import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    otherName: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
    },
    stateOfOrigin: {
      type: String,
    },
    lga: {
      type: String,
    },
    level: {
      type: String,
    },
    jambNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
    nin: {
      type: String,
      unique: true,
      sparse: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
    program: {
      type: String,
    },
    faculty: {
      type: String,
    },
    department: {
      type: String,
    },
    duration: {
      type: String,
    },
    totalFees: {
      type: Number,
    },
    academicSession: {
      type: String,
    },
    emailAddress: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
    },
    isDoctor: {
      type: Boolean,
      default: false,
      required: true,
    },
    regNo: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
