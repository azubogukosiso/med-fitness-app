import type { PatientsRecordsPageData } from "../../types/PatientRecordsPageDataType";
import type { ExtendedPatientRecords } from "../../types/ExtendedPatientRecordsType";

export type PatientsRecordsContextType = {
  pages: PatientsRecordsPageData[];
  cursor: string | null;
  loading: boolean;
  hasNextPage: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  getPatientRecordsById: (id: string) => ExtendedPatientRecords | undefined;
  fetchPatientsRecords: (
    cursor?: string,
    currentPage?: number,
  ) => Promise<void>;
};
