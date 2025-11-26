import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth/AuthContextProvider";
import { PatientsRecordsContextProvider } from "./context/patientsRecords/PatientsRecordsContextProvider.tsx";

import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <PatientsRecordsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PatientsRecordsContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
