import { Request, Response } from "express";
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

export const retrievePatientsRecords = async (teq: Request, res: Response) => {
  try {
    const allPatientsRecords = await PatientData.find();

    if (allPatientsRecords) {
      res.status(200).json({ records: allPatientsRecords });
    }
  } catch (err: any) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
