import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Header = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-row gap-4">
      {user ? (
        <span>{user.email}</span>
      ) : (
        <Link to="/login" className="m-4 inline-block text-blue-500 underline">
          Login
        </Link>
      )}
      <Link to="/" className="m-4 inline-block text-blue-500 underline">
        Formulaire
      </Link>
      <Link to="/list" className="m-4 inline-block text-blue-500 underline">
        Liste des candidatures
      </Link>
    </div>
  );
};
