// TYPE IMPORTS
import type { PatientFormDataForDoctorType } from "../types/PatientFormDataForDoctorType";

export const savePatientDataForDoctor = (
  e: React.FormEvent<HTMLFormElement>,
  {
    relevantExaminationFormData,
    cardiovascularSystemsFormData,
    centralNervousSystemFormData,
    respiratorySystemFormData,
    gastrointestinalTractSystemFormData,
    gentoUrinarySystemFormData,
    commentsFormData,
  }: PatientFormDataForDoctorType
) => {
  e.preventDefault();

  const formData = {
    relevantExaminationFormData,
    cardiovascularSystemsFormData,
    centralNervousSystemFormData,
    respiratorySystemFormData,
    gastrointestinalTractSystemFormData,
    gentoUrinarySystemFormData,
    commentsFormData,
  };

  console.log(formData);
};
