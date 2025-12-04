import logo from '../../assets/logo.PNG';
import './Login.css';
import '../../../src/index.css';
import { db } from '../../firebaseConfig';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";

function Login({ onLogin }) {
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    setErro("");

    if (!codigo.trim()) {
      setErro("Digite o código de acesso.");
      return;
    }

    try {
      const q = query(collection(db, "usuarios"), where("codigoAcesso", "==", codigo.toUpperCase()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setErro("Código inválido.");
      } else {
        const usuario = querySnapshot.docs[0].data();
        localStorage.setItem("usuario", JSON.stringify(usuario));
        onLogin(usuario);
        navigate("/inicio");
      }
    } catch (err) {
      console.error("Erro ao verificar código:", err);
      setErro("Erro ao conectar. Tente novamente.");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row g-0 align-items-center" id='monograma-espacamento'>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src={logo} id='monograma-mobile' alt="logo" width={300} />
        </div>

        <div className="col-12 col-md-6 d-flex 
                justify-content-center justify-content-md-start 
                align-items-center align-items-md-center" id='card-bemvindo'>
          <div className="card border-0 shadow-sm p-4" style={{ width: "100%" }}>
            <div className="card-body m-1">
              <h5 className="card-title text-center mb-4">Bem Vindo</h5>
              <h6 className="card-subtitle text-center mb-3">
                Acesse a página com o código descrito em seu convite
              </h6>

              <form onSubmit={handleLogin}>
                <div className="mb-3 espaco-codigo">
                  <label htmlFor="codigoConvite" className="form-label mb-3 label-text">
                    Código do convite
                  </label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="codigoConvite"
                    placeholder="Digite aqui o seu código"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />

                  <button type="submit" className="btn w-100">
                    Acessar
                  </button>

                  {erro && <p className="text-danger mt-3">{erro}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;