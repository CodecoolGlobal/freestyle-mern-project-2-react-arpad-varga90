import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import CollectedStamps from "./components/CollectedStamps";
import auth from "../../firebase/auth";
import GuestOnly from "../../components/GuestOnly";
import AuthOnly from "../../components/AuthOnly";

export default function MenuBar() {
  const [SignInWithGoogle, userGoogle, signInGoogleLoading] =
    useSignInWithGoogle(auth);
  const [signOut, signOutLoading] = useSignOut(auth);
  const [user] = useAuthState(auth);

  function handleGoogleAuth() {
    SignInWithGoogle();
  }
  return (
    <>
      <GuestOnly>
        <div className="bg-gray-800 text-white w-1/4 h-full flex flex-col items-center py-4">
          <button
            disabled={signInGoogleLoading}
            className="btn btn-primary mb-4"
            onClick={handleGoogleAuth}
          >
            Bejelentkezés
          </button>
        </div>
      </GuestOnly>
      <AuthOnly>
        <div className="bg-gray-800 text-white w-1/4 h-full flex flex-col items-center py-4">
          <h1>
            Szia {user?.displayName?.split(" ")[0] ?? user?.email ?? "anonymus"}
          </h1>
          <CollectedStamps/>
          <button
            disabled={signOutLoading}
            className="btn btn-error mb-4"
            onClick={signOut}
          >
            Kijelentkezés
          </button>
        </div>
      </AuthOnly>
    </>
  );
}