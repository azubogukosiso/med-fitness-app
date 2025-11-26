// LIBRARY IMPORTS
import { createContext } from "react";

// TYPE IMPORTS
import type { PatientsRecordsContextType } from "./types";

export const PatientsRecordsContext =
  createContext<PatientsRecordsContextType | null>(null);
