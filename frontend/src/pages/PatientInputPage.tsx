import PatientInputFormComponent from "../components/PatientInputFormComponent";

const PatientInputPage = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="w-[40%]">
          <h2>ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
          <p>MEDICAL CENTRE ASSESSMENT FORM</p>
        </div>

        <div className="flex flex-col w-[20%] justify-end items-end">
          <h3>Patient Data</h3>
          <p>To be filled by the patient</p>
        </div>
      </header>

      <PatientInputFormComponent />
    </>
  );
};

export default PatientInputPage;
