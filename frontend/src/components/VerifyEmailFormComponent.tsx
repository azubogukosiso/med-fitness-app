// LIBRARY IMPORTS
import { useState } from "react";
import { Link } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import { useAuthContext } from "../hooks/useAuthContext";

const VerifyEmailFormComponent = () => {
  const { verifyEmail } = useAuthContext();

  const [emailAddress, setEmailAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      className="w-1/2"
      onSubmit={(e) => verifyEmail(e, setIsLoading, emailAddress)}
    >
      <h3>Verify your email address</h3>

      <div className="mt-5">
        <div className="flex flex-col mb-7">
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Type out your school email here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <button
          type="submit"
          className={`rounded-md bg-black text-white p-2 w-full active:scale-95 transition-all ${
            isLoading && "opacity-65 cursor-not-allowed"
          }`}
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>
      </div>

      <p className="mt-5">
        Click here to{" "}
        <Link to="/login" className="underline">
          login to your account
        </Link>
      </p>
    </form>
  );
};

export default VerifyEmailFormComponent;
