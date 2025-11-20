// LIBRARY IMPORTS
import { Link } from "react-router-dom";

// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../types/PatientFormDataFromPatientInputType";

type PatientRecordsCardComponentProps = {
  record: PatientFormDataFromPatientInputType;
  index: number;
  records: PatientFormDataFromPatientInputType[];
};

const PatientRecordsCardComponent = ({
  record,
  index,
  records,
}: PatientRecordsCardComponentProps) => {
  return (
    <div
      className={`${
        index !== records.length - 1 && "mb-3"
      } border border-black rounded-md p-5`}
    >
      <h4>
        {record.surname}, {record.otherNames}
      </h4>
      <p>Age: {record.age}</p>
      <p>Sex: {record.sex}</p>
      <p>Faculty: {record.faculty}</p>
      <p>Department: {record.department ? record.department : "N/A"}</p>

      <div className="mt-3">
        <Link
          to="#"
          className="inline-block px-4 py-2 bg-black text-white rounded-md active:scale-95 transition-all mr-3"
        >
          View Full Records
        </Link>
        <Link
          to="#"
          className="inline-block px-4 py-2 bg-black text-white rounded-md active:scale-95 transition-all"
        >
          Enter Doctor's Report
        </Link>
      </div>
    </div>
  );
};

export default PatientRecordsCardComponent;
