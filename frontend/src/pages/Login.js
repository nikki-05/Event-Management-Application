import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

function Login() {
  const [email, setEmail] = useState("sampleuser@example.com");
  const [password, setPassword] = useState("Sample@123");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <img
          src="https://img.freepik.com/free-vector/young-people-waving-hand_23-2148377945.jpg?t=st=1739259942~exp=1739263542~hmac=d5a1910b174338980682ad6226e991dba53e897dd92c226580442550cae14563&w=996"
          alt="Welcome"
          className="login-image"
        />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>Use sample credentials:</p>
        <p><strong>Email:</strong> sampleuser@example.com</p>
        <p><strong>Password:</strong> Sample@123</p>
      </div>
    </div>
  );
}

export default Login;
