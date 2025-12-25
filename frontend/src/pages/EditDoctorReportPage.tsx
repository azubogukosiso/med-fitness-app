// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import EditDoctorReportComponent from "../components/EditDoctorReportComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

const DoctorInputPage = () => {
  const location = useLocation();
  const { getPatientRecordsById } = usePatientsRecordsContext();

  const queryParams = new URLSearchParams(location.search);

  const recordId = queryParams.get("id");

  const patientRecords = getPatientRecordsById(recordId as string);

  return (
    <>
      <PageHeaderComponent
        heading="Edit Patient Data"
        subheading="To be filled by the medical center doctor"
      />

      <EditDoctorReportComponent
        recordId={recordId as string}
        doctorReport={patientRecords?.doctorReport}
      />
    </>
  );
};

export default DoctorInputPage;
