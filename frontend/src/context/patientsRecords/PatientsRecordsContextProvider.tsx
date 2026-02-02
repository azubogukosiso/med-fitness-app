import { useState } from "react";
import type { ReactNode } from "react";
import type { PatientsRecordsPageData } from "../../types/PatientRecordsPageDataType";
import type { ExtendedPatientRecords } from "../../types/ExtendedPatientRecordsType";
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

  const getPatientRecordsById = (
    id: string,
  ): ExtendedPatientRecords | undefined => {
    console.log(pages[currentPage]?.records);
    return pages[currentPage]?.records?.find(
      (record: ExtendedPatientRecords) => record._id === id,
    );
  };

  // // --- Persistence & last-tab cleanup ---------------------------------
  // const STORAGE_KEY = "patientsRecords";
  // const HEARTBEAT_PREFIX = "med_tab_";
  // const HEARTBEAT_INTERVAL = 2000;
  // const HEARTBEAT_THRESHOLD = 10000;
  // const tabIdRef = useRef<string>(
  //   typeof crypto !== "undefined" && "randomUUID" in crypto
  //     ? (crypto as any).randomUUID()
  //     : `${Date.now()}-${Math.random()}`,
  // );

  // // Rehydrate on mount, start heartbeat, run cleanup when last tab closes
  // useEffect(() => {
  //   // rehydrate
  //   try {
  //     const saved = localStorage.getItem(STORAGE_KEY);
  //     if (saved) {
  //       const parsed = JSON.parse(saved);
  //       setPages(parsed.pages ?? []);
  //       setCursor(parsed.cursor ?? null);
  //       setCurrentPage(parsed.currentPage ?? 0);
  //       setHasNextPage(parsed.hasNextPage ?? true);
  //     }
  //   } catch (err) {
  //     console.error("Failed to restore patients records from storage", err);
  //   }

  //   const tabId = tabIdRef.current;
  //   const heartbeatKey = `${HEARTBEAT_PREFIX}${tabId}`;

  //   const updateHeartbeat = () => {
  //     try {
  //       localStorage.setItem(heartbeatKey, String(Date.now()));
  //     } catch (err) {
  //       // ignore quota or unavailable errors
  //     }
  //   };

  //   updateHeartbeat();
  //   const hbInterval = setInterval(updateHeartbeat, HEARTBEAT_INTERVAL);

  //   const cleanup = () => {
  //     try {
  //       const now = Date.now();
  //       // remove stale heartbeats
  //       const keys = Object.keys(localStorage).filter((k) =>
  //         k.startsWith(HEARTBEAT_PREFIX),
  //       );
  //       keys.forEach((k) => {
  //         const ts = Number(localStorage.getItem(k));
  //         if (isNaN(ts) || now - ts > HEARTBEAT_THRESHOLD) {
  //           localStorage.removeItem(k);
  //         }
  //       });

  //       const remaining = Object.keys(localStorage).filter((k) =>
  //         k.startsWith(HEARTBEAT_PREFIX),
  //       );
  //       if (remaining.length === 0) {
  //         // no more tabs — clear persisted app data
  //         localStorage.removeItem(STORAGE_KEY);
  //       }
  //     } catch (err) {
  //       console.error("Failed to cleanup tabs", err);
  //     }
  //   };

  //   // initial cleanup
  //   cleanup();

  //   const storageListener = (e: StorageEvent) => {
  //     if (e.key && e.key.startsWith(HEARTBEAT_PREFIX)) cleanup();
  //   };

  //   const beforeUnloadHandler = () => {
  //     try {
  //       clearInterval(hbInterval);
  //       localStorage.removeItem(heartbeatKey);
  //       cleanup();
  //     } catch (err) {
  //       // ignore
  //     }
  //   };

  //   window.addEventListener("storage", storageListener);
  //   window.addEventListener("beforeunload", beforeUnloadHandler);

  //   return () => {
  //     clearInterval(hbInterval);
  //     window.removeEventListener("storage", storageListener);
  //     window.removeEventListener("beforeunload", beforeUnloadHandler);
  //     try {
  //       localStorage.removeItem(heartbeatKey);
  //     } catch {}
  //   };
  // }, []);

  // // persist when these change
  // useEffect(() => {
  //   try {
  //     localStorage.setItem(
  //       STORAGE_KEY,
  //       JSON.stringify({ pages, cursor, currentPage, hasNextPage }),
  //     );
  //   } catch (err) {
  //     console.error("Failed to save patients records to storage", err);
  //   }
  // }, [pages, cursor, currentPage, hasNextPage]);

  // // ----------------------------------------------------------------------

  const contextValue = {
    pages,
    cursor,
    loading,
    hasNextPage,
    currentPage,
    setCurrentPage,
    getPatientRecordsById,
    fetchPatientsRecords,
  };

  return (
    <PatientsRecordsContext.Provider value={contextValue}>
      {children}
    </PatientsRecordsContext.Provider>
  );
};
