// DATA IMPORTS
import illnesses from "../data/illnesses.json";

// LIBRARY IMPORTS
import { Link } from "react-router-dom";

// TYPE IMPORTS
import type { ExtendedPatientRecords } from "../types/ExtendedPatientRecordsType";

type FullPatientRecordsProps = {
  patientRecords: ExtendedPatientRecords | undefined;
};

const FullPatientRecordsComponent = ({
  patientRecords,
}: FullPatientRecordsProps) => {
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
    (field) => field.option === "yes"
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
                    value.index === index && <p key={index}>{value.illness}</p>
                )
              )
            : "None"}
        </div>

        <hr className="mb-5 border-gray-600" />

        <div className="mb-7">
          <p className={`${patientRecords?.otherIllness !== "" && "mb-1"}`}>
            <span className="font-medium">Other Illness: </span>
            {patientRecords?.otherIllness === ""
              ? "None"
              : patientRecords?.otherIllness}
          </p>

          {patientRecords?.otherIllness !== "" && (
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

        <div className="flex justify-evenly w-[70%] mx-auto">
          <Link
            to={`/doctor/report?id=${patientRecords?._id}`}
            className="inline-block px-4 py-2 bg-black text-white rounded-md active:scale-95 transition-all"
          >
            Enter Doctor's Report
          </Link>

          <button
            type="button"
            className="px-4 py-2 bg-black text-white rounded-md active:scale-95 transition-all"
          >
            Issue Fitness Certificate (via Email)
          </button>
        </div>
      </div>
    </>
  );
};

export default FullPatientRecordsComponent;
