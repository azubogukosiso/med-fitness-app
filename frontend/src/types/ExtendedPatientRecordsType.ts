// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../types/PatientFormDataFromPatientInputType";
import type { GastrointestinalTractSystemFormDataType } from "./GastrointestinalTractSystemFormDataType";
import type { GentoUrinarySystemFormDataType } from "./GentoUrinarySystemFormDataType";
import type { CommentsFormDataType } from "./CommentsFormDataType";
import type { RelevantExaminationFormDataType } from "./RelevantExaminationFormDataType";
import type { CardiovascularSystemsFormDataType } from "./CardiovascularSystemsFormDataType";
import type { CentralNervousSystemFormDataType } from "./CentralNervousSystemFormDataType";
import type { RespiratorySystemFormDataType } from "./RespiratorySystemFormDataType";

export type ExtendedPatientRecords = PatientFormDataFromPatientInputType & {
  _id: string;
  doctorReport?: {
    gastrointestinalTractSystemFormData: GastrointestinalTractSystemFormDataType;
    gentoUrinarySystemFormData: GentoUrinarySystemFormDataType;
    commentsFormData: CommentsFormDataType;
    relevantExaminationFormData: RelevantExaminationFormDataType;
    cardiovascularSystemsFormData: CardiovascularSystemsFormDataType;
    centralNervousSystemFormData: CentralNervousSystemFormDataType;
    respiratorySystemFormData: RespiratorySystemFormDataType;
  };
};
