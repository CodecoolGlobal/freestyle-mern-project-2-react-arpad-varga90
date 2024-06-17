import { Navigate } from "react-router-dom";
import { useAuth } from "../UserProvider";

export default function AuthOnly({ children }: { children: React.ReactNode }) {
  const user = useAuth();

  if (user) {
    return <>{children}</>
  }

  return <Navigate to="/login" />
}
