import { useLocation, useNavigate, Link } from "react-router-dom";
import logoBranca from "../../assets/logo-branca.PNG";
import logoMarrom from "../../assets/logo-marrom.PNG";
import "./Header.css";

function Header({ onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isInicio = location.pathname === "/inicio";

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg position-absolute top-0 start-0 w-100 p-0 p-xl-5 
      ${isInicio ? "inicio-page" : ""}`}
    >
      <div className="container-fluid justify-content-center position-relative px-0">
        <Link className="navbar-brand position-absolute start-0 ms-3" to="/">
          <img
            src={isInicio ? logoBranca : logoMarrom}
            width={82}
            alt="Logo"
            className="logo d-none d-md-block"
          />

          <img
            src={logoMarrom}
            width={82}
            alt="Logo"
            className="logo d-md-none"
          />
        </Link>

        <button
          className="hamburger-btn d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
          </ul>
        </div>

        {/* Botão de Logout */}
        <button
          className="btn-logout position-absolute end-0 me-3"
          onClick={handleLogout}
          title="Sair"
        >
          <i className="bi bi-box-arrow-right"></i>
          <span className="d-none d-md-inline ms-2">Sair</span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
