import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./paginas/login/Login";
import Inicio from "./paginas/inicio/Inicio";
import Footer from "./componentes/footer/Footer";
import Cerimonia from "./paginas/cerimonia/Cerimonia";
import Confirmar from "./paginas/confirmar-presenca/Confirmar";
import Presente from "./paginas/lista-presente/Presente";
import Dashboard from "./dashboard/Dashboard";
import PageLoader from "./componentes/page-loader/PageLoader";
import "bootstrap-icons/font/bootstrap-icons.css";

function AppWrapper() {
  const location = useLocation();
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [previousPath, setPreviousPath] = useState(location.pathname);

  // Verificar se há usuário logado no localStorage
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      try {
        setUsuario(JSON.parse(usuarioSalvo));
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        localStorage.removeItem("usuario");
      }
    }
    setCarregando(false);
  }, []);

  // Detectar mudança de rota e mostrar loading
  useEffect(() => {
    if (previousPath !== location.pathname) {
      setTransitioning(true);

      const timer = setTimeout(() => {
        setTransitioning(false);
        setPreviousPath(location.pathname);
      }, 1200); // Duração do loading aumentada para transição mais suave

      return () => clearTimeout(timer);
    }
  }, [location.pathname, previousPath]);

  // Função para fazer login
  const handleLogin = (dadosUsuario) => {
    setUsuario(dadosUsuario);
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
  };

  // Função para fazer logout
  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  const isInicio = location.pathname === "/inicio";

  // Mostrar loading inicial (página completa)
  if (carregando) {
    return <PageLoader />;
  }

  return (
    <>
      {/* Loading como overlay durante transições de página */}
      {transitioning && <PageLoader />}

      <div className={`app-wrapper ${isInicio ? "inicio-page" : "outra-page"}`}>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/inicio"
              element={
                usuario ? (
                  <Inicio usuario={usuario} onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/cerimonia"
              element={
                usuario ? (
                  <Cerimonia onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/confirmar-presenca"
              element={
                usuario ? (
                  <Confirmar onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/lista-presente"
              element={
                usuario ? (
                  <Presente onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                usuario ? (
                  <Dashboard onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>

        {location.pathname !== "/login" && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
