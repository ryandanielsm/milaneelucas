import "./Dashboard.css";
import logo from "../assets/logo-marrom.PNG";
import Flor1 from "../assets/flor-cerimonia-1.png";
import Flor2 from "../assets/flor-cerimonia-2.png";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Dashboard() {
  const [presencas, setPresencas] = useState([]);
  const [presentes, setPresentes] = useState([]);
  const [carregandoPresencas, setCarregandoPresencas] = useState(true);
  const [carregandoPresentes, setCarregandoPresentes] = useState(true);
  const [erro, setErro] = useState({ presencas: "", presentes: "" });
  
  // Estados de paginação
  const [paginaPresencas, setPaginaPresencas] = useState(1);
  const [paginaPresentes, setPaginaPresentes] = useState(1);
  const itensPorPagina = 5;

  // Função para buscar presenças confirmadas
  useEffect(() => {
    const buscarPresencas = async () => {
      try {
        setCarregandoPresencas(true);
        const q = query(
          collection(db, "presencas"),
          orderBy("dataConfirmacao", "desc")
        );
        const querySnapshot = await getDocs(q);

        const listaPresencas = [];
        querySnapshot.forEach((doc) => {
          listaPresencas.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPresencas(listaPresencas);
      } catch (error) {
        console.error("Erro ao buscar presenças:", error);
        setErro((prev) => ({
          ...prev,
          presencas: "Erro ao carregar presenças",
        }));
      } finally {
        setCarregandoPresencas(false);
      }
    };

    buscarPresencas();
  }, []);

  // Função para buscar presentes reservados
  useEffect(() => {
    const buscarPresentes = async () => {
      try {
        setCarregandoPresentes(true);
        const q = query(
          collection(db, "presentes"),
          orderBy("dataReserva", "desc")
        );
        const querySnapshot = await getDocs(q);

        const listaPresentes = [];
        querySnapshot.forEach((doc) => {
          listaPresentes.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPresentes(listaPresentes);
      } catch (error) {
        console.error("Erro ao buscar presentes:", error);
        setErro((prev) => ({
          ...prev,
          presentes: "Erro ao carregar presentes",
        }));
      } finally {
        setCarregandoPresentes(false);
      }
    };

    buscarPresentes();
  }, []);

  // Função para formatar data
  const formatarData = (dataISO) => {
    if (!dataISO) return "";
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Funções de paginação para presenças
  const indexUltimoPresenca = paginaPresencas * itensPorPagina;
  const indexPrimeiroPresenca = indexUltimoPresenca - itensPorPagina;
  const presencasAtuais = presencas.slice(indexPrimeiroPresenca, indexUltimoPresenca);
  const totalPaginasPresencas = Math.ceil(presencas.length / itensPorPagina);

  // Funções de paginação para presentes
  const indexUltimoPresente = paginaPresentes * itensPorPagina;
  const indexPrimeiroPresente = indexUltimoPresente - itensPorPagina;
  const presentesAtuais = presentes.slice(indexPrimeiroPresente, indexUltimoPresente);
  const totalPaginasPresentes = Math.ceil(presentes.length / itensPorPagina);

  // Funções para mudar de página
  const mudarPaginaPresencas = (numeroPagina) => {
    setPaginaPresencas(numeroPagina);
  };

  const mudarPaginaPresentes = (numeroPagina) => {
    setPaginaPresentes(numeroPagina);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4 dashboard-header align-items-center">
          <div className="col-6 d-flex justify-content-start">
            <img src={logo} id="monograma-mobile" alt="logo" width={60} />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className="btn botao-dashboard fw-medium" type="button">
              <a
                className="text-decoration-none text-reset"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                Ir para o site
              </a>{" "}
              <i className="bi bi-box-arrow-in-up-right"></i>
            </button>
          </div>
        </div>
        <div className="titulo-dashboard">
          <h1 className="mb-4">Olá, Milane e Lucas!</h1>
        </div>

        {/* Estatísticas */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card-estatistica">
              <div className="icone-estatistica">
                <i className="bi bi-people-fill"></i>
              </div>
              <div className="info-estatistica">
                <h3>{presencas.length}</h3>
                <p>Presenças Confirmadas</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-estatistica">
              <div className="icone-estatistica">
                <i className="bi bi-gift-fill"></i>
              </div>
              <div className="info-estatistica">
                <h3>{presentes.length}</h3>
                <p>Presentes Reservados</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="tabela-container">
              <div className="tabela-header">
                <h5>
                  <i className="bi bi-people me-2"></i>
                  Lista de Convidados Confirmados
                </h5>
              </div>
              <div className="tabela-body">
                {carregandoPresencas ? (
                  <div className="loading-container">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Carregando...</span>
                    </div>
                  </div>
                ) : erro.presencas ? (
                  <div className="alert alert-danger" role="alert">
                    {erro.presencas}
                  </div>
                ) : presencas.length === 0 ? (
                  <div className="sem-dados">
                    <i className="bi bi-inbox"></i>
                    <p>Nenhuma presença confirmada ainda</p>
                  </div>
                ) : (
                  <>
                    <div className="table-wrapper">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Nome do Convidado</th>
                            <th scope="col">Data de Confirmação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {presencasAtuais.map((presenca) => (
                            <tr key={presenca.id}>
                              <td>{presenca.nomeConvidado}</td>
                              <td className="data-coluna">
                                {formatarData(presenca.dataConfirmacao)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {totalPaginasPresencas > 1 && (
                      <div className="paginacao">
                        <button
                          className="btn-paginacao"
                          onClick={() => mudarPaginaPresencas(paginaPresencas - 1)}
                          disabled={paginaPresencas === 1}
                        >
                          <i className="bi bi-chevron-left"></i>
                        </button>
                        <span className="info-paginacao">
                          Página {paginaPresencas} de {totalPaginasPresencas}
                        </span>
                        <button
                          className="btn-paginacao"
                          onClick={() => mudarPaginaPresencas(paginaPresencas + 1)}
                          disabled={paginaPresencas === totalPaginasPresencas}
                        >
                          <i className="bi bi-chevron-right"></i>
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-4">
            <div className="tabela-container">
              <div className="tabela-header">
                <h5>
                  <i className="bi bi-gift me-2"></i>
                  Lista de Presentes Reservados
                </h5>
              </div>
              <div className="tabela-body">
                {carregandoPresentes ? (
                  <div className="loading-container">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Carregando...</span>
                    </div>
                  </div>
                ) : erro.presentes ? (
                  <div className="alert alert-danger" role="alert">
                    {erro.presentes}
                  </div>
                ) : presentes.length === 0 ? (
                  <div className="sem-dados">
                    <i className="bi bi-inbox"></i>
                    <p>Nenhum presente reservado ainda</p>
                  </div>
                ) : (
                  <>
                    <div className="table-wrapper">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Presente</th>
                            <th scope="col">Reservado por</th>
                            <th scope="col">Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          {presentesAtuais.map((presente) => (
                            <tr key={presente.id}>
                              <td className="presente-nome">{presente.presente}</td>
                              <td>{presente.nomeReservante}</td>
                              <td className="data-coluna">
                                {formatarData(presente.dataReserva)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {totalPaginasPresentes > 1 && (
                      <div className="paginacao">
                        <button
                          className="btn-paginacao"
                          onClick={() => mudarPaginaPresentes(paginaPresentes - 1)}
                          disabled={paginaPresentes === 1}
                        >
                          <i className="bi bi-chevron-left"></i>
                        </button>
                        <span className="info-paginacao">
                          Página {paginaPresentes} de {totalPaginasPresentes}
                        </span>
                        <button
                          className="btn-paginacao"
                          onClick={() => mudarPaginaPresentes(paginaPresentes + 1)}
                          disabled={paginaPresentes === totalPaginasPresentes}
                        >
                          <i className="bi bi-chevron-right"></i>
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
