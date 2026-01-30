// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import EditDoctorReportComponent from "../components/EditDoctorReportComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

const location = useLocation();

const queryParams = new URLSearchParams(location.search);

const recordId = queryParams.get("id");

const { getPatientRecordsById } = usePatientsRecordsContext();
const patientRecords = getPatientRecordsById(recordId as string);

const DoctorInputPage = () => {
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
