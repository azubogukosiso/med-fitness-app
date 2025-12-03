// LIBRARY IMPORTS
import React from "react";

// TYPE IMPORTS
import type { PatientFormDataFromDoctorInputType } from "../types/PatientFormDataFromDoctorInputType";

export const savePatientDataFromDoctorInput = async (
  e: React.FormEvent<HTMLFormElement>,
  {
    relevantExaminationFormData,
    cardiovascularSystemsFormData,
    centralNervousSystemFormData,
    respiratorySystemFormData,
    gastrointestinalTractSystemFormData,
    gentoUrinarySystemFormData,
    commentsFormData,
  }: PatientFormDataFromDoctorInputType,
  recordId: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  setIsLoading(true);

  const formData = {
    relevantExaminationFormData,
    cardiovascularSystemsFormData,
    centralNervousSystemFormData,
    respiratorySystemFormData,
    gastrointestinalTractSystemFormData,
    gentoUrinarySystemFormData,
    commentsFormData,
  };

  try {
    const res = await fetch(
      `http://localhost:3000/api/patient/report?id=${recordId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ formData }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      console.log(data.message);
      return { success: true, message: data.message };
    }
  } catch (err) {
    console.log("Error saving data: ", err);
    return { success: false, message: err };
  } finally {
    setIsLoading(false);
  }
};
