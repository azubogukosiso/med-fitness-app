// LIBRARY IMPORTS
import { Navigate } from "react-router-dom";

// TYPE IMPORTS
import type { ReactNode } from "react";

// FUNCTION IMPORTS
import { useAuthContext } from "./../hooks/useAuthContext";

// PROP TYPE FOR THE PROTECTED ROUTE COMPONENT
type ProtectedRouteComponentProps = {
  children: ReactNode;
  requiredRole?: "doctor" | "patient";
};

const ProtectedRouteComponent = ({
  children,
  requiredRole,
}: ProtectedRouteComponentProps) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    if (requiredRole === "doctor" && !user?.isDoctor) {
      return <Navigate to="/patient" replace />;
    }
    if (requiredRole === "patient" && user?.isDoctor) {
      return <Navigate to="/doctor" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRouteComponent;
