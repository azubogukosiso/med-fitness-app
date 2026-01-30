import type { ExtendedPatientRecords } from "./ExtendedPatientRecordsType";

export type PatientsRecordsPageData = {
  records: ExtendedPatientRecords[];
  cursor: string | null;
};
