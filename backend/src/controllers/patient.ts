import { Request, Response } from "express";
import { randomUUID } from "crypto";

import { sendEmailWithPDF } from "../functions/sendEmailWithPDF";
import { cloudinaryImageUpload } from "../functions/cloudinaryImageUpload";

import PatientData from "../models/patientData";
import Certificate from "../models/certificate";
import { generateCertificateHash } from "../functions/generateCertificateHash";

export const createPatientRecord = async (req: Request, res: Response) => {
  try {
    const patientRecord = await PatientData.create(req.body.formData);
    if (patientRecord) {
      res.status(201).json({ message: "Your record has been created!" });
    }
  } catch (err: any) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const retrievePatientsRecords = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const cursor = req.query.cursor as string | undefined;

  const query = cursor ? { _id: { $lt: cursor } } : {};

  const records = await PatientData.find(query)
    .sort({ _id: -1 })
    .limit(limit + 1);

  const hasNextPage = records.length > limit;

  const slicedRecords = hasNextPage ? records.slice(0, limit) : records;

  const nextCursor =
    slicedRecords.length > 0 && hasNextPage
      ? slicedRecords[slicedRecords.length - 1]?._id
      : null;

  res.json({
    records: slicedRecords,
    nextCursor,
    hasNextPage,
  });
};

export const inputDoctorReport = async (req: Request, res: Response) => {
  try {
    const recordId = req.query.id;

    const relevantExaminationFormData = JSON.parse(
      req.body.relevantExaminationFormData,
    );
    const cardiovascularSystemsFormData = JSON.parse(
      req.body.cardiovascularSystemsFormData,
    );
    const centralNervousSystemFormData = JSON.parse(
      req.body.centralNervousSystemFormData,
    );
    const respiratorySystemFormData = JSON.parse(
      req.body.respiratorySystemFormData,
    );
    const gastrointestinalTractSystemFormData = JSON.parse(
      req.body.gastrointestinalTractSystemFormData,
    );
    const gentoUrinarySystemFormData = JSON.parse(
      req.body.gentoUrinarySystemFormData,
    );
    const commentsFormData = JSON.parse(req.body.commentsFormData);

    const formData = {
      relevantExaminationFormData,
      cardiovascularSystemsFormData,
      centralNervousSystemFormData,
      respiratorySystemFormData,
      gastrointestinalTractSystemFormData,
      gentoUrinarySystemFormData,
      commentsFormData,
    };

    const updatedPatientRecord = await PatientData.findByIdAndUpdate(
      recordId,
      {
        doctorReport: formData,
      },
      { new: true },
    );

    if (updatedPatientRecord) {
      res.status(201).json({ message: "Doctor's report added!" });
    }
  } catch (err: any) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const issueCertViaEmail = async (req: Request, res: Response) => {
  try {
    const certificateId = randomUUID();

    const certificateHash = generateCertificateHash(
      certificateId,
      req.body.patientProfile,
    );

    const createdCertificate = await Certificate.create({
      certificateId,
      nameOfPatient: req.body.patientProfile.patientName,
      age: req.body.patientProfile.age,
      sex: req.body.patientProfile.sex,
      faculty: req.body.patientProfile.faculty,
      department: req.body.patientProfile.department,
      maritalStatus: req.body.patientProfile.maritalStatus,
      noOfChildren: req.body.patientProfile.noOfChildren,
      hash: certificateHash,
    });

    if (createdCertificate) {
      const message = await sendEmailWithPDF(
        req.body.patientProfile,
        req.body.email,
        certificateId,
        certificateHash,
      );

      if (message) {
        res
          .status(200)
          .json({ message: "Email sent successfully!", info: message });
      }
    }
  } catch (error) {
    console.log("Here we are again:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

export const retrieveSinglePatientRecord = async (
  req: Request,
  res: Response,
) => {
  try {
    const recordId = req.query.id as string | undefined;

    if (!recordId) {
      return res.status(400).json({ message: "Record id is required" });
    }

    const record = await PatientData.findById(recordId);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(record);
  } catch (err: any) {
    console.error("Failed to retrieve patient record:", err);
    res
      .status(500)
      .json({ message: "Server error", error: err?.message ?? err });
  }
};
