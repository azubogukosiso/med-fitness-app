import { useRef, useEffect } from "react";
import PatientRecordsCardComponent from "../components/PatientRecordsCardComponent";
import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

const PatientsRecordsComponent = () => {
  const { pages, fetchPatientsRecords, loading, currentPage, setCurrentPage } =
    usePatientsRecordsContext();

  const hasPrevPage = currentPage > 0;
  const hasNextPage =
    currentPage < pages.length - 1 || pages[currentPage]?.cursor;

  const currentRecords = pages[currentPage]?.records || [];

  const navigationRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    if (currentPage === pages.length - 1) {
      fetchPatientsRecords(pages[currentPage]?.cursor as string);
    }
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    navigationRef.current?.scrollIntoView({ behavior: "auto" });
  }, [currentPage]);

  return (
    <div className="mt-10">
      {currentRecords.length > 0 ? (
        currentRecords.map((record, index) => (
          <PatientRecordsCardComponent
            key={record._id}
            index={index}
            record={record}
            records={currentRecords}
          />
        ))
      ) : (
        <div className="min-h-[50vh] flex items-center justify-center">
          <p className="text-xl">{loading ? "Loading..." : "No records!"}</p>
        </div>
      )}

      {currentRecords.length > 0 && (
        <div
          ref={navigationRef}
          className="mt-5 flex justify-evenly w-[20%] mx-auto"
        >
          <button
            disabled={!hasPrevPage}
            className={`bg-black text-white p-3 rounded-lg active:scale-95 transition-all ${
              !hasPrevPage && "opacity-65 cursor-not-allowed"
            }`}
            onClick={handlePrevClick}
          >
            &lt; Previous
          </button>
          <button
            disabled={!hasNextPage || loading}
            className={`bg-black text-white p-3 rounded-lg active:scale-95 transition-all ${
              (!hasNextPage || loading) && "opacity-65 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
          >
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientsRecordsComponent;
