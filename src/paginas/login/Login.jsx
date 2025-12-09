import logo from "../../assets/logo-marrom.PNG";
import "./Login.css";
import "../../../src/index.css";
import { db } from "../../firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";

function Login({ onLogin }) {
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setErro("");

    if (!codigo.trim()) {
      setErro("Digite o código de acesso.");
      return;
    }

    setCarregando(true);

    try {
      const codigoFormatado = codigo.trim().toUpperCase();
      console.log("Buscando código:", codigoFormatado);

      const q = query(
        collection(db, "usuarios"),
        where("codigoAcesso", "==", codigoFormatado)
      );

      const querySnapshot = await getDocs(q);
      console.log("Documentos encontrados:", querySnapshot.size);

      if (querySnapshot.empty) {
        console.log("Nenhum usuário encontrado com o código:", codigoFormatado);
        setErro("Código inválido. Verifique se digitou corretamente.");
      } else {
        const usuario = querySnapshot.docs[0].data();
        console.log("Usuário encontrado:", usuario);

        localStorage.setItem("usuario", JSON.stringify(usuario));
        onLogin(usuario);
        navigate("/inicio");
      }
    } catch (err) {
      console.error("Erro ao verificar código:", err);
      console.error("Detalhes do erro:", err.message);
      setErro("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div
            className="row g-0 align-items-center"
            id="monograma-espacamento"
          >
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img src={logo} className="monograma-login" alt="logo" />
            </div>

            <div
              className="col-12 col-md-6 d-flex 
                justify-content-center justify-content-md-start 
                align-items-center align-items-md-center"
              id="card-bemvindo"
            >
              <div
                className="card border-0 shadow-sm p-4"
                style={{ width: "100%" }}
              >
                <div className="card-body m-1">
                  <h5 className="card-title text-center mb-4">Bem Vindo</h5>
                  <h6 className="card-subtitle text-center mb-3">
                    Acesse a página com o código descrito em seu convite
                  </h6>

                  <form onSubmit={handleLogin}>
                    <div className="mb-3 espaco-codigo">
                      <label
                        htmlFor="codigoConvite"
                        className="form-label mb-3 label-text"
                      >
                        Código do convite
                      </label>
                      <input
                        type="text"
                        className="form-control mb-4"
                        id="codigoConvite"
                        placeholder="Digite aqui o seu código"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        disabled={carregando}
                        autoComplete="off"
                      />

                      <button
                        type="submit"
                        className="btn w-100 btn-acessar"
                        disabled={carregando}
                      >
                        {carregando ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Verificando...
                          </>
                        ) : (
                          "Acessar"
                        )}
                      </button>

                      {erro && (
                        <div
                          className="alert alert-danger mt-3 mb-0"
                          role="alert"
                        >
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          {erro}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
