// FUNCTION IMPORTS
import PatientInputFormComponent from "../components/PatientInputFormComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

const PatientInputPage = () => {
  return (
    <>
      <PageHeaderComponent
        heading="Patient Data"
        subheading="To be filled by the patient"
      />

      <PatientInputFormComponent />
    </>
  );
};

export default PatientInputPage;
