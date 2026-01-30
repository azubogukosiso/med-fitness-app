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

export const editDoctorReportWithNewSignature = async (
  req: Request,
  res: Response,
) => {
  try {
    const recordId = req.query.id;

    const uploadedFile = req.file;

    const imgURL = await cloudinaryImageUpload(
      uploadedFile!,
      "esut_med_fitness_app",
    );

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
      { new: true },
    );

    if (updatedPatientRecord) {
      res.status(201).json({ message: "Doctor's report added!" });
    }
  } catch (err: any) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const editDoctorReportWithOldSignature = async (
  req: Request,
  res: Response,
) => {
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
