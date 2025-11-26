// TYPE IMPORTS
import type { PatientFormDataFromDoctorInputType } from "../../types/PatientFormDataFromDoctorInputType";

export const savePatientDataRequest = async (
  formData: PatientFormDataFromDoctorInputType,
  recordId: string
) => {
  console.log("this is the id: ", recordId);
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
    return { success: true };
  }
  return { success: false, message: data.message };
};
