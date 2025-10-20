import logo from '../../assets/logo.PNG';
import './Login.css';
import '../../../src/index.css';
import { db } from '../../firebaseConfig';
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 importar o hook
import { collection, query, where, getDocs } from "firebase/firestore";

function Login({ onLogin }) {
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate(); // 👈 inicializar o hook

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
        navigate("/inicio"); // 👈 redireciona corretamente
      }
    } catch (err) {
      console.error("Erro ao verificar código:", err);
      setErro("Erro ao conectar. Tente novamente.");
    }
  }

  return (
    <div className="container">
      <div className="row">
        {/* Lado esquerdo com logo */}
        <div className="col d-flex justify-content-center align-items-center vh-100">
          <img src={logo} alt="logo" width={300} />
        </div>

        {/* Lado direito com formulário */}
        <div className="col d-flex justify-content-start align-items-center vh-100">
          <div className="card border-0 shadow-sm p-4" style={{ width: "100%", maxWidth: 400 }}>
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Bem-vindo</h5>
              <h6 className="card-subtitle text-center mb-4 text-muted">
                Acesse a página com o código descrito em seu convite
              </h6>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="codigoConvite" className="form-label mb-2">
                    Código do convite
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="codigoConvite"
                    placeholder="Digite aqui o seu código de convite"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />

                  {/* ✅ precisa ser type="submit" */}
                  <button type="submit" className="btn btn-primary w-100">
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

export default Login;