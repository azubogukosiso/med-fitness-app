import type { ExtendedPatientRecords } from "../../types/ExtendedPatientRecordsType";

export type PatientsRecordsContextType = {
  patientsRecords: ExtendedPatientRecords[] | null;
  loading: boolean;
  getPatientRecordsById: (
    patientId: string
  ) => ExtendedPatientRecords | undefined;
};
