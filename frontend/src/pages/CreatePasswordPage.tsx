// FUNCTION OR COMPONENT IMPORTS
import CreatePasswordFormComponent from "../components/CreatePasswordFormComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

const CreatePasswordPage = () => {
  return (
    <>
      <PageHeaderComponent
        heading="Create Password"
        subheading="Create a password for your patient account"
      />

      <div className="flex flex-col h-[79vh] items-center justify-center">
        <CreatePasswordFormComponent />
      </div>
    </>
  );
};

export default CreatePasswordPage;
