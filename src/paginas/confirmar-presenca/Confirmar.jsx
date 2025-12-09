import "./Confirmar.css";
import Header from "../../componentes/header/Header";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import flor from "../../assets/flor-modal.png";

function Confirmar({ onLogout }) {
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [listaConvidados, setListaConvidados] = useState([]);
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const [carregando, setCarregando] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [totalConfirmados, setTotalConfirmados] = useState(0);

  // Função para adicionar convidado à lista
  const adicionarConvidado = () => {
    if (nomeConvidado.trim() === "") {
      setMensagem({ texto: "Por favor, digite um nome válido.", tipo: "erro" });
      setTimeout(() => setMensagem({ texto: "", tipo: "" }), 3000);
      return;
    }

    // Verifica se o nome já está na lista
    if (listaConvidados.includes(nomeConvidado.trim())) {
      setMensagem({ texto: "Este nome já está na lista.", tipo: "erro" });
      setTimeout(() => setMensagem({ texto: "", tipo: "" }), 3000);
      return;
    }

    setListaConvidados([...listaConvidados, nomeConvidado.trim()]);
    setNomeConvidado("");
    setMensagem({ texto: "Convidado adicionado à lista!", tipo: "sucesso" });
    setTimeout(() => setMensagem({ texto: "", tipo: "" }), 2000);
  };

  // Função para remover convidado da lista
  const removerConvidado = (index) => {
    const novaLista = listaConvidados.filter((_, i) => i !== index);
    setListaConvidados(novaLista);
    setMensagem({ texto: "Convidado removido da lista.", tipo: "sucesso" });
    setTimeout(() => setMensagem({ texto: "", tipo: "" }), 2000);
  };

  // Função para confirmar presença (salvar no Firebase)
  const confirmarPresenca = async () => {
    if (listaConvidados.length === 0) {
      setMensagem({
        texto: "Adicione pelo menos um convidado antes de confirmar.",
        tipo: "erro",
      });
      setTimeout(() => setMensagem({ texto: "", tipo: "" }), 3000);
      return;
    }

    setCarregando(true);

    try {
      // Salva cada convidado individualmente na coleção 'presencas'
      const promises = listaConvidados.map(async (nome) => {
        await addDoc(collection(db, "presencas"), {
          nomeConvidado: nome,
          dataConfirmacao: new Date().toISOString(),
        });
      });

      await Promise.all(promises);

      // Exibe modal de agradecimento
      setTotalConfirmados(listaConvidados.length);
      setMostrarModal(true);
      setListaConvidados([]);
    } catch (error) {
      console.error("Erro ao confirmar presença:", error);
      setMensagem({
        texto: "Erro ao confirmar presença. Tente novamente.",
        tipo: "erro",
      });
      setTimeout(() => setMensagem({ texto: "", tipo: "" }), 4000);
    } finally {
      setCarregando(false);
    }
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setMostrarModal(false);
    setTotalConfirmados(0);
  };

  // Função para adicionar ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      adicionarConvidado();
    }
  };

  return (
    <>
      <Header onLogout={onLogout}></Header>
      <h1 className="confirmar d-flex text-center justify-content-center align-items-center">
        CONFIRMAR PRESENÇA
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <div className="textos-1 px-3">
              <h2>
                Sua resposta é essencial para que tudo <br></br> fique perfeito
                no nosso grande dia
              </h2>
              <p className="mt-3">
                Para garantir que tudo seja perfeito e que possamos recebê-lo
                com todo o carinho e conforto que você merece, pedimos a
                gentileza de confirmar sua presença na lista de convidados até o
                dia <b>15/02/2026.</b>
              </p>
              <p className="mt-3 mb-5">
                Preencha seu nome e adicione todos os acompanhantes incluídos no
                seu convite nos campos indicados, garantindo o nome completo de
                cada um.
              </p>
            </div>
          </div>
          <div className="coluna col-sm-12 col-xl-6">
            <div id="fundo-form">
              <h1 className="confirme-aqui text-center">Confirme aqui</h1>

              {/* Mensagem de feedback */}
              {mensagem.texto && (
                <div className={`mensagem-feedback ${mensagem.tipo}`}>
                  {mensagem.texto}
                </div>
              )}

              <div className="d-flex gap-3 mt-4 mb-4">
                <input
                  type="text"
                  className="form-control input-pequeno"
                  placeholder="Digite seu nome"
                  aria-describedby="button-addon2"
                  value={nomeConvidado}
                  onChange={(e) => setNomeConvidado(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={carregando}
                />
                <button
                  className="botao btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={adicionarConvidado}
                  disabled={carregando}
                >
                  Adicionar
                </button>
              </div>

              <ul className="lista list-group list-group-flush mb-4">
                {listaConvidados.length === 0 ? (
                  <li
                    className="list-group-item text-center"
                    style={{ fontStyle: "italic", opacity: 0.7 }}
                  >
                    Nenhum convidado adicionado ainda
                  </li>
                ) : (
                  listaConvidados.map((nome, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {nome}
                      <i
                        className="bi bi-trash"
                        style={{ cursor: "pointer" }}
                        onClick={() => removerConvidado(index)}
                      ></i>
                    </li>
                  ))
                )}
              </ul>

              <div className="text-center">
                <button
                  className="botao btn btn-outline-secondary"
                  type="button"
                  id="button-adicionar"
                  onClick={confirmarPresenca}
                  disabled={carregando || listaConvidados.length === 0}
                >
                  {carregando ? "Confirmando..." : "Confirmar Presença"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Agradecimento */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div
            className="modal-conteudo d-flex flex-column align-items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icone">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h2 className="modal-titulo">Presença Confirmada!</h2>
            <p className="modal-texto">
              Muito obrigado por confirmar sua presença!
            </p>
            <p className="modal-subtexto">
              {totalConfirmados === 1
                ? "1 convidado foi registrado com sucesso."
                : `${totalConfirmados} convidados foram registrados com sucesso.`}
            </p>
            <p className="modal-mensagem">
              Estamos ansiosos para celebrar este momento especial com você!
            </p>
            <img className="mb-4" src={flor} alt="Flor" width={80} />
            <button className="modal-botao" onClick={fecharModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Confirmar;
