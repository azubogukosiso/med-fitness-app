// LIBRARY IMPORTS
import { useState, useEffect } from "react";

// TYPE IMPORTS
import type { ReactNode } from "react";
import type { ExtendedPatientRecords } from "../../types/ExtendedPatientRecordsType";

// FUNCTION IMPORTS
import { PatientsRecordsContext } from "./PatientsRecordsContext";

// PROP TYPE FOR THE PROVIDER COMPONENT
type PatientsRecordsContextProviderProps = {
  children: ReactNode;
};

export const PatientsRecordsContextProvider = ({
  children,
}: PatientsRecordsContextProviderProps) => {
  const [patientsRecords, setPatientsRecords] = useState<
    ExtendedPatientRecords[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPatientsRecords();
  }, []);

  const fetchPatientsRecords = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/patient/records", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        console.log("data is here: ", data);
        setPatientsRecords(data.records);
      }
    } catch (err) {
      console.error("Failed to fetch patients records:", err);
    } finally {
      setLoading(false);
    }
  };

  const getPatientRecordsById = (
    id: string
  ): ExtendedPatientRecords | undefined => {
    return patientsRecords?.find(
      (record: ExtendedPatientRecords) => record._id === id
    );
  };

  const contextValue = {
    patientsRecords,
    loading,
    getPatientRecordsById,
  };

  return (
    <PatientsRecordsContext.Provider value={contextValue}>
      {children}
    </PatientsRecordsContext.Provider>
  );
};
