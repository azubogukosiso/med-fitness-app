// LIBRARY IMPORTS
import { useState, useEffect } from "react";

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
        }
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

  const login = async (
    e: React.FormEvent<HTMLFormElement>,
    schoolEmail: string,
    password: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
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
          body: JSON.stringify({ schoolEmail, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        return { success: true, message: data.message };
      }

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
        }
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
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
