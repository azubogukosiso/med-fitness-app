import crypto from "crypto";
import { PatientProfile } from "../types/PatientProfileType";

export const generateCertificateHash = (
  certificateId: string,
  patientProfile: PatientProfile,
) => {
  const canonicalString = [
    certificateId,
    patientProfile.patientName.trim().toLowerCase(),
    patientProfile.age,
    patientProfile.sex.trim().toLowerCase(),
    patientProfile.faculty.trim().toLowerCase(),
    patientProfile.department.trim().toLowerCase(),
    patientProfile.maritalStatus.trim().toLowerCase(),
    patientProfile.noOfChildren,
  ].join("|");

  return crypto
    .createHmac("sha256", process.env.CERT_SECRET!)
    .update(canonicalString)
    .digest("hex");
};
