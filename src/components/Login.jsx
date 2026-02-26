import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Styles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      navigate("/products");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>

          <p>
            New user? <Link to="/signup">Register Here</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
