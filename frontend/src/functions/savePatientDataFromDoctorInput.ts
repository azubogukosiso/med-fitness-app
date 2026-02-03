// LIBRARY IMPORTS
import { toast } from "sonner";

// TYPE IMPORTS
import type { PatientFormDataFromDoctorInputType } from "../types/PatientFormDataFromDoctorInputType";

export const savePatientDataFromDoctorInput = async (
  e: React.SubmitEvent<HTMLFormElement>,
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
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  e.preventDefault();

  setIsLoading(true);

  const payload = {
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
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
    } else {
      toast.error("An error occured!", {
        description: "An error occured on the server. Please try again later.",
      });
    }
  } catch (err) {
    toast.error("An error occured!", {
      description:
        "Please make sure you're connected to the internet and then try submitting your records again.",
    });
  } finally {
    setIsLoading(false);
  }
};
