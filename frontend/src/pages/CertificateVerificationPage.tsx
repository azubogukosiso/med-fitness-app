import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Certificate {
  certificateId: string;
  nameOfPatient: string;
  faculty: string;
  department: string;
  issuedAt: string;
}

export default function CertificateVerificationPage() {
  const { certificateId } = useParams<{ certificateId: string }>();
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState<boolean | null>(null);
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!certificateId) return;

    async function verifyCertificate() {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/certificates/verify/${certificateId}`,
        );

        const data = await res.json();

        if (res.ok && data.valid) {
          setValid(true);
          setCertificate(data.certificate);
        } else {
          setValid(false);
        }
      } catch (err: any) {
        setValid(false);
      } finally {
        setLoading(false);
      }
    }

    verifyCertificate();
  }, [certificateId]);

  if (loading) return <p>Verifying certificate...</p>;

  if (!valid)
    return (
      <div className="max-w-[600px] mx-auto mt-12 p-5 border border-red-300 rounded-lg bg-red-50">
        <h2 className="text-red-600 text-xl font-semibold mb-4">
          Certificate Not Verified ❌
        </h2>

        <p className="text-red-700">
          This certificate could not be verified. It may be invalid, altered, or
          does not exist in our records.
        </p>
      </div>
    );

  return (
    <div className="max-w-[600px] mx-auto mt-12 p-5 border border-green-300 rounded-lg bg-green-50">
      <h2 className="text-green-600 text-xl font-semibold mb-4">
        Certificate Verified ✅
      </h2>

      <p className="mb-2">
        <strong>Certificate ID:</strong> {certificate?.certificateId}
      </p>

      <p className="mb-2">
        <strong>Patient Name:</strong> {certificate?.nameOfPatient}
      </p>

      <p className="mb-2">
        <strong>Faculty:</strong> {certificate?.faculty}
      </p>

      <p className="mb-2">
        <strong>Department:</strong> {certificate?.department}
      </p>

      <p className="mb-2">
        <strong>Issued At:</strong>{" "}
        {new Date(certificate!.issuedAt).toLocaleDateString()}
      </p>

      <p className="mt-4 text-sm text-gray-700">
        Note: The above details returned from the verification are to be
        regarded as the{" "}
        <span className="font-bold">ultimate source of truth</span>. <br />{" "}
        <br />
        Hence if there are any discrepancies between these details and those on
        the certificate,{" "}
        <span className="font-bold">
          the details above should be considered as correct and the those in the
          certificate, as altered.
        </span>
      </p>
    </div>
  );
}
