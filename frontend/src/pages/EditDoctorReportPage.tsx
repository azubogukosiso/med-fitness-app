// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import DoctorInputFormComponent from "../components/DoctorInputFormComponent";

import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

const DoctorInputPage = () => {
  const location = useLocation();
  const { getPatientRecordsById } = usePatientsRecordsContext();

  const queryParams = new URLSearchParams(location.search);

  const recordId = queryParams.get("id");

  const patientRecords = getPatientRecordsById(recordId as string);

  return (
    <>
      <header className="flex justify-between">
        <div className="w-[40%]">
          <h2>ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
          <p>MEDICAL CENTRE ASSESSMENT SYSTEM</p>
        </div>

        <div className="flex flex-col w-[20%] justify-end items-end">
          <h3>Edit Patient Data</h3>
          <p className="text-right">
            To be filled by the medical center doctor
          </p>
        </div>
      </header>

      <DoctorInputFormComponent
        recordId={recordId as string}
        doctorReport={patientRecords?.doctorReport}
      />
    </>
  );
};

export default DoctorInputPage;
