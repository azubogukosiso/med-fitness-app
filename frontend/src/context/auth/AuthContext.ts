// LIBRARY IMPORTS
import { createContext } from "react";

// TYPE IMPORTS
import type { AuthContextType } from "./types";

export const AuthContext = createContext<AuthContextType | null>(null);
