// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../../types/PatientFormDataFromPatientInputType";

export const savePatientDataRequest = async (
  formData: PatientFormDataFromPatientInputType
) => {
  const res = await fetch("http://localhost:3000/api/patient/record", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ formData }),
  });

  const data = await res.json();

  if (res.ok) {
    console.log(data.message);
    return { success: true };
  }
  return { success: false, message: data.message };
};
