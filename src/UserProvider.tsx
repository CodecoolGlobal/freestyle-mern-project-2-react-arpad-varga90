import { type User } from "firebase/auth";
import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase/auth";

export const UserContext = createContext<User | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);
  
  if (loading || typeof user === 'undefined') {
    return <div>Loading...</div>
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(UserContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthUnsafe() {
  return useAuth()!;
}
