// LIBRARY IMPORTS
import { useNavigate } from "react-router-dom";

// FUNCTION IMPORTS
import PatientInputFormComponent from "../components/PatientInputFormComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

import { useAuthContext } from "./../hooks/useAuthContext";

const PatientInputPage = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <PageHeaderComponent
        heading="Patient Data"
        subheading="To be filled by the patient"
      />

      <PatientInputFormComponent />
    </>
  );
};

export default PatientInputPage;
