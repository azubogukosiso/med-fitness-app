// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import FullPatientRecordsComponent from "../components/FullPatientRecordsComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

const FullPatientRecordsPage = () => {
  const location = useLocation();
  const { getPatientRecordsById } = usePatientsRecordsContext();

  const queryParams = new URLSearchParams(location.search);

  const recordId = queryParams.get("id");

  const patientRecords = getPatientRecordsById(recordId as string);

  console.log("Patient Records: ", patientRecords);

  return (
    <>
      <PageHeaderComponent
        heading="Full Patient Records"
        subheading="To be filled by the medical center doctor"
      />

      <FullPatientRecordsComponent patientRecords={patientRecords} />
    </>
  );
};

export default FullPatientRecordsPage;
