// LIBRARY IMPORTS
import { useState, useRef } from "react";

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

import { editPatientDataFromDoctorInput } from "../functions/editPatientDataFromDoctorInput";

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
  doctorReport,
}: DoctorInputRecordsFormComponentProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [relevantExaminationFormData, setRelevantExaminationFormData] =
    useState<RelevantExaminationFormDataType>({
      height: doctorReport?.relevantExaminationFormData.height,
      genotype: doctorReport?.relevantExaminationFormData.genotype,
      weight: doctorReport?.relevantExaminationFormData.weight,
      bloodGroup: doctorReport?.relevantExaminationFormData.bloodGroup,
    });

  const [cardiovascularSystemsFormData, setCardiovascularSystemsFormData] =
    useState<CardiovascularSystemsFormDataType>({
      xRay: doctorReport?.cardiovascularSystemsFormData.xRay,
      bp: doctorReport?.cardiovascularSystemsFormData.bp,
      cardiacSound: doctorReport?.cardiovascularSystemsFormData.cardiacSound,
      pulseRate: doctorReport?.cardiovascularSystemsFormData.pulseRate,
    });

  const [centralNervousSystemFormData, setCentralNervousSystemFormData] =
    useState<CentralNervousSystemFormDataType>({
      mmr: doctorReport?.centralNervousSystemFormData.mmr,
      ctScan: doctorReport?.centralNervousSystemFormData.ctScan,
      wellBeing: doctorReport?.centralNervousSystemFormData.wellBeing,
    });

  const [respiratorySystemFormData, setRespiratorySystemFormData] =
    useState<RespiratorySystemFormDataType>({
      spo2: doctorReport?.respiratorySystemFormData.spo2,
      respiratoryRate: doctorReport?.respiratorySystemFormData.respiratoryRate,
      precautionNote: doctorReport?.respiratorySystemFormData.precautionNote,
      charOfBreath: doctorReport?.respiratorySystemFormData.charOfBreath,
    });

  const [
    gastrointestinalTractSystemFormData,
    setGastrointestinalTractSystemFormData,
  ] = useState<GastrointestinalTractSystemFormDataType>({
    abdominalTenderness:
      doctorReport?.gastrointestinalTractSystemFormData.abdominalTenderness,
    liver: doctorReport?.gastrointestinalTractSystemFormData.liver,
    anyOtherMasses:
      doctorReport?.gastrointestinalTractSystemFormData.anyOtherMasses,
    abdominalMass:
      doctorReport?.gastrointestinalTractSystemFormData.abdominalMass,
  });

  const [gentoUrinarySystemFormData, setGentoUrinarySystemFormData] =
    useState<GentoUrinarySystemFormDataType>({
      urine: doctorReport?.gentoUrinarySystemFormData.urine,
      albumen: doctorReport?.gentoUrinarySystemFormData.albumen,
      sugar: doctorReport?.gentoUrinarySystemFormData.sugar,
      deposit: doctorReport?.gentoUrinarySystemFormData.deposit,
    });

  const [commentsFormData, setCommentsFormData] =
    useState<CommentsFormDataType>({
      commentsByDoctor: doctorReport?.commentsFormData.commentsByDoctor,
      nameOfDoctor: doctorReport?.commentsFormData.nameOfDoctor,
      signatureOfDoctor: doctorReport?.commentsFormData.signatureOfDoctor,
      commentsByDirector: doctorReport?.commentsFormData.commentsByDirector,
    });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    doctorReport?.commentsFormData.signatureOfDoctor as string
  );

  return (
    <form
      className="mt-10"
      onSubmit={(e) => {
        editPatientDataFromDoctorInput(
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

        <div className="flex flex-col mb-7">
          <label htmlFor="signatureOfDoctor">Signature of Doctor:</label>
          <input
            type="file"
            id="signatureOfDoctor"
            accept=".jpg, .jpeg, .png, .webp"
            className="hidden"
            ref={inputRef}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImagePreview(URL.createObjectURL(file));
                setCommentsFormData((prev) => ({
                  ...prev,
                  signatureOfDoctor: file,
                }));
              } else {
                setImagePreview(undefined);
                setCommentsFormData((prev) => ({
                  ...prev,
                  signatureOfDoctor: undefined,
                }));
              }
            }}
          />
          <div
            onClick={() => {
              inputRef.current?.click();
            }}
            className="border border-black w-[15%] h-[80px] mt-3 cursor-pointer rounded-md overflow-hidden"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Signature Preview"
                className="w-full h-auto"
              />
            ) : (
              <div className="flex flex-col items-center p-3">
                <span className="text-2xl">+</span>
                <span className="text-sm text-gray-400">
                  Click to upload signature
                </span>
              </div>
            )}
          </div>
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
