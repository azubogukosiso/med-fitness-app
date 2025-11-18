import express from "express";

import { register, login, logout, verify } from "../controllers/auth";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyToken, verify);
router.post("/logout", logout);

export default router;
