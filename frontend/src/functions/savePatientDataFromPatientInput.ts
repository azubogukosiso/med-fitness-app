// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../types/PatientFormDataFromPatientInputType";

export const savePatientDataFromPatientInput = async (
  e: React.FormEvent<HTMLFormElement>,
  formData: PatientFormDataFromPatientInputType,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
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

  try {
    const res = await fetch("http://localhost:3000/api/patient/record", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ formData }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Here we are: ", data.message);
    }
  } catch (err) {
    console.log("Error creating record: ", err);
  } finally {
    setIsLoading(false);
  }
};
