// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// FUNCTION OR COMPONENT IMPORTS
import EditDoctorReportComponent from "../components/EditDoctorReportComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

// TYPE IMPORTS
import type { ExtendedPatientRecords } from "../types/ExtendedPatientRecordsType";

import { usePatientsRecordsContext } from "./../hooks/usePatientsRecordsContext";

const DoctorInputPage = () => {
  const location = useLocation();
  const { currentPage, pages } = usePatientsRecordsContext();

  console.log("Current page in EditDoctorReportPage: ", currentPage);
  console.log("Pages in EditDoctorReportPage: ", pages);

  const queryParams = new URLSearchParams(location.search);
  const recordId = queryParams.get("id");

  const {
    data: patientRecords,
    isLoading,
    error,
  } = useQuery<ExtendedPatientRecords | null>({
    queryKey: ["patientRecord", recordId],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/patient/record?id=${recordId}`,
        { credentials: "include" },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch patient record");
      }

      return (await res.json()) as import("../types/ExtendedPatientRecordsType").ExtendedPatientRecords;
    },
    enabled: !!recordId,
  });

  if (!recordId) return <p>Missing record id</p>;

  if (isLoading) return null;

  if (error) return <p>Failed to load patient record</p>;

  return (
    <>
      <PageHeaderComponent
        heading="Edit Patient Data"
        subheading="To be filled by the medical center doctor"
      />

      <EditDoctorReportComponent
        recordId={recordId as string}
        doctorReport={patientRecords?.doctorReport}
      />
    </>
  );
};

export default DoctorInputPage;
