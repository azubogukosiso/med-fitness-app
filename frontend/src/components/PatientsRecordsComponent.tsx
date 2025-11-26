// FUNCTION OR COMPONENT IMPORTS
import PatientRecordsCardComponent from "../components/PatientRecordsCardComponent";
import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

// TYPE IMPORTS
import type { ExtendedPatientRecords } from "../types/ExtendedPatientRecordsType";

const PatientsRecordsComponent = () => {
  const { patientsRecords } = usePatientsRecordsContext();

  return (
    <div className="mt-10">
      {patientsRecords?.map((record: ExtendedPatientRecords, index: number) => (
        <PatientRecordsCardComponent
          key={record?._id}
          index={index}
          record={record}
          records={patientsRecords}
        />
      ))}
    </div>
  );
};

export default PatientsRecordsComponent;
