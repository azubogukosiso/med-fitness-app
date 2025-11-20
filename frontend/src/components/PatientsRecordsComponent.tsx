// LIBRARY IMPORTS
import { useQuery } from "@tanstack/react-query";

// FUNCTION OR COMPONENT IMPORTS
import PatientRecordsCardComponent from "../components/PatientRecordsCardComponent";

// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../types/PatientFormDataFromPatientInputType";

type ExtendedPatientRecords = PatientFormDataFromPatientInputType & {
  _id: string;
};

const PatientsRecordsComponent = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["PatientRecordsPageData"],
    queryFn: () =>
      fetch("http://localhost:3000/api/patient/records").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  return (
    <div className="mt-10">
      {data.records.map((record: ExtendedPatientRecords, index: number) => (
        <PatientRecordsCardComponent
          key={record?._id}
          index={index}
          record={record}
          records={data.records}
        />
      ))}
    </div>
  );
};

export default PatientsRecordsComponent;
