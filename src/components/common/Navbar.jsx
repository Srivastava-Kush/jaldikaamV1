import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import { useAuthStore } from "../../stores/auth.store";
import "../../styles/Navbar.css";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="nav-left">
          <Link to="/" className="brand">
            Jaldikaam
          </Link>
        </div>
        <div className="nav-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
          >
            <button className="nav-link btn">Services ▾</button>
            {servicesOpen && (
              <div
                className="dropdown-panel"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {categories.map((g) => (
                  <div key={g.group} className="dropdown-group">
                    <h4>{g.group}</h4>
                    <ul>
                      {g.items.map((i) => (
                        <li key={i.slug}>
                          <Link to={`/search?category=${i.slug}`}>
                            {i.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/support" className="nav-link">
            Contact
          </Link>
          <form
            action="/search"
            method="GET"
            className="search"
            style={{ marginLeft: 12 }}
          >
            <input name="q" placeholder="Search services..." />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="nav-right">
          {!user && (
            <>
              <Link to="/auth/login" className="nav-link">
                Login
              </Link>
              <Link to="/auth/register" className="btn btn-primary">
                Sign up
              </Link>
            </>
          )}
          {user && user.role === "customer" && (
            <>
              <Link to="/dashboard/customer" className="nav-link">
                My Bookings
              </Link>
              <Link to="/settings/profile" className="nav-link">
                Profile
              </Link>
              <button onClick={() => logout()} className="nav-link">
                Logout
              </button>
            </>
          )}
          {user && user.role === "provider" && (
            <>
              <Link to="/dashboard/provider" className="nav-link">
                My Jobs
              </Link>
              <Link to="/provider/onboard" className="nav-link">
                Add Service
              </Link>
              <Link to="/settings/profile" className="nav-link">
                Profile
              </Link>
              <button onClick={() => logout()} className="nav-link">
                Logout
              </button>
            </>
          )}
          {user && user.role === "admin" && (
            <>
              <Link to="/dashboard/admin" className="nav-link">
                Admin Panel
              </Link>
              <Link to="/settings/profile" className="nav-link">
                Profile
              </Link>
              <button onClick={() => logout()} className="nav-link">
                Logout
              </button>
            </>
          )}
          <button className="hamburger" onClick={() => setMenuOpen((v) => !v)}>
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <details>
              <summary>Services</summary>
              <div style={{ paddingLeft: 12, paddingTop: 8 }}>
                {categories.map((g) => (
                  <div key={g.group}>
                    <strong>{g.group}</strong>
                    <ul>
                      {g.items.map((i) => (
                        <li key={i.slug}>
                          <Link
                            to={`/search?category=${i.slug}`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {i.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/support" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <form
              action="/search"
              method="GET"
              className="search"
              style={{ marginTop: 8 }}
            >
              <input name="q" placeholder="Search services..." />
              <button type="submit">Search</button>
            </form>
            {!user && (
              <>
                <Link to="/auth/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn btn-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
            {user && user.role === "customer" && (
              <>
                <Link
                  to="/dashboard/customer"
                  onClick={() => setMenuOpen(false)}
                >
                  My Bookings
                </Link>
                <Link to="/settings/profile" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            )}
            {user && user.role === "provider" && (
              <>
                <Link
                  to="/dashboard/provider"
                  onClick={() => setMenuOpen(false)}
                >
                  My Jobs
                </Link>
                <Link to="/provider/onboard" onClick={() => setMenuOpen(false)}>
                  Add Service
                </Link>
                <Link to="/settings/profile" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            )}
            {user && user.role === "admin" && (
              <>
                <Link to="/dashboard/admin" onClick={() => setMenuOpen(false)}>
                  Admin Panel
                </Link>
                <Link to="/settings/profile" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
