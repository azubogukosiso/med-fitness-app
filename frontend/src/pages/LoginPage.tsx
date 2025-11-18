// FUNCTION OR COMPONENT IMPORTS
import LoginFormComponent from "../components/LoginFormComponent";

const LoginPage = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="w-[40%]">
          <h2>ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
          <p>MEDICAL CENTRE ASSESSMENT FORM</p>
        </div>

        <div className="flex flex-col w-[20%] justify-end items-end">
          <h3>User Log In</h3>
          <p>Log in to your patient/doctor account</p>
        </div>
      </header>

      <div className="flex flex-col h-[79vh] items-center justify-center">
        <LoginFormComponent />
      </div>
    </>
  );
};

export default LoginPage;
