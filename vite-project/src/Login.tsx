import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate(); // Initialize the navigate hook from React Router

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (username.trim() === "" || password.trim() === "") {
      setError("Both fields are required.");
      return;
    }

    try {
      // Send username and password to the backend login endpoint
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const result = await response.json();

      // Optionally, store the result (e.g., token) in localStorage
      localStorage.setItem("user", JSON.stringify(result));

      // Reset error state
      setError(null);

      // Redirect to the root ("/") after login success
      navigate("/");

    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred.");
    }
  };

  return (
    <div className='w-[400px] m-0 p-1'>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className='flex flex-col w-[400px] gap-2 justify-center'>
          <div className='flex w-[400px] basis-1/3 items-left'>
            <label className='basis-1/4 text-black' htmlFor="username">Username:</label>
            <input
              className='basis-3/4 border-2 text-black'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex w-[400px] basis-1/3'>
            <label className='basis-1/4 text-black' htmlFor="password">Password:</label>
            <input
              className='basis-3/4 border-2 text-black'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex w-[400px] basis-1/3'>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "#007BFF",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
