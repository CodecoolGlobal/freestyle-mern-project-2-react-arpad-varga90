import auth from "../firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

import "./LoginPage.css";

export default function LoginPage() {
  const [signIn, user, loading] = useSignInWithGoogle(auth);

  function handleGoogleAuth() {
    signIn();
  }

  if (user) {
    return <Navigate to="/movies" />
  }

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-content">
          <h1>Üdvözlünk Kéktúra honlapunkon</h1>
          <p>Vedd fel a túracipőt és már indulhatunk is!</p>
          <button
            disabled={loading}
            className="google-login-button"
            onClick={handleGoogleAuth}
          >
            Bejelentkezés Google-fiókkal
          </button>
        </div>
      </div>
    </main>
  );
}
