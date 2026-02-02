import { useState } from "react";
import type { ReactNode } from "react";
import type { PatientsRecordsPageData } from "../../types/PatientRecordsPageDataType";
import { PatientsRecordsContext } from "./PatientsRecordsContext";

type PatientsRecordsContextProviderProps = {
  children: ReactNode;
};

export const PatientsRecordsContextProvider = ({
  children,
}: PatientsRecordsContextProviderProps) => {
  const [pages, setPages] = useState<PatientsRecordsPageData[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const fetchPatientsRecords = async (cursor?: string): Promise<void> => {
    if (loading) return;

    const url = cursor
      ? `${
          import.meta.env.VITE_API_URL
        }/api/patient/records?limit=10&cursor=${cursor}`
      : `${import.meta.env.VITE_API_URL}/api/patient/records?limit=10`;

    setLoading(true);
    try {
      const res = await fetch(url, { credentials: "include" });
      if (res.ok) {
        const data = await res.json();

        setPages((prev) => {
          const isDuplicate = prev.some(
            (page) => page.cursor === data.nextCursor,
          );
          if (isDuplicate) return prev;

          return [
            ...prev,
            {
              records: data.records,
              cursor: data.nextCursor,
            },
          ];
        });

        setCursor(data.nextCursor);
        setHasNextPage(data.hasNextPage);
      }
    } catch (err) {
      console.error("Failed to fetch patients records:", err);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    pages,
    cursor,
    loading,
    hasNextPage,
    currentPage,
    setCurrentPage,
    fetchPatientsRecords,
  };

  return (
    <PatientsRecordsContext.Provider value={contextValue}>
      {children}
    </PatientsRecordsContext.Provider>
  );
};
