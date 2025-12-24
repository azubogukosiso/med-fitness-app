// FUNCTION OR COMPONENT IMPORTS
import { useAuthContext } from "./../hooks/useAuthContext";

type PageHeaderComponentProps = {
  heading: string;
  subheading: string;
};

const PageHeaderComponent = ({
  heading,
  subheading,
}: PageHeaderComponentProps) => {
  const { user, logout } = useAuthContext();

  return (
    <header className="flex justify-between items-center">
      <div className="w-[40%]">
        <h2>ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
        <p>MEDICAL CENTRE ASSESSMENT SYSTEM</p>
      </div>

      <div className="flex flex-col w-[20%] justify-end items-end">
        <div>
          <h3 className="text-right">{heading}</h3>
          <p className="text-right">{subheading}</p>
        </div>

        {user && (
          <>
            <button
              className="rounded-md bg-black text-white px-3 py-2 text-sm mt-3 shadow-none active:scale-95 transition-all"
              onClick={() =>
                (
                  document.getElementById("my_modal_2") as HTMLDialogElement
                )?.showModal()
              }
            >
              View Profile
            </button>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-white border border-black">
                <form method="dialog">
                  <button className="rounded-md text-black hover:bg-gray-200 px-3 py-2 shadow-none active:scale-95 transition-all absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <h1 className="font-bold text-lg">User Profile</h1>
                <p className="mt-3">
                  <span className="font-medium">Email Address:</span>{" "}
                  {user?.schoolEmail}
                </p>
                <p className="mt-3">
                  <span className="font-medium">Account Type:</span> {user?.isDoctor ? "Doctor Account" : "Patient Account"}
                </p>

                <div className="flex justify-between">
                  <span className="block"></span>
                  <button
                    className="rounded-md bg-black text-white px-3 py-2 text-sm shadow-none active:scale-95 transition-all"
                    onClick={() => logout()}
                  >
                    Log Out
                  </button>
                </div>
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </>
        )}
      </div>
    </header>
  );
};

export default PageHeaderComponent;
