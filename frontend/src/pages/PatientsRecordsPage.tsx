import { useEffect } from "react";
import PatientsRecordsComponent from "../components/PatientsRecordsComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
// import SearchComponent from "../components/SearchComponent";
import { usePatientsRecordsContext } from "../hooks/usePatientsRecordsContext";

const PatientsRecordsPage = () => {
  const { fetchPatientsRecords, pages } = usePatientsRecordsContext();

  useEffect(() => {
    if (pages.length === 0) {
      fetchPatientsRecords();
    }
  }, [fetchPatientsRecords, pages]);

  return (
    <>
      <PageHeaderComponent
        heading="Patient's Records"
        subheading="All patients' records for review by medical center personnel"
      />
      {/* <SearchComponent /> */}
      <PatientsRecordsComponent />
    </>
  );
};

export default PatientsRecordsPage;
