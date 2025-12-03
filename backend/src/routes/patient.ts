import express from "express";

import {
  createPatientRecord,
  retrievePatientsRecords,
  inputDoctorReport,
  issueCertViaEmail,
} from "../controllers/patient";

const router = express.Router();

router.post("/record", createPatientRecord);
router.get("/records", retrievePatientsRecords);
router.post("/report", inputDoctorReport);
router.post("/send-email", issueCertViaEmail);

export default router;
