// controllers/certificate.controller.ts
import { Request, Response } from "express";
import Certificate from "../models/certificate";
import { generateCertificateHash } from "../functions/generateCertificateHash";

export async function verifyCertificate(req: Request, res: Response) {
  try {
    const { certificateId } = req.params;

    const certificate = await Certificate.findOne({ certificateId });

    if (!certificate) {
      return res.status(404).json({
        valid: false,
        reason: "Certificate not found",
      });
    }

    const recomputedHash = generateCertificateHash(certificate.certificateId, {
      patientName: certificate.nameOfPatient,
      age: certificate.age,
      sex: certificate.sex,
      faculty: certificate.faculty,
      department: certificate.department,
      maritalStatus: certificate.maritalStatus,
      noOfChildren: certificate.noOfChildren,
    });

    if (recomputedHash !== certificate.hash) {
      return res.status(400).json({
        valid: false,
        reason: "Certificate integrity check failed",
      });
    }

    return res.status(200).json({
      valid: true,
      certificate: {
        certificateId: certificate.certificateId,
        nameOfPatient: certificate.nameOfPatient,
        issuedAt: certificate.createdAt,
        faculty: certificate.faculty,
        department: certificate.department,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      valid: false,
      reason: "Internal verification error",
    });
  }
}
