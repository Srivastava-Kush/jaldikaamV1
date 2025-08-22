import { useState } from "react";
import { useAuthStore } from "../../stores/auth.store";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [role, setRole] = useState("customer");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    login(role);
    navigate("/");
  }
  return (
    <div className="container" style={{ padding: 24 }}>
      <h2>Login (Demo)</h2>
      <p style={{ color: "#6b7280" }}>Choose a role to simulate login</p>
      <form onSubmit={submit} style={{ marginTop: 12 }}>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: 8, border: "1px solid #e5e7eb", width: "100%" }}
        >
          <option value="customer">Customer</option>
          <option value="provider">Provider</option>
          <option value="admin">Admin</option>
        </select>
        <div style={{ marginTop: 12 }}>
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}
