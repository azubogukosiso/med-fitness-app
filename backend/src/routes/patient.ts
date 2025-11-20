import express from "express";

import {
  createPatientRecord,
  retrievePatientsRecords,
} from "../controllers/patient";

const router = express.Router();

router.post("/record", createPatientRecord);
router.get("/records", retrievePatientsRecords);

export default router;
