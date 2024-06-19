import auth from "../firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function MenuBar() {
  const [signIn, user, loading] = useSignInWithGoogle(auth);

  function handleGoogleAuth() {
    signIn();
  }

  if (user) {
    //return <Navigate to="/movies" />
  }

  return (
    <div className="bg-gray-800 text-white w-[20%] h-full flex flex-col items-center py-4 fixed top-0 left-0">
      <button
        disabled={loading}
        className="btn btn-primary mb-4"
        onClick={handleGoogleAuth}
      >
        Bejelentkezés
      </button>
      {/* Add more buttons or menu items here later */}
    </div>
  );
}
