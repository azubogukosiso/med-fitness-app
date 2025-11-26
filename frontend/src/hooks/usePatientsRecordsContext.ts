import { useContext } from "react";
import { PatientsRecordsContext } from "../context/patientsRecords/PatientsRecordsContext";

export const usePatientsRecordsContext = () => {
  const context = useContext(PatientsRecordsContext);

  if (!context) {
    throw Error(
      "usePatientsRecordsContext must be used inside an PatientsRecordsContextProvider"
    );
  }

  return context;
};
