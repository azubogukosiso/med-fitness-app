// FUNCTION OR COMPONENT IMPORTS
import VerifyEmailFormComponent from "../components/VerifyEmailFormComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

const VerifyEmailPage = () => {
  return (
    <>
      <PageHeaderComponent
        heading="Verify Email"
        subheading="Email verification for patient accounts"
      />

      <div className="flex flex-col h-[79vh] items-center justify-center">
        <VerifyEmailFormComponent />
      </div>
    </>
  );
};

export default VerifyEmailPage;
