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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/verify", {
        credentials: "include",
      });
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
    password: string
  ) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ schoolEmail, password }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setUser(data.user);
      return { success: true };
    }
    return { success: false, message: data.message };
  };

  const logout = async () => {
    await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
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
