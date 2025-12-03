// LIBRARY IMPORTS
import { toast } from "sonner";

// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../types/PatientFormDataFromPatientInputType";

export const savePatientDataFromPatientInput = async (
  e: React.FormEvent<HTMLFormElement>,
  formData: PatientFormDataFromPatientInputType,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  setIsLoading(true);

  const personalDataFields = [
    formData.surname,
    formData.faculty,
    formData.maritalStatus,
    formData.age,
    formData.otherNames,
    formData.department,
    formData.noOfChildren,
    formData.sex,
  ];

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

  const hasEmptyPersonalDataField = personalDataFields.some(
    (field) => field === undefined || field === ""
  );

  const hasMedicalHistory = medicalHistoryFields.some(
    (field) => field === undefined
  );

  if (hasEmptyPersonalDataField) {
    toast.error("Missing fields!", {
      description: "You must fill up the 'Personal Data' section",
    });
    return;
  }

  if (hasMedicalHistory) {
    toast.error("Missing fields!", {
      description:
        "You must fill up the first part of the 'Previous Health' section",
    });
    return;
  }

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/patient/record`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ formData }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
    }
  } catch (err) {
    console.log("Error: ", err);
    toast.error("An error occured!", {
      description:
        "Please make sure you're connected to the internet and then try submitting your records again.",
    });
  } finally {
    setIsLoading(false);
  }
};
