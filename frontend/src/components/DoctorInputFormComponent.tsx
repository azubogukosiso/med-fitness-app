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

type DoctorInputFormComponentProps = {
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

const DoctorInputFormComponent = ({
  recordId,
  doctorReport,
}: DoctorInputFormComponentProps) => {
  const [relevantExaminationFormData, setRelevantExaminationFormData] =
    useState<RelevantExaminationFormDataType>({
      height: doctorReport?.relevantExaminationFormData.height ?? undefined,
      genotype: doctorReport?.relevantExaminationFormData.genotype ?? undefined,
      weight: doctorReport?.relevantExaminationFormData.weight ?? undefined,
      bloodGroup:
        doctorReport?.relevantExaminationFormData.bloodGroup ?? undefined,
    });

  const [cardiovascularSystemsFormData, setCardiovascularSystemsFormData] =
    useState<CardiovascularSystemsFormDataType>({
      xRay: doctorReport?.cardiovascularSystemsFormData.xRay ?? undefined,
      bp: doctorReport?.cardiovascularSystemsFormData.bp ?? undefined,
      cardiacSound:
        doctorReport?.cardiovascularSystemsFormData.cardiacSound ?? undefined,
      pulseRate:
        doctorReport?.cardiovascularSystemsFormData.pulseRate ?? undefined,
    });

  const [centralNervousSystemFormData, setCentralNervousSystemFormData] =
    useState<CentralNervousSystemFormDataType>({
      mmr: doctorReport?.centralNervousSystemFormData.mmr ?? undefined,
      ctScan: doctorReport?.centralNervousSystemFormData.ctScan ?? undefined,
      wellBeing:
        doctorReport?.centralNervousSystemFormData.wellBeing ?? undefined,
    });

  const [respiratorySystemFormData, setRespiratorySystemFormData] =
    useState<RespiratorySystemFormDataType>({
      spo2: doctorReport?.respiratorySystemFormData.spo2 ?? undefined,
      respiratoryRate:
        doctorReport?.respiratorySystemFormData.respiratoryRate ?? undefined,
      precautionNote:
        doctorReport?.respiratorySystemFormData.precautionNote ?? undefined,
      charOfBreath:
        doctorReport?.respiratorySystemFormData.charOfBreath ?? undefined,
    });

  const [
    gastrointestinalTractSystemFormData,
    setGastrointestinalTractSystemFormData,
  ] = useState<GastrointestinalTractSystemFormDataType>({
    abdominalTenderness:
      doctorReport?.gastrointestinalTractSystemFormData.abdominalTenderness ??
      undefined,
    liver: doctorReport?.gastrointestinalTractSystemFormData.liver ?? undefined,
    anyOtherMasses:
      doctorReport?.gastrointestinalTractSystemFormData.anyOtherMasses ??
      undefined,
    abdominalMass:
      doctorReport?.gastrointestinalTractSystemFormData.abdominalMass ??
      undefined,
  });

  const [gentoUrinarySystemFormData, setGentoUrinarySystemFormData] =
    useState<GentoUrinarySystemFormDataType>({
      urine: doctorReport?.gentoUrinarySystemFormData.urine ?? undefined,
      albumen: doctorReport?.gentoUrinarySystemFormData.albumen ?? undefined,
      sugar: doctorReport?.gentoUrinarySystemFormData.sugar ?? undefined,
      deposit: doctorReport?.gentoUrinarySystemFormData.deposit ?? undefined,
    });

  const [commentsFormData, setCommentsFormData] =
    useState<CommentsFormDataType>({
      commentsByDoctor:
        doctorReport?.commentsFormData.commentsByDoctor ?? undefined,
      nameOfDoctor: doctorReport?.commentsFormData.nameOfDoctor ?? undefined,
      // signatureOfDoctor: undefined,
      commentsByDirector:
        doctorReport?.commentsFormData.commentsByDirector ?? undefined,
    });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      className="mt-10"
      onSubmit={(e) =>
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
        )
      }
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

export default DoctorInputFormComponent;
