import express from "express";
import { verifyCertificate } from "../controllers/certificate";

const router = express.Router();

router.get("/verify/:certificateId", verifyCertificate);

export default router;
