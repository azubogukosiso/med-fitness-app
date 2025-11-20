import mongoose from "mongoose";

const patientDataSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      default: undefined,
    },
    age: {
      type: Number,
      default: undefined,
    },
    dateOfIllness: {
      type: String,
      default: undefined,
    },
    department: {
      type: String,
      default: undefined,
    },
    diabetes: {
      type: String,
      default: undefined,
    },
    doctorName: {
      type: String,
      default: undefined,
    },
    epilepsy: {
      type: String,
      default: "no",
    },
    faculty: {
      type: String,
      default: undefined,
    },
    gonorrheaOrSyphilis: {
      type: String,
      default: "no",
    },
    heartDisease: {
      type: String,
      default: "no",
    },
    heatInHeadOrBody: {
      type: String,
      default: "no",
    },
    hospital: {
      type: String,
      default: undefined,
    },
    hypertension: {
      type: String,
      default: "no",
    },
    illnessDuration: {
      type: String,
      default: undefined,
    },
    maritalStatus: {
      type: String,
      default: undefined,
    },
    mentalIllness: {
      type: String,
      default: "no",
    },
    noOfChildren: {
      type: String,
      default: undefined,
    },
    otherIllness: {
      type: String,
      default: undefined,
    },
    otherNames: {
      type: String,
      default: undefined,
    },
    patientEmail: {
      type: String,
      default: undefined,
    },
    pepticUlcer: {
      type: String,
      default: "no",
    },
    piles: {
      type: String,
      default: "no",
    },
    schoolEmail: {
      type: String,
      default: undefined,
    },
    sex: {
      type: String,
      default: undefined,
    },
    surname: {
      type: String,
      default: undefined,
    },
    tuberculosis: {
      type: String,
      default: "no",
    },
  },
  { timestamps: true }
);

export default mongoose.model("PatientData", patientDataSchema);
