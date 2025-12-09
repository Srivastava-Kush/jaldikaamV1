import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/auth.store";
export default function Register() {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    login("customer");
    navigate("/");
  }
  return (
    <div className="container" style={{ padding: 24 }}>
      <h2>Register (Demo)</h2>
      <form onSubmit={submit} style={{ marginTop: 12 }}>
        <input
          placeholder="Name"
          style={{ width: "100%", padding: 8, border: "1px solid #e5e7eb" }}
        />
        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #e5e7eb",
            marginTop: 8,
          }}
        />
        <div style={{ marginTop: 12 }}>
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}
