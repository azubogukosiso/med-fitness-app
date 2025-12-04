// FUNCTION OR COMPONENT IMPORTS
import LoginFormComponent from "../components/LoginFormComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

const LoginPage = () => {
  return (
    <>
      <PageHeaderComponent
        heading="User Log In"
        subheading="Log in to your patient/doctor account"
      />

      <div className="flex flex-col h-[79vh] items-center justify-center">
        <LoginFormComponent />
      </div>
    </>
  );
};

export default LoginPage;
