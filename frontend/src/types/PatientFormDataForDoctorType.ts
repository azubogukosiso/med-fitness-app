import type { RelevantExaminationFormDataType } from "../types/RelevantExaminationFormDataType";
import type { CardiovascularSystemsFormDataType } from "../types/CardiovascularSystemsFormDataType";
import type { CentralNervousSystemFormDataType } from "../types/CentralNervousSystemFormDataType";
import type { RespiratorySystemFormDataType } from "../types/RespiratorySystemFormDataType";
import type { GastrointestinalTractSystemFormDataType } from "../types/GastrointestinalTractSystemFormDataType";
import type { GentoUrinarySystemFormDataType } from "../types/GentoUrinarySystemFormDataType";
import type { CommentsFormDataType } from "../types/CommentsFormDataType";

export type PatientFormDataForDoctorType = {
  relevantExaminationFormData: RelevantExaminationFormDataType;
  cardiovascularSystemsFormData: CardiovascularSystemsFormDataType;
  centralNervousSystemFormData: CentralNervousSystemFormDataType;
  respiratorySystemFormData: RespiratorySystemFormDataType;
  gastrointestinalTractSystemFormData: GastrointestinalTractSystemFormDataType;
  gentoUrinarySystemFormData: GentoUrinarySystemFormDataType;
  commentsFormData: CommentsFormDataType;
};
