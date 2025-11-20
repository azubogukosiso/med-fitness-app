import type { RelevantExaminationFormDataType } from "./RelevantExaminationFormDataType";
import type { CardiovascularSystemsFormDataType } from "./CardiovascularSystemsFormDataType";
import type { CentralNervousSystemFormDataType } from "./CentralNervousSystemFormDataType";
import type { RespiratorySystemFormDataType } from "./RespiratorySystemFormDataType";
import type { GastrointestinalTractSystemFormDataType } from "./GastrointestinalTractSystemFormDataType";
import type { GentoUrinarySystemFormDataType } from "./GentoUrinarySystemFormDataType";
import type { CommentsFormDataType } from "./CommentsFormDataType";

export type PatientFormDataFromDoctorInputType = {
  relevantExaminationFormData: RelevantExaminationFormDataType;
  cardiovascularSystemsFormData: CardiovascularSystemsFormDataType;
  centralNervousSystemFormData: CentralNervousSystemFormDataType;
  respiratorySystemFormData: RespiratorySystemFormDataType;
  gastrointestinalTractSystemFormData: GastrointestinalTractSystemFormDataType;
  gentoUrinarySystemFormData: GentoUrinarySystemFormDataType;
  commentsFormData: CommentsFormDataType;
};
