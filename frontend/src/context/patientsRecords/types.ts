import type { PatientsRecordsPageData } from "../../types/PatientRecordsPageDataType";

export type PatientsRecordsContextType = {
  pages: PatientsRecordsPageData[];
  cursor: string | null;
  loading: boolean;
  hasNextPage: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  fetchPatientsRecords: (
    cursor?: string,
    currentPage?: number,
  ) => Promise<void>;
};
