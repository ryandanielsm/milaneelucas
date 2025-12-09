import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import logoBranca from "../../assets/logo-branca.PNG";
import logoMarrom from "../../assets/logo-marrom.PNG";
import "./Header.css";

function Header({ onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isInicio = location.pathname === "/inicio";
  const [menuAberto, setMenuAberto] = useState(false);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav
      className={`navbar navbar-expand-xl position-absolute top-0 start-0 w-100 p-0 p-xl-5 
      ${isInicio ? "inicio-page" : ""}`}
    >
      <div className="container-fluid justify-content-center position-relative px-0">
        <Link
          className="navbar-brand position-absolute start-0 top-0 mt-3 ms-3 position-xl-static m-xl-0 me-xl-5"
          to="/"
        >
          <img
            src={isInicio ? logoBranca : logoMarrom}
            width={80}
            alt="Logo"
            className="logo d-none d-xl-block"
          />

          <img
            src={isInicio && !menuAberto ? logoBranca : logoMarrom}
            width={60}
            alt="Logo"
            className="logo d-block d-xl-none"
          />
        </Link>

        <button
          className="hamburger-btn d-xl-none position-absolute end-0 me-3 border-0 bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ top: "30px", zIndex: 1050 }}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className="listas collapse navbar-collapse justify-content-center"
          id="navbar"
        >
          <ul className="navbar-nav mb-2 mb-lg-0" id="navbar-mobile">
            <li className="nav-item">
              <Link className="nav-link" to="/inicio">
                INÍCIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cerimonia">
                CERIMÔNIA
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/confirmar-presenca">
                CONFIRMAR PRESENÇA
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lista-presente">
                LISTA DE PRESENTES
              </Link>
            </li>
            <li className="nav-item d-xl-none">
              <button
                className="nav-link btn-logout-mobile"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right"></i> SAIR
              </button>
            </li>
          </ul>
        </div>

        {/* Botão de Logout */}
        <button
          className="btn-logout position-absolute end-0 me-3 d-none d-xl-block"
          onClick={handleLogout}
          title="Sair"
        >
          <i className="bi bi-box-arrow-right"></i>
          <span className="ms-2">Sair</span>
        </button>
      </div>
    </nav>
  );
}

export default Header;