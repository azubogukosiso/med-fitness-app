import express from "express";

import {
  createPatientRecord,
  retrievePatientsRecords,
  inputDoctorReport,
} from "../controllers/patient";

const router = express.Router();

router.post("/record", createPatientRecord);
router.get("/records", retrievePatientsRecords);
router.post("/report", inputDoctorReport);

export default router;
