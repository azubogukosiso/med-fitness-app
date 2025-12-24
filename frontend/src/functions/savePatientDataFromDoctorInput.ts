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

  const { signatureOfDoctor, ...otherCommentsData } = commentsFormData;

  const formData = new FormData();
  formData.append(
    "relevantExaminationFormData",
    JSON.stringify(relevantExaminationFormData)
  );
  formData.append(
    "cardiovascularSystemsFormData",
    JSON.stringify(cardiovascularSystemsFormData)
  );
  formData.append(
    "centralNervousSystemFormData",
    JSON.stringify(centralNervousSystemFormData)
  );
  formData.append(
    "respiratorySystemFormData",
    JSON.stringify(respiratorySystemFormData)
  );
  formData.append(
    "gastrointestinalTractSystemFormData",
    JSON.stringify(gastrointestinalTractSystemFormData)
  );
  formData.append(
    "gentoUrinarySystemFormData",
    JSON.stringify(gentoUrinarySystemFormData)
  );
  formData.append("commentsFormData", JSON.stringify(otherCommentsData));

  if (signatureOfDoctor) {
    formData.append("signatureOfDoctor", signatureOfDoctor);
  }

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/patient/report?id=${recordId}`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
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
    console.log("Error: ", err);
    toast.error("An error occured!", {
      description:
        "Please make sure you're connected to the internet and then try submitting your records again.",
    });
  } finally {
    setIsLoading(false);
  }
};
