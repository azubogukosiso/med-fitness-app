import mongoose from "mongoose";

const patientDataSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      default: null,
    },
    age: {
      type: Number,
      default: null,
    },
    dateOfIllness: {
      type: String,
      default: null,
    },
    department: {
      type: String,
      default: null,
    },
    diabetes: {
      type: String,
      default: null,
    },
    doctorName: {
      type: String,
      default: null,
    },
    doctorReport: {
      type: Object,
      default: null,
    },
    epilepsy: {
      type: String,
      default: "no",
    },
    faculty: {
      type: String,
      default: null,
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
      default: null,
    },
    hypertension: {
      type: String,
      default: "no",
    },
    illnessDuration: {
      type: String,
      default: null,
    },
    maritalStatus: {
      type: String,
      default: null,
    },
    mentalIllness: {
      type: String,
      default: "no",
    },
    noOfChildren: {
      type: Number,
      default: null,
    },
    otherIllness: {
      type: String,
      default: null,
    },
    otherNames: {
      type: String,
      default: null,
    },
    patientEmail: {
      type: String,
      default: null,
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
      default: null,
    },
    sex: {
      type: String,
      default: null,
    },
    surname: {
      type: String,
      default: null,
    },
    tuberculosis: {
      type: String,
      default: "no",
    },
  },
  { timestamps: true }
);

export default mongoose.model("PatientData", patientDataSchema);
