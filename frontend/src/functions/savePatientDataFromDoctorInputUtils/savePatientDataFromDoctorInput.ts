// TYPE IMPORTS
import type { PatientFormDataFromDoctorInputType } from "../../types/PatientFormDataFromDoctorInputType";

// FUNCTION IMPORTS
import { savePatientDataRequest } from "./savePatientDataRequest";

export const savePatientDataFromDoctorInput = (
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
  recordId: string
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

  savePatientDataRequest(formData, recordId);
};
