import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

const isProduction = process.env.NODE_ENV === "production";

export const register = async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  const user = await User.create(req.body);
  if (user) {
    res.status(201).json({ message: "User created!" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { schoolEmail, password } = req.body;

    const user = await User.findOne({ schoolEmail });
    if (!user) {
      return res.status(400).json({ message: "This user does not exist!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { userId: user._id, schoolEmail: user.schoolEmail },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Login successful",
      user: { schoolEmail: user.schoolEmail, isDoctor: user.isDoctor },
    });
  } catch (err: any) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const verify = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json({ authenticated: true, user });
  } catch (err) {
    console.log("Error!");
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful" });
};
