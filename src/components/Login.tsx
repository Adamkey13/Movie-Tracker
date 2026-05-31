import { useRef, useState } from "preact/hooks";
import { loginUser, registerUser } from "../utils/storage";
import { loginWithEmail, registerWithEmail } from "../services/authService";


export function Login() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [registering, setRegistering] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      setMessage("Please fill in both fields.");
      return;
    }

    try {
      await loginWithEmail(email.trim(), password);
    } catch {
      setMessage("Wrong email or password.");
    }
  }

  async function handleRegister() {
    if (!displayName.trim() || !email.trim() || !password.trim()) {
      setMessage("Please fill in every field.");
      return;
    }

    try {
      await registerWithEmail(email.trim(), password, displayName.trim());
    } catch {
      setMessage("Could not create account. Maybe this email is already used.");
    }
  }

  return (
    <main className="grid min-h-screen place-items-center px-5 py-10">
      <section className="w-full max-w-[460px] rounded-[32px] border-2 border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_92%,transparent)] p-8 text-[var(--text-color)] shadow-2xl backdrop-blur-md">
        <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-[var(--accent-color)]">
          Movie Journal
        </p>

        <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
          Track what you watch
        </h1>

        <p className="mt-4 leading-7 text-[var(--muted-color)]">
          Save movies and series, write reviews, rate them, and know
          where you left off exactly.
        </p>

        <div className="mt-7 grid gap-4">
          {registering && (
          <input
            className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-4 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onInput={(e) => setDisplayName((e.target as HTMLInputElement).value)}
          />)}

          <input
            className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-4 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
            type="email"
            placeholder="Email"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                passwordInputRef.current?.focus();
              }
            }}
          />

          <input
            ref={passwordInputRef}
            className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-4 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
            type="password"
            placeholder="Password"
            value={password}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

          {message && (
            <p className="m-0 text-center font-bold text-[red]">{message}</p>
          )}

          {!registering ? (
            <button
              className="cursor-pointer rounded-full border border-[var(--outline-color)] bg-[var(--button-color)] px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
              onClick={handleLogin}
            >
              Login
            </button>
          ) : null}

          {registering && (
            <button
              className="cursor-pointer rounded-full border-2 border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
              onClick={handleRegister}
            >
              Create account
            </button>
          )}

          {registering ? (
            <p className="m-0 mt-4 text-center text-sm text-[var(--muted-color)]">
              Already have an account?{" "}
              <button
                className="cursor-pointerfont-bold text-[var(--outline-color)] underline"
                onClick={() => setRegistering(false)}
              >
                Login here.
              </button>
            </p>
          ) : (
            <p className="m-0 mt-4 text-center text-sm text-[var(--muted-color)]">
              Don't have an account?{" "}
              <button
                className="cursor-pointer font-bold text-[var(--outline-color)] underline"
                onClick={() => setRegistering(true)}
              >
                Create one here.
              </button>
            </p>
          )}

        </div>
      </section>
    </main>
  );
}