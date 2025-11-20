// FUNCTION OR COMPONENT IMPORTS
import { savePatientDataRequest } from "./savePatientDataRequest";

// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../../types/PatientFormDataFromPatientInputType";

export const savePatientDataFromPatientInput = async (
  e: React.FormEvent<HTMLFormElement>,
  formData: PatientFormDataFromPatientInputType
) => {
  e.preventDefault();

  const medicalHistoryFields = [
    formData.heatInHeadOrBody,
    formData.epilepsy,
    formData.hypertension,
    formData.mentalIllness,
    formData.tuberculosis,
    formData.heartDisease,
    formData.gonorrheaOrSyphilis,
    formData.pepticUlcer,
    formData.piles,
    formData.diabetes,
  ];

  const otherIllnessFields = [
    formData.otherIllness,
    formData.dateOfIllness,
    formData.illnessDuration,
    formData.hospital,
    formData.doctorName,
    formData.address,
  ];

  const hasMedicalHistory = medicalHistoryFields.some((field) => field !== "");
  const hasOtherIllness = otherIllnessFields.some((field) => field !== "");

  if (!hasMedicalHistory && !hasOtherIllness) {
    console.log("You must fill up either section!");
    return;
  }

  await savePatientDataRequest(formData);
};
