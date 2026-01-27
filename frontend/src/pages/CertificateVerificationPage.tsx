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
  const [error, setError] = useState<string | null>(null);

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
          setError(data.reason);
        }
      } catch (err: any) {
        setValid(false);
        setError(err?.res?.data?.reason || "Verification failed");
      } finally {
        setLoading(false);
      }
    }

    verifyCertificate();
  }, [certificateId]);

  if (loading) return <p>Verifying certificate...</p>;

  if (!valid)
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Certificate Invalid ❌</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2 style={{ color: "green" }}>Certificate Verified ✅</h2>
      <p>
        <strong>Certificate ID:</strong> {certificate?.certificateId}
      </p>
      <p>
        <strong>Patient Name:</strong> {certificate?.nameOfPatient}
      </p>
      <p>
        <strong>Faculty:</strong> {certificate?.faculty}
      </p>
      <p>
        <strong>Department:</strong> {certificate?.department}
      </p>
      <p>
        <strong>Issued At:</strong>{" "}
        {new Date(certificate!.issuedAt).toLocaleDateString()}
      </p>
    </div>
  );
}
