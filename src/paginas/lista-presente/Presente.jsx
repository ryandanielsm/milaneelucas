import "./Presente.css";
import Header from "../../componentes/header/Header";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Cafeteira from "../../assets/cafeteira.png";
import Batedeira from "../../assets/batedeira.png";
import Forno from "../../assets/forno.png";
import Cama from "../../assets/jogo-cama.png";
import Toalha from "../../assets/toalha.png";
import Talher from "../../assets/jogo-talheres.png";
import Geladeira from "../../assets/geladeira.png";
import Maquina from "../../assets/maquina-roupa.png";
import Televisao from "../../assets/televisao.png";
import Jantar from "../../assets/jogo-de-jantar.png";
import Panela from "../../assets/jogo-panelas.png";
import Pressao from "../../assets/panela-pressao.png";
import QRCODE from "../../assets/qrcode.png";
import Cozinha from "../../assets/cozinha.png";
import Viagem from "../../assets/viagem.png";
import Sala from "../../assets/sala.png";

function Presente() {
  const [mostrarModalReserva, setMostrarModalReserva] = useState(false);
  const [mostrarModalAgradecimento, setMostrarModalAgradecimento] =
    useState(false);
  const [presenteSelecionado, setPresenteSelecionado] = useState("");
  const [nomeReservante, setNomeReservante] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");

  // Lista de presentes
  const presentes = [
    {
      nome: "Cafeteira",
      imagem: Cafeteira,
      descricao:
        "Para que nunca falte um café quentinho e boas conversas pela manhã.",
      link: "https://produto.mercadolivre.com.br/MLB-3944483227#origin=share&sid=share&action=copy",
    },
    {
      nome: "Batedeira",
      imagem: Batedeira,
      descricao:
        "Para misturar amor, leveza e sabor nas nossas melhores receitas.",
      link: "https://www.amazon.com.br/Batedeira-Planet%C3%A1ria-Philco-Velocidades-Php500/dp/B07664S9YG/ref=asc_df_B07664S9YG?mcid=c3a5477f0ff83d90893673033ebe396f&tag=googleshopp00-20&linkCode=df0&hvadid=709874962041&hvpos=&hvnetw=g&hvrand=5972550658670094006&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198255&hvtargid=pla-812124823196&psc=1&language=pt_BR&gad_source=1",
    },
    {
      nome: "Forno",
      imagem: Forno,
      descricao: "Para preparar juntos as receitas que aquecerão nosso lar.",
      link: "https://www.magazineluiza.com.br/forno-a-gas-embutir-infinity-50l-127v-preto-c-grill-fischer/p/jj2ggchej0/ed/frne/?partner_id=64068&utm_source=pdp&utm_medium=share",
    },
    {
      nome: "Jogo de Cama",
      imagem: Cama,
      descricao: "Para sonharmos juntinhos todas as noites.",
      link: "https://produto.mercadolivre.com.br/MLB-3944483227#origin=share&sid=share&action=copy",
    },
    {
      nome: "Jogo de Toalhas",
      imagem: Toalha,
      descricao: "Para envolver nossos dias com conforto e carinho.",
      link: "https://www.amazon.com.br/dp/B0DWXRW4HV?ref=cm_sw_r_cso_cp_apin_dp_GMZY2YF74E918ABG3J7F&ref_=cm_sw_r_cso_cp_apin_dp_GMZY2YF74E918ABG3J7F&social_share=cm_sw_r_cso_cp_apin_dp_GMZY2YF74E918ABG3J7F&th=1",
    },
    {
      nome: "Jogo de Talheres",
      imagem: Talher,
      descricao: "Para dividir o sabor da vida a cada refeição.",
      link: "https://www.amazon.com.br/dp/B08BJBN15Y?ref=cm_sw_r_cso_cp_apin_dp_KQC9HB3QZAZE504CFNMJ&ref_=cm_sw_r_cso_cp_apin_dp_KQC9HB3QZAZE504CFNMJ&social_share=cm_sw_r_cso_cp_apin_dp_KQC9HB3QZAZE504CFNMJ",
    },
    {
      nome: "Geladeira",
      imagem: Geladeira,
      descricao:
        "Para guardar com carinho os sabores e memórias da nossa vida a dois.",
      link: "https://m.magazineluiza.com.br/geladeira-refrigerador-electrolux-frost-free-inverse-inox-look-400l-efficient-ib6s-bivolt/p/240441500/ed/refr/?partner_id=64068&utm_source=pdp&utm_medium=share",
    },
    {
      nome: "Máquina de Lavar",
      imagem: Maquina,
      descricao: "Para facilitar o dia a dia e sobrar mais tempo pra nós dois.",
      link: "https://www.magazineluiza.com.br/lavadora-de-roupas-panasonic-na-f120b1ta-12kg-cesto-inox-8-programas-de-lavagem-titanio/p/227324100/ed/lava/?partner_id=64068&utm_source=pdp&utm_medium=share",
    },
    {
      nome: "Televisão",
      imagem: Televisao,
      descricao: "Para compartilharmos cada história, riso e emoção.",
      link: "https://www.ferreiracosta.com/produto/497615",
    },
    {
      nome: "Jogo de Jantar",
      imagem: Jantar,
      descricao: "Para receber quem amamos à nossa mesa com muito carinho.",
      link: "https://www.amazon.com.br/dp/B0CJFZ31XP?ref=cm_sw_r_cso_cp_apin_dp_GQ5SM88FMGJK57XKH2MJ_1&ref_=cm_sw_r_cso_cp_apin_dp_GQ5SM88FMGJK57XKH2MJ_1&social_share=cm_sw_r_cso_cp_apin_dp_GQ5SM88FMGJK57XKH2MJ_1",
    },
    {
      nome: "Jogo de Panelas",
      imagem: Panela,
      descricao: "Para cozinhar com amor e temperar nossos dias de alegria.",
      link: "https://www.amazon.com.br/dp/B0BZ58KCRX?ref=cm_sw_r_cso_cp_apin_dp_4A5WTNC790RBDXH401SN&ref_=cm_sw_r_cso_cp_apin_dp_4A5WTNC790RBDXH401SN&social_share=cm_sw_r_cso_cp_apin_dp_4A5WTNC790RBDXH401SN",
    },
    {
      nome: "Panela de Pressão Elétrica",
      imagem: Pressao,
      descricao:
        "Para que nunca falte aquele feijãozinho cheio de amor em nosso lar",
      link: "https://loja.electrolux.com.br/panela-de-pressao-eletrica-electrolux-6l-preta-experience-por-rita-lobo-/p?skuId=2001755",
    },
  ];

  // Função para abrir modal de reserva
  const abrirModalReserva = (nomePresente) => {
    setPresenteSelecionado(nomePresente);
    setMostrarModalReserva(true);
    setNomeReservante("");
    setMensagemErro("");
  };

  // Função para fechar modal de reserva
  const fecharModalReserva = () => {
    setMostrarModalReserva(false);
    setPresenteSelecionado("");
    setNomeReservante("");
    setMensagemErro("");
  };

  // Função para confirmar reserva
  const confirmarReserva = async () => {
    if (nomeReservante.trim() === "") {
      setMensagemErro("Por favor, digite seu nome.");
      return;
    }

    setCarregando(true);
    setMensagemErro("");

    try {
      // Salva a reserva no Firebase
      await addDoc(collection(db, "presentes"), {
        nomeReservante: nomeReservante.trim(),
        presente: presenteSelecionado,
        dataReserva: new Date().toISOString(),
      });

      // Fecha modal de reserva e abre modal de agradecimento
      setMostrarModalReserva(false);
      setMostrarModalAgradecimento(true);
      setNomeReservante("");
    } catch (error) {
      console.error("Erro ao reservar presente:", error);
      setMensagemErro("Erro ao reservar presente. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  // Função para fechar modal de agradecimento
  const fecharModalAgradecimento = () => {
    setMostrarModalAgradecimento(false);
    setPresenteSelecionado("");
  };

  // Função para adicionar ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      confirmarReserva();
    }
  };

  // Componente de Card de Presente
  const CardPresente = ({ presente }) => (
    <div className="card p-1 rounded-3 card-presente d-flex flex-column">
      <img src={presente.imagem} className="card-img-top" alt={presente.nome} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{presente.nome}</h5>
        <p className="card-text">{presente.descricao}</p>
        <div className="d-grid gap-2 d-md-block mt-auto">
          <button
            className="btn botao-lista w-100 fw-medium mb-2"
            type="button"
          >
            <a
              className="text-decoration-none text-reset"
              href={presente.link}
              target="_blank"
              rel="noreferrer"
            >
              Link do produto
            </a>{" "}
            <i className="bi bi-box-arrow-in-up-right"></i>
          </button>
          <button
            className="btn botao-reservar w-100 fw-medium"
            type="button"
            onClick={() => abrirModalReserva(presente.nome)}
          >
            Reservar Presente <i className="bi bi-gift"></i>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header></Header>
      <div className="texto-lista d-flex flex-column text-center justify-content-center">
        <h1>LISTA DE PRESENTES</h1>
        <p className="mt-4">
          Com a sua ajuda, vamos começar a nossa nova vida.
          <br></br>Selecione algo especial para o nosso novo lar.
        </p>
      </div>

      {/* Grid de Presentes - Primeira linha */}
      <div className="container">
        <div className="card-group gap-5 p-5">
          {presentes.slice(0, 3).map((presente, index) => (
            <CardPresente key={index} presente={presente} />
          ))}
        </div>
      </div>

      {/* Grid de Presentes - Segunda linha */}
      <div className="container">
        <div className="card-group gap-5 p-5">
          {presentes.slice(3, 6).map((presente, index) => (
            <CardPresente key={index} presente={presente} />
          ))}
        </div>
      </div>

      {/* Grid de Presentes - Terceira linha */}
      <div className="container">
        <div className="card-group gap-5 p-5">
          {presentes.slice(6, 9).map((presente, index) => (
            <CardPresente key={index} presente={presente} />
          ))}
        </div>
      </div>

      {/* Grid de Presentes - Quarta linha */}
      <div className="container">
        <div className="card-group gap-5 p-5">
          {presentes.slice(9, 12).map((presente, index) => (
            <CardPresente key={index} presente={presente} />
          ))}
        </div>
      </div>

      {/* Seção Mais Opções */}
      <div className="container d-flex flex-column justify-content-center align-items-center text-center ">
        <h2 className="mais mb-4">MAIS OPÇÕES</h2>
        <p className="mais-paragrafo">
          Se você deseja nos presentear com um apoio financeiro <br />
          direto, ele será integralmente destinado á realização dos <br />{" "}
          nossos grandes sonhos: a nossa viagem inesquecível e a <br />
          mobília da nossa casa. Obrigado por fazer parte desse <br />
          momento tão único para nós, seu presente é um passo a mais <br /> para
          concretizarmos esses projetos.
        </p>
        <p className="mais-paragrafo">
          Para nos presentear, escaneie o QR Code abaixo ou utilize a <br />
          chave Pix Copia e Cola.
        </p>
        <div className="pix mt-4 d-flex flex-column justify-content-center align-items-center text-center w-25">
          <p>
            071.734.945-40 <br /> Milane Gerônimo Beserra de Lima
          </p>
        </div>
        <img
          className="qrcode-imagem mb-4 mt-3"
          src={QRCODE}
          alt="qrcode"
          width={400}
          height={400}
        />
      </div>

      {/* Seções de Cozinha, Viagem e Sala */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 id="cozinha-titulo">COZINHA</h2>
            <p id="cozinha-paragrafo">
              Quem quiser demonstrar carinho de uma forma especial, estamos
              montando nosso lar com muito amor. Se você desejar contribuir com
              a compra dos nossos móveis para darmos forma ao cantinho onde o
              amor será tempero de cada refeição, pode fazê-lo através do pix.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={Cozinha} alt="" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              className="img-sonho w-100 img-fluid"
              src={Viagem}
              alt="viagem"
            />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 id="cozinha-titulo">VIAGEM</h2>
            <p id="cozinha-paragrafo">
              Estamos ansiosos para começar nossa vida a dois celebrando o amor
              em uma viagem inesquecível. Se desejar nos presentear de uma forma
              especial, sua contribuição será um gesto de carinho que nos
              ajudará a tornar essa experiência ainda mais única e memorável.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 id="cozinha-titulo">SALA</h2>
            <p id="cozinha-paragrafo">
              Nosso lar começa a ganhar forma e aconchego com cada detalhe
              escolhido com amor. Se desejar nos presentear de uma forma
              especial, sua contribuição nos ajudará a tornar nossa sala um
              espaço acolhedor, onde criaremos memórias, risadas e momentos
              inesquecíveis juntos.{" "}
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={Sala} alt="sala" />
          </div>
        </div>
      </div>

      {/* Modal de Reserva */}
      {mostrarModalReserva && (
        <div className="modal-overlay" onClick={fecharModalReserva}>
          <div
            className="modal-conteudo-reserva"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-titulo-reserva">Reservar Presente</h2>
            <p className="modal-texto-reserva">
              Você está reservando: <strong>{presenteSelecionado}</strong>
            </p>

            {mensagemErro && (
              <div className="mensagem-erro-reserva">{mensagemErro}</div>
            )}

            <input
              type="text"
              className="input-reserva"
              placeholder="Digite seu nome completo"
              value={nomeReservante}
              onChange={(e) => setNomeReservante(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={carregando}
              autoFocus
            />

            <div className="modal-botoes">
              <button
                className="modal-botao-cancelar"
                onClick={fecharModalReserva}
                disabled={carregando}
              >
                Cancelar
              </button>
              <button
                className="modal-botao-confirmar"
                onClick={confirmarReserva}
                disabled={carregando}
              >
                {carregando ? "Confirmando..." : "Confirmar Reserva"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Agradecimento */}
      {mostrarModalAgradecimento && (
        <div className="modal-overlay" onClick={fecharModalAgradecimento}>
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icone">
              <i className="bi bi-gift-fill"></i>
            </div>
            <h2 className="modal-titulo">Presente Reservado!</h2>
            <p className="modal-texto">
              Muito obrigado por reservar o presente!
            </p>
            <p className="modal-subtexto">
              O presente <strong>{presenteSelecionado}</strong> foi reservado
              com sucesso.
            </p>
            <p className="modal-mensagem">
              Sua generosidade nos enche de alegria e gratidão! 💚
            </p>
            <button className="modal-botao" onClick={fecharModalAgradecimento}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Presente;
