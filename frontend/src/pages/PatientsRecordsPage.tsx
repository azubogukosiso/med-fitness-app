// FUNCTION OR COMPONENT IMPORTS
import PatientsRecordsComponent from "../components/PatientsRecordsComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

const PatientsRecordsPage = () => {
  return (
    <>
      <PageHeaderComponent
        heading="Patient's Records"
        subheading="All patients' records for review by medical center personnel"
      />

      <PatientsRecordsComponent />
    </>
  );
};

export default PatientsRecordsPage;
