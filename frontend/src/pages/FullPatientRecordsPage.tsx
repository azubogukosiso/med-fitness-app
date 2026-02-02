// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// FUNCTION OR COMPONENT IMPORTS
import FullPatientRecordsComponent from "../components/FullPatientRecordsComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

// TYPE IMPORTS
import type { ExtendedPatientRecords } from "../types/ExtendedPatientRecordsType";

const FullPatientRecordsPage = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const recordId = queryParams.get("id");

  const {
    data: patientRecords,
    isLoading,
    error,
  } = useQuery<ExtendedPatientRecords | undefined>({
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

  console.log("Patient Records: ", patientRecords);

  return (
    <>
      <PageHeaderComponent
        heading="Full Patient Records"
        subheading="To be filled by the medical center doctor"
      />

      <FullPatientRecordsComponent patientRecords={patientRecords} />
    </>
  );
};

export default FullPatientRecordsPage;
