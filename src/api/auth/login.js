import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn("google")}>Accedi con Google</button>
    </div>
  );
}