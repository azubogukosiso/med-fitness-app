// LIBRARY IMPORTS
import { useState } from "react";

// FUNCTION OR COMPONENT IMPORTS
import { useAuthContext } from "./../hooks/useAuthContext";

const LoginFormComponent = () => {
  const { login } = useAuthContext();

  const [schoolEmail, setSchoolEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <form className="w-1/2" onSubmit={(e) => login(e, schoolEmail, password)}>
      <h3>Log In to your account</h3>

      <div className="mt-5">
        <div className="flex flex-col mb-7">
          <label htmlFor="schoolEmail">School Email:</label>
          <input
            type="email"
            id="schoolEmail"
            value={schoolEmail}
            onChange={(e) => setSchoolEmail(e.target.value)}
            placeholder="Type out your school email here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="password">Password:</label>
          <span className="flex border border-black border-t-0 border-l-0 border-r-0 border-b-black p-1">
            <input
              type={isShowPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type out your password here..."
              className="focus:!outline-none p-2 bg-white w-full"
            />
            <button
              type="button"
              className="bg-black text-white p-3 rounded-lg active:scale-95 transition-all"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                // CLOSED EYE
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z" />
                </svg>
              ) : (
                // OPENED EYE
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" />
                </svg>
              )}
            </button>
          </span>
        </div>

        <button
          type="submit"
          className="rounded-md bg-black text-white p-2 w-full active:scale-95 transition-all"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginFormComponent;
