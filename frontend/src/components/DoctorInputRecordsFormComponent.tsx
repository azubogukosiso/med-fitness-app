// LIBRARY IMPORTS
import { useState } from "react";

// TYPE IMPORTS
import type { RelevantExaminationFormDataType } from "../types/RelevantExaminationFormDataType";
import type { CardiovascularSystemsFormDataType } from "../types/CardiovascularSystemsFormDataType";
import type { CentralNervousSystemFormDataType } from "../types/CentralNervousSystemFormDataType";
import type { RespiratorySystemFormDataType } from "../types/RespiratorySystemFormDataType";
import type { GastrointestinalTractSystemFormDataType } from "../types/GastrointestinalTractSystemFormDataType";
import type { GentoUrinarySystemFormDataType } from "../types/GentoUrinarySystemFormDataType";
import type { CommentsFormDataType } from "../types/CommentsFormDataType";

// FUNCTION (OR COMPONENT) IMPORTS
import RelevantExaminationComponent from "./DoctorInputFormComponentSections/RelevantExaminationComponent";
import CardiovascularSystemsComponent from "./DoctorInputFormComponentSections/CardiovascularSystemsComponent";
import CentralNervousSystemComponent from "./DoctorInputFormComponentSections/CentralNervousSystemComponent";
import RespiratorySystemComponent from "./DoctorInputFormComponentSections/RespiratorySystemComponent";
import GastrointestinalTractSystemComponent from "./DoctorInputFormComponentSections/GastrointestinalTractSystemComponent";
import GentoUrinarySystemComponent from "./DoctorInputFormComponentSections/GentoUrinarySystemComponent";

import { savePatientDataFromDoctorInput } from "../functions/savePatientDataFromDoctorInput";

type DoctorInputRecordsFormComponentProps = {
  recordId: string;
  doctorReport?: {
    relevantExaminationFormData: RelevantExaminationFormDataType;
    cardiovascularSystemsFormData: CardiovascularSystemsFormDataType;
    centralNervousSystemFormData: CentralNervousSystemFormDataType;
    respiratorySystemFormData: RespiratorySystemFormDataType;
    gastrointestinalTractSystemFormData: GastrointestinalTractSystemFormDataType;
    gentoUrinarySystemFormData: GentoUrinarySystemFormDataType;
    commentsFormData: CommentsFormDataType;
  };
};

const DoctorInputRecordsFormComponent = ({
  recordId,
}: DoctorInputRecordsFormComponentProps) => {
  const [relevantExaminationFormData, setRelevantExaminationFormData] =
    useState<RelevantExaminationFormDataType>({
      height: undefined,
      genotype: undefined,
      weight: undefined,
      bloodGroup: undefined,
    });

  const [cardiovascularSystemsFormData, setCardiovascularSystemsFormData] =
    useState<CardiovascularSystemsFormDataType>({
      xRay: undefined,
      bp: undefined,
      cardiacSound: undefined,
      pulseRate: undefined,
    });

  const [centralNervousSystemFormData, setCentralNervousSystemFormData] =
    useState<CentralNervousSystemFormDataType>({
      mmr: undefined,
      ctScan: undefined,
      wellBeing: undefined,
    });

  const [respiratorySystemFormData, setRespiratorySystemFormData] =
    useState<RespiratorySystemFormDataType>({
      spo2: undefined,
      respiratoryRate: undefined,
      precautionNote: undefined,
      charOfBreath: undefined,
    });

  const [
    gastrointestinalTractSystemFormData,
    setGastrointestinalTractSystemFormData,
  ] = useState<GastrointestinalTractSystemFormDataType>({
    abdominalTenderness: undefined,
    liver: undefined,
    anyOtherMasses: undefined,
    abdominalMass: undefined,
  });

  const [gentoUrinarySystemFormData, setGentoUrinarySystemFormData] =
    useState<GentoUrinarySystemFormDataType>({
      urine: undefined,
      albumen: undefined,
      sugar: undefined,
      deposit: undefined,
    });

  const [commentsFormData, setCommentsFormData] =
    useState<CommentsFormDataType>({
      commentsByDoctor: undefined,
      nameOfDoctor: undefined,
      commentsByDirector: undefined,
    });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <form
      className="mt-10"
      onSubmit={(e) => {
        savePatientDataFromDoctorInput(
          e,
          {
            relevantExaminationFormData,
            cardiovascularSystemsFormData,
            centralNervousSystemFormData,
            respiratorySystemFormData,
            gastrointestinalTractSystemFormData,
            gentoUrinarySystemFormData,
            commentsFormData,
          },
          recordId,
          setIsLoading
        );
      }}
    >
      <RelevantExaminationComponent
        relevantExaminationFormData={relevantExaminationFormData}
        setRelevantExaminationFormData={setRelevantExaminationFormData}
      />

      <CardiovascularSystemsComponent
        cardiovascularSystemsFormData={cardiovascularSystemsFormData}
        setCardiovascularSystemsFormData={setCardiovascularSystemsFormData}
      />

      <CentralNervousSystemComponent
        centralNervousSystemFormData={centralNervousSystemFormData}
        setCentralNervousSystemFormData={setCentralNervousSystemFormData}
      />

      <RespiratorySystemComponent
        respiratorySystemFormData={respiratorySystemFormData}
        setRespiratorySystemFormData={setRespiratorySystemFormData}
      />

      <GastrointestinalTractSystemComponent
        gastrointestinalTractSystemFormData={
          gastrointestinalTractSystemFormData
        }
        setGastrointestinalTractSystemFormData={
          setGastrointestinalTractSystemFormData
        }
      />

      <GentoUrinarySystemComponent
        gentoUrinarySystemFormData={gentoUrinarySystemFormData}
        setGentoUrinarySystemFormData={setGentoUrinarySystemFormData}
      />

      <div className="p-5">
        <div className="flex flex-col mb-7">
          <label htmlFor="commentsByDoctor">
            Any other comments by the Doctor:
          </label>
          <input
            type="text"
            id="commentsByDoctor"
            value={commentsFormData.commentsByDoctor ?? ""}
            onChange={(e) =>
              setCommentsFormData((prev) => ({
                ...prev,
                commentsByDoctor: e.target.value,
              }))
            }
            placeholder="Type out doctor's comments here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="nameOfDoctor">Name of Doctor:</label>
          <input
            type="text"
            id="nameOfDoctor"
            value={commentsFormData.nameOfDoctor ?? ""}
            onChange={(e) =>
              setCommentsFormData((prev) => ({
                ...prev,
                nameOfDoctor: e.target.value,
              }))
            }
            placeholder="Type out doctor's name here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="commentsByDirector">
            Comments by the Director of Medical Services:
          </label>
          <input
            type="text"
            id="commentsByDirector"
            value={commentsFormData.commentsByDirector ?? ""}
            onChange={(e) =>
              setCommentsFormData((prev) => ({
                ...prev,
                commentsByDirector: e.target.value,
              }))
            }
            placeholder="Type out director's comments here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        className={`rounded-md bg-black text-white p-2 w-full active:scale-95 transition-all mt-5 ${
          isLoading && "opacity-65 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Saving..." : "Save your data"}
      </button>
    </form>
  );
};

export default DoctorInputRecordsFormComponent;
