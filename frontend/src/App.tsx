// LIBRARY IMPORTS
import { Routes, Route, Navigate } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";
import PublicRouteComponent from "./components/PublicRouteComponent";

import LoginPage from "./pages/LoginPage";
import PatientInputPage from "./pages/PatientInputPage";
import DoctorInputRecordsPage from "./pages/DoctorInputRecordsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PatientsRecordsPage from "./pages/PatientsRecordsPage";
import FullPatientRecordsPage from "./pages/FullPatientRecordsPage";
import EditDoctorReportPage from "./pages/EditDoctorReportPage";
import CertificateVerificationPage from "./pages/CertificateVerificationPage";

// import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  // const { user } = useAuthContext();

  return (
    <div className="min-h-screen p-5">
      <Routes>
        <Route path="/" element={<Navigate to="/patient" />}></Route>
        <Route
          path="/login"
          element={
            <PublicRouteComponent>
              <LoginPage />
            </PublicRouteComponent>
          }
          // element={user ? <Navigate to="/patient" /> : <LoginPage />}
        ></Route>
        <Route
          path="/patient"
          element={
            <ProtectedRouteComponent requiredRole="patient">
              <PatientInputPage />
            </ProtectedRouteComponent>
          }
          // element={user ? <PatientInputPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/doctor/records"
          element={
            <ProtectedRouteComponent requiredRole="doctor">
              <PatientsRecordsPage />
            </ProtectedRouteComponent>
          }
        ></Route>
        <Route
          path="/doctor/report"
          element={
            <ProtectedRouteComponent requiredRole="doctor">
              <DoctorInputRecordsPage />
            </ProtectedRouteComponent>
          }
        ></Route>
        <Route
          path="/doctor/edit-report"
          element={
            <ProtectedRouteComponent requiredRole="doctor">
              <EditDoctorReportPage />
            </ProtectedRouteComponent>
          }
        ></Route>
        <Route
          path="/doctor/record"
          element={
            <ProtectedRouteComponent requiredRole="doctor">
              <FullPatientRecordsPage />
            </ProtectedRouteComponent>
          }
        ></Route>
        <Route
          path="/verify/:certificateId"
          element={<CertificateVerificationPage />}
        />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
