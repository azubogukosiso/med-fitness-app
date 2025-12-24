import { Request, Response } from "express";

import { sendEmailWithPDF } from "../functions/sendEmailWithPDF";
import { cloudinaryImageUpload } from "../functions/cloudinaryImageUpload";

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
    const recordId = req.query.id;

    const uploadedFile = req.file;

    const imgURL = await cloudinaryImageUpload(
      uploadedFile!,
      "esut_med_fitness_app"
    );

    const relevantExaminationFormData = JSON.parse(
      req.body.relevantExaminationFormData
    );
    const cardiovascularSystemsFormData = JSON.parse(
      req.body.cardiovascularSystemsFormData
    );
    const centralNervousSystemFormData = JSON.parse(
      req.body.centralNervousSystemFormData
    );
    const respiratorySystemFormData = JSON.parse(
      req.body.respiratorySystemFormData
    );
    const gastrointestinalTractSystemFormData = JSON.parse(
      req.body.gastrointestinalTractSystemFormData
    );
    const gentoUrinarySystemFormData = JSON.parse(
      req.body.gentoUrinarySystemFormData
    );
    const commentsFormData = JSON.parse(req.body.commentsFormData);

    commentsFormData.signatureOfDoctor = imgURL;

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
      { new: true }
    );

    if (updatedPatientRecord) {
      res.status(201).json({ message: "Doctor's report added!" });
    }
  } catch (err: any) {
    console.log("Over here now: ", err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const issueCertViaEmail = async (req: Request, res: Response) => {
  try {
    const message = await sendEmailWithPDF(
      {
        to: "azuboguko@gmail.com",
        subject: "Your Document",
        text: "Please find your document attached.",
      },
      req.body.patientName
    );

    if (message) {
      res.status(200).json({ message });
    }
  } catch (error) {
    console.log("Here we are again:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
