import { useEffect, useMemo, useState, useRef } from "preact/hooks";
import { loginUser, registerUser } from "../utils/storage";
import "../styles/Login.css";

type LoginProps = {
  onLoginSuccess: (username: string) => void;
};

export function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [register, setRegister] = useState(false);

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
    <main className="login-page">
      <section className="login-card">
        <p className="login-kicker">Movie Journal</p>
        <h1>Track what you watch</h1>
        <p className="login-text">
          Save movies and series, write reviews, rate them, and see exactly
          where you left off.
        </p>

        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                passwordInputRef.current?.focus();
              }
            }}

          />

          <input
            ref={passwordInputRef}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

          {message && <p className="login-message">{message}</p>}

          {!register && <div>
            <button className="primary-button" onClick={handleLogin}>
              Login
            </button>
            <p className="account-question">Don't have an account? <a href="" onClick={e => {
              e.preventDefault();
              setRegister(true);
            }}>
              Register
              </a></p>
          </div> }
          
          
          {register && <div>
            <button className="primary-button" onClick={handleRegister}>
              Create account
            </button>
            <p className="account-question">Already have an account? <a href="" onClick={e => {
              e.preventDefault();
              setRegister(false);
              }}>
                Login
                </a></p>
          </div> }
        </div>
      </section>
    </main>
  );
}