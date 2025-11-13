import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import PatientInputPage from "./pages/PatientInputPage";
import DoctorInputPage from "./pages/DoctorInputPage";

function App() {
  return (
    <div className="min-h-screen p-5">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/patient" element={<PatientInputPage />}></Route>      
        <Route path="/doctor" element={<DoctorInputPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
