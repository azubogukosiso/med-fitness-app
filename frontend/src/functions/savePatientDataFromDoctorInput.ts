// LIBRARY IMPORTS
import { toast } from "sonner";

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
      `${import.meta.env.VITE_API_URL}/api/patient/report?id=${recordId}`,
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
