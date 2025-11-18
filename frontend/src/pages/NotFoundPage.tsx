// LIBRARY IMPORTS
import { Link } from "react-router-dom";

// FUNCTION OR COMPONENT IMPORTS
import { useAuthContext } from "../hooks/useAuthContext";

const NotFoundPage = () => {
  const { user } = useAuthContext();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to={user ? (user.isDoctor ? "/doctor" : "/patient") : "/login"}
          className="px-6 py-3 bg-black text-white rounded-md active:scale-95 transition-all"
        >
          {user ? "Go to Dashboard" : "Go to Login"}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
