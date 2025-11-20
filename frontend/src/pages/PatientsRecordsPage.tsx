// FUNCTION OR COMPONENT IMPORTS
import PatientsRecordsComponent from "../components/PatientsRecordsComponent";

const PatientsRecordsPage = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="w-[40%]">
          <h2>ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
          <p>MEDICAL CENTRE ASSESSMENT SYSTEM</p>
        </div>

        <div className="flex flex-col w-[20%] justify-end items-end">
          <h3>Patients' Records</h3>
          <p className="text-right">
            All patients' records for review by medical center personnel
          </p>
        </div>
      </header>

      <PatientsRecordsComponent />
    </>
  );
};

export default PatientsRecordsPage;
