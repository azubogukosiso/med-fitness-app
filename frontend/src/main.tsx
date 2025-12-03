// LIBRARY IMPORTS
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import { AuthContextProvider } from "./context/auth/AuthContextProvider";
import { PatientsRecordsContextProvider } from "./context/patientsRecords/PatientsRecordsContextProvider.tsx";
import App from "./App.tsx";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <PatientsRecordsContextProvider>
          <BrowserRouter>
            <Toaster duration={10000} richColors position="top-center" />
            <App />
          </BrowserRouter>
        </PatientsRecordsContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
