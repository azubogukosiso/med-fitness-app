// LIBRARY IMPORTS
import { useState } from "react";
import { Link } from "react-router-dom";

// DATA IMPORTS
import illnesses from "../data/illnesses.json";

// FUNCTION IMPORTS
import { sendCertViaEmail } from "../functions/sendCertViaEmail";

// TYPE IMPORTS
import type { ExtendedPatientRecords } from "../types/ExtendedPatientRecordsType";

type FullPatientRecordsProps = {
  patientRecords: ExtendedPatientRecords | undefined;
};

const FullPatientRecordsComponent = ({
  patientRecords,
}: FullPatientRecordsProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const medicalHistoryFields = [
    { option: patientRecords?.heatInHeadOrBody, index: 0 },
    { option: patientRecords?.epilepsy, index: 1 },
    { option: patientRecords?.hypertension, index: 2 },
    { option: patientRecords?.mentalIllness, index: 3 },
    { option: patientRecords?.tuberculosis, index: 4 },
    { option: patientRecords?.heartDisease, index: 5 },
    { option: patientRecords?.gonorrheaOrSyphilis, index: 6 },
    { option: patientRecords?.pepticUlcer, index: 7 },
    { option: patientRecords?.piles, index: 8 },
    { option: patientRecords?.diabetes, index: 9 },
  ];

  const medicalHistory = medicalHistoryFields.filter(
    (field) => field.option === "yes",
  );

  return (
    <>
      <div className="my-5 p-5 border border-black rounded-md">
        <h2 className="mb-3">
          {patientRecords?.surname}, {patientRecords?.otherNames}
        </h2>

        <div className="mb-5">
          <p className="mb-1">
            <span className="font-medium">Email Address: </span>
            {patientRecords?.patientEmail}
          </p>
          <p className="mb-1">
            <span className="font-medium">Age: </span>
            {patientRecords?.age}
          </p>
          <p className="mb-1">
            <span className="font-medium">Sex: </span>
            {patientRecords?.sex}
          </p>
          <p className="mb-1">
            <span className="font-medium">Faculty: </span>
            {patientRecords?.faculty}
          </p>
          <p className="mb-1">
            <span className="font-medium">Department: </span>
            {patientRecords?.department ?? "N/A"}
          </p>
          <p className="mb-1">
            <span className="font-medium">Marital Status: </span>
            {patientRecords?.maritalStatus}
          </p>
          <p className="mb-1">
            <span className="font-medium">
              Number of Children (Patient & Siblings):{" "}
            </span>
            {patientRecords?.noOfChildren}
          </p>
        </div>

        <hr className="mb-5 border-gray-600" />

        <div className="mb-5">
          <p className="mb-1">
            <span className="font-medium">Previous Health Concerns: </span>
          </p>
          {medicalHistory.length > 0
            ? medicalHistory.map((_illness, index) =>
                illnesses.map(
                  (value) =>
                    value.index === index && <p key={index}>{value.illness}</p>,
                ),
              )
            : "None"}
        </div>

        <hr className="mb-5 border-gray-600" />

        <div className="mb-7">
          <p className={`${patientRecords?.otherIllness && "mb-1"}`}>
            <span className="font-medium">Other Illness: </span>
            {patientRecords?.otherIllness
              ? patientRecords?.otherIllness
              : "None"}
          </p>

          {patientRecords?.otherIllness && (
            <>
              <p className="mb-1">
                <span className="font-medium">Date of Illness: </span>
                {patientRecords?.dateOfIllness === ""
                  ? "N/A"
                  : patientRecords?.dateOfIllness}
              </p>

              <p className="mb-1">
                <span className="font-medium">Duration of Illness: </span>
                {patientRecords?.illnessDuration === ""
                  ? "N/A"
                  : patientRecords?.illnessDuration}
              </p>

              <p className="mb-1">
                <span className="font-medium">
                  Hospital at which Illness was diagnosed:{" "}
                </span>
                {patientRecords?.hospital === ""
                  ? "N/A"
                  : patientRecords?.hospital}
              </p>

              <p className="mb-1">
                <span className="font-medium">
                  Name of doctor who made diagnosis:{" "}
                </span>
                {patientRecords?.doctorName === ""
                  ? "N/A"
                  : patientRecords?.doctorName}
              </p>

              <p className="mb-1">
                <span className="font-medium">
                  Address of doctor who made diagnosis:{" "}
                </span>
                {patientRecords?.address === ""
                  ? "N/A"
                  : patientRecords?.address}
              </p>
            </>
          )}
        </div>

        <hr className="mb-5 border-gray-600" />

        <div className="mb-7">
          <h3 className="mb-3">Doctor's Report</h3>
          {patientRecords?.doctorReport ? (
            <div className="ml-3">
              <div className="mb-3">
                <p className="mb-1 font-medium">
                  Relevant Examination Reports:
                </p>
                <ul className="mb-3 list-disc list-inside text-sm ml-3">
                  <li>
                    Height:{" "}
                    {
                      patientRecords?.doctorReport?.relevantExaminationFormData
                        ?.height
                    }
                  </li>
                  <li>
                    Genotype:{" "}
                    {
                      patientRecords?.doctorReport?.relevantExaminationFormData
                        ?.genotype
                    }
                  </li>
                  <li>
                    Weight:{" "}
                    {
                      patientRecords?.doctorReport?.relevantExaminationFormData
                        ?.weight
                    }
                  </li>
                  <li>
                    Blood Group:{" "}
                    {
                      patientRecords?.doctorReport?.relevantExaminationFormData
                        ?.bloodGroup
                    }
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="mb-1 font-medium">
                  Gastrointestinal Tract Reports:
                </p>
                <ul className="mb-3 list-disc list-inside text-sm ml-3">
                  <li>
                    Abdominal Mass:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.gastrointestinalTractSystemFormData?.abdominalMass
                    }
                  </li>
                  <li>
                    Abdominal Tenderness:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.gastrointestinalTractSystemFormData
                        ?.abdominalTenderness
                    }
                  </li>
                  <li>
                    Liver:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.gastrointestinalTractSystemFormData?.liver
                    }
                  </li>
                  <li>
                    Any other masses:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.gastrointestinalTractSystemFormData?.anyOtherMasses
                    }
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="mb-1 font-medium">Gentourinary System Reports:</p>
                <ul className="mb-3 list-disc list-inside text-sm ml-3">
                  <li>
                    Urine:{" "}
                    {
                      patientRecords?.doctorReport?.gentoUrinarySystemFormData
                        ?.urine
                    }
                  </li>
                  <li>
                    Albumen:{" "}
                    {
                      patientRecords?.doctorReport?.gentoUrinarySystemFormData
                        ?.albumen
                    }
                  </li>
                  <li>
                    Sugar:{" "}
                    {
                      patientRecords?.doctorReport?.gentoUrinarySystemFormData
                        ?.sugar
                    }
                  </li>
                  <li>
                    Deposit:{" "}
                    {
                      patientRecords?.doctorReport?.gentoUrinarySystemFormData
                        ?.deposit
                    }
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="mb-1 font-medium">
                  Cardiovascular System Reports:
                </p>
                <ul className="mb-3 list-disc list-inside text-sm ml-3">
                  <li>
                    X-Ray:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.cardiovascularSystemsFormData?.xRay
                    }
                  </li>
                  <li>
                    Blood Pressure:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.cardiovascularSystemsFormData?.bp
                    }
                  </li>
                  <li>
                    Cardiac Sound:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.cardiovascularSystemsFormData?.cardiacSound
                    }
                  </li>
                  <li>
                    Pulse Rate:{" "}
                    {
                      patientRecords?.doctorReport
                        ?.cardiovascularSystemsFormData?.pulseRate
                    }
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="mb-1 font-medium">Respiratory System Reports:</p>
                <ul className="mb-3 list-disc list-inside text-sm ml-3">
                  <li>
                    SPO2:{" "}
                    {
                      patientRecords?.doctorReport?.respiratorySystemFormData
                        ?.spo2
                    }
                  </li>
                  <li>
                    Respiratory Rate:{" "}
                    {
                      patientRecords?.doctorReport?.respiratorySystemFormData
                        ?.respiratoryRate
                    }
                  </li>
                  <li>
                    Character of Breath:{" "}
                    {
                      patientRecords?.doctorReport?.respiratorySystemFormData
                        ?.charOfBreath
                    }
                  </li>
                  <li>
                    Precaution Note:{" "}
                    {
                      patientRecords?.doctorReport?.respiratorySystemFormData
                        ?.precautionNote
                    }
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="mb-1 font-medium">
                  Central Nervous System Reports:
                </p>
                <ul className="mb-3 list-disc list-inside text-sm ml-3">
                  <li>
                    MMR:{" "}
                    {
                      patientRecords?.doctorReport?.centralNervousSystemFormData
                        ?.mmr
                    }
                  </li>
                  <li>
                    CT Scan:{" "}
                    {
                      patientRecords?.doctorReport?.centralNervousSystemFormData
                        ?.ctScan
                    }
                  </li>
                  <li>
                    Well Being:{" "}
                    {
                      patientRecords?.doctorReport?.centralNervousSystemFormData
                        ?.wellBeing
                    }
                  </li>
                </ul>
              </div>

              <div>
                <p className="mb-1">
                  <span className="font-medium">Name of Doctor:</span>{" "}
                  {patientRecords?.doctorReport?.commentsFormData?.nameOfDoctor}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Comments By Doctor:</span>{" "}
                  {
                    patientRecords?.doctorReport?.commentsFormData
                      ?.commentsByDoctor
                  }
                </p>
                <p className="mb-1">
                  <span className="font-medium">Comments By Director:</span>{" "}
                  {
                    patientRecords?.doctorReport?.commentsFormData
                      ?.commentsByDirector
                  }
                </p>
              </div>
            </div>
          ) : (
            "None"
          )}
        </div>

        <div className="flex justify-evenly w-[70%] mx-auto">
          {patientRecords?.doctorReport ? (
            <Link
              to={`/doctor/edit-report?id=${patientRecords?._id}`}
              className="inline-block px-4 py-2 bg-black text-white rounded-md active:scale-95 transition-all"
            >
              Edit Doctor's Report
            </Link>
          ) : (
            <Link
              to={`/doctor/report?id=${patientRecords?._id}`}
              className="inline-block px-4 py-2 bg-black text-white rounded-md active:scale-95 transition-all"
            >
              Enter Doctor's Report
            </Link>
          )}

          <button
            type="button"
            className={`px-4 py-2 bg-black text-white rounded-md active:scale-95 transition-all w-[50%] ${
              isLoading && "opacity-65 cursor-not-allowed"
            }`}
            disabled={isLoading ? true : false}
            onClick={() => {
              patientRecords?.doctorReport
                ? sendCertViaEmail(
                    patientRecords?.patientEmail as string,
                    {
                      patientName: `${patientRecords?.surname} ${patientRecords?.otherNames}`,
                      age: patientRecords?.age as number,
                      sex: patientRecords?.sex as string,
                      faculty: patientRecords?.faculty as string,
                      department: patientRecords?.department as string,
                      maritalStatus: patientRecords?.maritalStatus as string,
                      noOfChildren: patientRecords?.noOfChildren as number,
                    },
                    setIsLoading,
                  )
                : document
                    .querySelector<HTMLDialogElement>("#my_modal_1")
                    ?.showModal();
            }}
          >
            {isLoading
              ? "Sending Email..."
              : "Issue Fitness Certificate via Email"}
          </button>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-white border border-black">
              <h3 className="font-bold text-lg">Information!</h3>
              <p className="py-4">
                This patient does not have a doctor's report entered yet. <br />{" "}
                Do you still wish to issue the medical fitness certificate?
              </p>
              <div className="modal-action justify-center">
                <form method="dialog" className="flex justify-between w-full">
                  <button className="rounded-md w-1/4 bg-black text-white px-3 py-2 text-sm shadow-none active:scale-95 transition-all">
                    No
                  </button>
                  <button
                    className="rounded-md w-1/4 bg-black text-white px-3 py-2 text-sm shadow-none active:scale-95 transition-all"
                    onClick={() => {
                      sendCertViaEmail(
                        patientRecords?.patientEmail as string,
                        {
                          patientName: `${patientRecords?.surname} ${patientRecords?.otherNames}`,
                          age: patientRecords?.age as number,
                          sex: patientRecords?.sex as string,
                          faculty: patientRecords?.faculty as string,
                          department: patientRecords?.department as string,
                          maritalStatus:
                            patientRecords?.maritalStatus as string,
                          noOfChildren: patientRecords?.noOfChildren as number,
                        },
                        setIsLoading,
                      );
                    }}
                  >
                    Yes
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default FullPatientRecordsComponent;
