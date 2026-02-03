// LIBRARY IMPORTS
import { useState, useEffect } from "react";
import { toast } from "sonner";

// TYPE IMPORTS
import type { ReactNode } from "react";

// FUNCTION IMPORTS
import { AuthContext } from "./AuthContext";

// PROP TYPE FOR THE PROVIDER COMPONENT
type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<{
    token: string;
    schoolEmail: string;
    isDoctor: boolean;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/verify`,
        {
          credentials: "include",
        },
      );
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    } catch (err) {
      console.error("Auth check failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (
    e: React.SubmitEvent<HTMLFormElement>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    emailAddress: string,
  ) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/verify-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ emailAddress }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        if (data.success) {
          toast.success(data.message, {
            description:
              "A link for password creation has been sent to your email address",
          });
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Email verification failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const createPassword = async (
    e: React.SubmitEvent<HTMLFormElement>,
    password: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userId: string,
  ) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/create-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ password, userId }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message, {
          description: "You can now log in with your new password",
        });
        return { success: true };
      }

      toast.error(data.message);
      return { success: false };
    } catch (err) {
      console.error("Failed to create password:", err);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    e: React.SubmitEvent<HTMLFormElement>,
    emailAddress: string,
    password: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isDoctorLogin?: boolean,
  ) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ emailAddress, password, isDoctorLogin }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        return { success: true, message: data.message };
      }

      toast.error(data.message);
      return { success: false };
    } catch (err) {
      console.log("Error logging in: ", err);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (res.ok) {
        setUser(null);
      }
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    user,
    verifyEmail,
    createPassword,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
