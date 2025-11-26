// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import FullPatientRecordsComponent from "../components/FullPatientRecordsComponent";

import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

const FullPatientRecordsPage = () => {
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
          <h3>Full Patient Records</h3>
          <p className="text-right">
            Full patient record details for review by medical center personnel
          </p>
        </div>
      </header>

      <FullPatientRecordsComponent patientRecords={patientRecords} />
    </>
  );
};

export default FullPatientRecordsPage;
