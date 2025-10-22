import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './paginas/login/Login';
import Inicio from './paginas/inicio/Inicio';

function App() {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = (usuarioLogado) => {
    setUsuario(usuarioLogado);
    localStorage.setItem('usuario', JSON.stringify(usuarioLogado));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route path="/inicio" element={usuario ? <Inicio /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
