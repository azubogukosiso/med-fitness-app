// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import PageHeaderComponent from "../components/PageHeaderComponent";
import DoctorInputRecordsFormComponent from "../components/DoctorInputRecordsFormComponent";

const DoctorInputPage = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const recordId = queryParams.get("id");

  return (
    <>
      <PageHeaderComponent
        heading="Patient Data"
        subheading="To be filled by the medical center doctor"
      />

      <DoctorInputRecordsFormComponent recordId={recordId as string} />
    </>
  );
};

export default DoctorInputPage;
