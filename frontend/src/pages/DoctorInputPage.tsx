import DoctorInputFormComponent from "../components/DoctorInputFormComponent"

const DoctorInputPage = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="w-[40%]">
          <h2>ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
          <p>MEDICAL CENTRE ASSESSMENT FORM</p>
        </div>

        <div className="flex flex-col w-[20%] justify-end items-end">
          <h3>Patient Data</h3>
          <p className="text-right">To be filled by the medical center doctor</p>
        </div>
      </header>

      <DoctorInputFormComponent />
    </>
  );
};

export default DoctorInputPage;
