import { useRef, useState } from "preact/hooks";
import { loginUser, registerUser } from "../utils/storage";

type LoginProps = {
  onLoginSuccess: (username: string) => void;
};

export function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const passwordInputRef = useRef<HTMLInputElement>(null);

  function handleLogin() {
    if (!username.trim() || !password.trim()) {
      setMessage("Please fill in both fields.");
      return;
    }

    const result = loginUser(username.trim(), password);

    if (!result.success || !result.username) {
      setMessage(result.message);
      return;
    }

    onLoginSuccess(result.username);
  }

  function handleRegister() {
    if (!username.trim() || !password.trim()) {
      setMessage("Please fill in both fields.");
      return;
    }

    const result = registerUser(username.trim(), password);

    if (!result.success || !result.username) {
      setMessage(result.message);
      return;
    }

    onLoginSuccess(result.username);
  }

  return (
    <main className="grid min-h-screen place-items-center px-5 py-10">
      <section className="w-full max-w-[460px] rounded-[32px] border border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_92%,transparent)] p-8 text-[var(--text-color)] shadow-2xl backdrop-blur-md">
        <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-[var(--accent-color)]">
          Movie Journal
        </p>

        <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
          Track what you watch
        </h1>

        <p className="mt-4 leading-7 text-[var(--muted-color)]">
          Save movies and series, write reviews, rate them, and continue exactly
          where you left off.
        </p>

        <div className="mt-7 grid gap-4">
          <input
            className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-4 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
            type="text"
            placeholder="Username"
            value={username}
            onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
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
            <p className="m-0 font-bold text-[var(--accent-color)]">{message}</p>
          )}

          <button
            className="rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
            onClick={handleLogin}
          >
            Login
          </button>

          <button
            className="rounded-full border border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
            onClick={handleRegister}
          >
            Create account
          </button>
        </div>
      </section>
    </main>
  );
}