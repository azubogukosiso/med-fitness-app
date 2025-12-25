// LIBRARY IMPORTS
import { toast } from "sonner";

// TYPE IMPORTS
import type { PatientFormDataFromDoctorInputType } from "../types/PatientFormDataFromDoctorInputType";

export const editPatientDataFromDoctorInput = async (
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

  const formData = new FormData();

  if (commentsFormData.signatureOfDoctor instanceof File) {
    const { signatureOfDoctor, ...otherCommentsData } = commentsFormData;

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

    console.log(
      `${import.meta.env.VITE_API_URL}/api/patient/new?id=${recordId}`
    );

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/patient/new?id=${recordId}`,
        {
          method: "PATCH",
          credentials: "include",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
      } else {
        console.log("over here: ", data);
        toast.error("An error occured!", {
          description:
            "An error occured on the server. Please try again later.",
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
  } else {
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
    formData.append("commentsFormData", JSON.stringify(commentsFormData));

    console.log(
      `${import.meta.env.VITE_API_URL}/api/patient/old?id=${recordId}`
    );

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/patient/old?id=${recordId}`,
        {
          method: "PATCH",
          credentials: "include",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
      } else {
        console.log("over here: ", data);
        toast.error("An error occured!", {
          description:
            "An error occured on the server. Please try again later.",
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
  }
};
