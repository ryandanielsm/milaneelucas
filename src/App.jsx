import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './paginas/login/Login';
import Inicio from './paginas/inicio/Inicio';
import Footer from './componentes/footer/Footer';
import Cerimonia from './paginas/cerimonia/Cerimonia';
import Confirmar from './paginas/confirmar-presenca/Confirmar';
import Presente from './paginas/lista-presente/Presente';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = (usuarioLogado) => {
    setUsuario(usuarioLogado);
    localStorage.setItem('usuario', JSON.stringify(usuarioLogado));
  };

  return (

    
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login onLogin={handleLogin} />} />

            <Route path="/inicio" element={<Inicio />} />

            <Route path="/cerimonia" element={<Cerimonia />} />

            <Route path="/confirmar-presenca" element={<Confirmar />} />

            <Route path="/lista-presente" element={<Presente />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>


    </BrowserRouter>
  );
}

export default App;
