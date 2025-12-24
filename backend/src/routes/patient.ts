import express from "express";
import multer from "multer";

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

import {
  createPatientRecord,
  retrievePatientsRecords,
  inputDoctorReport,
  issueCertViaEmail,
} from "../controllers/patient";

const router = express.Router();

router.post("/record", createPatientRecord);
router.get("/records", retrievePatientsRecords);
router.post("/report", upload.single("signatureOfDoctor"), inputDoctorReport);
router.post("/send-email", issueCertViaEmail);

export default router;
