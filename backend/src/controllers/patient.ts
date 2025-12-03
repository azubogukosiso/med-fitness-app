import { Request, Response } from "express";

import { sendEmailWithPDF } from "../functions/sendEmailWithPDF";

import PatientData from "../models/patientData";

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
  try {
    const allPatientsRecords = await PatientData.find();

    if (allPatientsRecords) {
      res.status(200).json({ records: allPatientsRecords });
    }
  } catch (err: any) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const inputDoctorReport = async (req: Request, res: Response) => {
  try {
    const { formData } = req.body;
    const recordId = req.query.id;

    const updatedPatientRecord = await PatientData.findByIdAndUpdate(
      recordId,
      {
        doctorReport: formData,
      },
      { new: true }
    );

    if (updatedPatientRecord) {
      res.status(201).json({ message: "Doctor's report added!" });
    }
  } catch (err: any) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const issueCertViaEmail = async (req: Request, res: Response) => {
  try {
    const message = await sendEmailWithPDF(
      {
        to: req.body.email,
        subject: "Your Document",
        text: "Please find your document attached.",
      },
      req.body.patientName
    );

    if (message) {
      res.status(200).json({ message });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};
