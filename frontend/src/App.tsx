// LIBRARY IMPORTS
import { Routes, Route, Navigate } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";
import PublicRouteComponent from "./components/PublicRouteComponent";

import LoginPage from "./pages/LoginPage";
import PatientInputPage from "./pages/PatientInputPage";
import DoctorInputPage from "./pages/DoctorInputPage";
import NotFoundPage from "./pages/NotFoundPage";
import PatientsRecordsPage from "./pages/PatientsRecordsPage";

function App() {
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
        ></Route>
        <Route
          path="/patient"
          element={
            <ProtectedRouteComponent requiredRole="patient">
              <PatientInputPage />
            </ProtectedRouteComponent>
          }
        ></Route>
        <Route
          path="/doctor/records"
          element={
            <ProtectedRouteComponent requiredRole="doctor">
              <PatientsRecordsPage />
            </ProtectedRouteComponent>
          }
        ></Route>
        {/* <Route
          path="/doctor/records"
          element={
            <ProtectedRouteComponent requiredRole="doctor">
              <DoctorInputPage />
            </ProtectedRouteComponent>
          }
        ></Route> */}
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
