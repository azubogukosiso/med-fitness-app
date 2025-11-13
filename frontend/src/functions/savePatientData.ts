// TYPE IMPORTS
import type { PatientFormDataType } from "../types/PatientFormDataType";

export const savePatientData = (
  e: React.FormEvent<HTMLFormElement>,
  formData: PatientFormDataType
) => {
  e.preventDefault();

  console.log(formData);

  if (
    formData.heatInHeadOrBody === "" ||
    formData.epilepsy === "" ||
    formData.hypertension === "" ||
    formData.mentalIllness === "" ||
    formData.tuberculosis === "" ||
    formData.heartDisease === "" ||
    formData.gonorrheaOrSyphilis === "" ||
    formData.pepticUlcer === "" ||
    formData.piles === "" ||
    formData.diabetes === ""
  ) {
    if (
      formData.otherIllness === "" ||
      formData.dateOfIllness === "" ||
      formData.illnessDuration === "" ||
      formData.hospital === "" ||
      formData.doctorName === "" ||
      formData.address === ""
    ) {
      console.log("You must fill up either section!");
    } else {
      console.log("Second section is filled up!");
    }
  } else {
    console.log("All sections are filled up!");
  }
};
