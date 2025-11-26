// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../types/PatientFormDataFromPatientInputType";

export type ExtendedPatientRecords = PatientFormDataFromPatientInputType & {
  _id: string;
};
