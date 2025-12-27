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
import QRCODE from "../../assets/qrcode2.png";
import Cozinha from "../../assets/cozinha.png";
import Viagem from "../../assets/viagem.png";
import Sala from "../../assets/sala.png";
import Vaporizador from "../../assets/vaporizador.png";
import Cama2 from "../../assets/jogocama2.png";
import flor from "../../assets/flor-modal.png";
import Purificador from "../../assets/purificadoragua.png";
import Tacas from "../../assets/jogodetaca.png";
import Assadeiras from "../../assets/assadeira.png";
import Fondue from "../../assets/panelaeletrica.png";
import Boleira from "../../assets/boleira.png";
import Tapete from "../../assets/tapete.png";
import Echo from "../../assets/echo.png";

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
      link: "https://www.magazineluiza.com.br/cafeteira-espresso-arno-nescafe-dolce-gusto-genio-s-touch-15-bar-prata/p/228576900/ep/cadc/",
    },
    {
      nome: "Batedeira",
      imagem: Batedeira,
      descricao:
        "Para misturar amor, leveza e sabor nas nossas melhores receitas.",
      link: "https://www.casasbahia.com.br/batedeira-planetaria-mondial-bp-03-com-12-velocidades-e-700w-preto/p/55005430?vtr_id=produtos_patrocinados&vtr_name=produtos+patrocinados",
    },
    {
      nome: "Forno",
      imagem: Forno,
      descricao: "Para preparar juntos as receitas que aquecerão nosso lar.",
      link: "https://www.ferreiracosta.com/produto/463067/forno-de-embutir-a-gas-fischer-infinity-50l-preto-127v-79710",
    },
    {
      nome: "Kit Colcha",
      imagem: Cama,
      descricao: "Para sonharmos juntinhos todas as noites.",
      link: " https://www.riachuelo.com.br/kit-colcha-boutis-dupla-face-casa-riachuelo-15943275_sku_queen_rosa-claro",
    },
    {
      nome: "Jogo de Cama Percal",
      imagem: Cama2,
      descricao: "Para sonharmos juntinhos todas as noites.",
      link: "https://www.riachuelo.com.br/jogo-de-cama-queen-4-pecas-maquinetado-200-fios-rosa-casa-riachuelo-15921883001_sku_sku?utm_source=app_share",
    },
    {
      nome: "Jogo de Toalhas",
      imagem: Toalha,
      descricao: "Para envolver nossos dias com conforto e carinho.",
      link: " https://www.riachuelo.com.br/produto/kit-toalha-de-banho-2-pecas-toalha-de-rosto-2-pecas-fio-penteado-multicor-buddemeyer-KIT923003?utm_source=app_share",
    },
    {
      nome: "Vaporizador de Roupas",
      imagem: Vaporizador,
      descricao: "Para envolver nossos dias com conforto e carinho.",
      link: "https://m.magazineluiza.com.br/vaporizador-de-roupas-portatil-passadeira-maquina-a-vapor-steamer-3-em-1-dobravel-bdv3000v-1220w-black-decker/p/jd46d37jf6/ep/psav/?&seller_id=mmarket&utm_source=google&utm_medium=cpc&utm_term=83231&utm_campaign=google_eco_per_ven_pla_all_sor_3p_core&utm_content=&partner_id=83231&gclsrc=aw.ds&gad_source=1&gad_campaignid=23346188393&gbraid=0AAAAAD4zZmTsC2BB5EOiPFNhnSK85hpMw&gclid=CjwKCAiA3rPKBhBZEiwAhPNFQDd-LNdmqYCBQkDDl_4qGsnh2fInXFS5paDgqLauh02iO2fcdzYnXhoC3lIQAvD_BwE",
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
      link: " https://m.magazineluiza.com.br/smart-tv-55-lg-4k-qned-55qned70asa-webos-25-a7-ai-processor-4k-gen8-alexa-3-hdmi-2-usb/p/240467100/et/tves/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
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
      link: " https://m.magazineluiza.com.br/jogo-de-panelas-brinox-revestimento-ceramico-de-aluminio-vanilla-5-pecas-optima/p/144134600/ud/cjpn/",
    },
    {
      nome: "Panela de Pressão Elétrica",
      imagem: Pressao,
      descricao:
        "Para que nunca falte aquele feijãozinho cheio de amor em nosso lar",
      link: "https://loja.electrolux.com.br/panela-de-pressao-eletrica-electrolux-6l-preta-experience-por-rita-lobo-/p?skuId=2001755",
    },
    {
      nome: "Purificador de Água",
      imagem: Purificador,
      descricao:
        "Para que nunca falte água pura, cuidado e saúde em cada novo dia juntos",
      link: "https://www.mercadolivre.com.br/purificador-electrolux-agua-gelada-cinza-pe15x--bivolt/up/MLBU3689942060?pdp_filters=item_id%3AMLB6073148420#origin=share&sid=share&wid=MLB6073148420&action=whatsapp",
    },
    {
      nome: "Jogo de Taças",
      imagem: Tacas,
      descricao:
        "Para brindar o amor, as conquistas e todos os momentos especiais da nossa vida a dois.",
      link: "https://www.mercadolivre.com.br/jogo-6-tacas-cristal-titanium-vinho-tinto-560ml-xtra-bohemia-cor-incolor-luxo-crystal-sommelier-quadrada-cristalex-jhamba/p/MLB51784026?pdp_filters=item_id%3AMLB5633645122#origin=share&sid=share&wid=MLB5633645122&action=copy",
    },
    {
      nome: "Conjunto de Assadeiras",
      imagem: Assadeiras,
      descricao:
        "Para preparar receitas cheias de sabor, afeto e memórias inesquecíveis",
      link: "https://www.mercadolivre.com.br/conjunto-assadeiras-6-pecas-com-tampa-vermelha-marinex/p/MLB27411322?pdp_filters=item_id%3AMLB3463595693#origin=share&sid=share&wid=MLB3463595693&action=copy",
    },
    {
      nome: "Panela Elétrica Fondue",
      imagem: Fondue,
      descricao:
        "Para derreter queijos, chocolates e ainda mais o nosso amor nas noites especiais",
      link: "https://www.mercadolivre.com.br/panela-eletrica-para-fondue-oster-onfd100-1000w-delight/p/MLB19937987?pdp_filters=item_id%3AMLB5441259362#origin=share&sid=share&wid=MLB5441259362&action=whatsapp",
    },
    {
      nome: "Boleira",
      imagem: Boleira,
      descricao:
        "Para guardar com carinho os doces momentos que a vida nos presentear",
      link: "https://www.amazon.com.br/dp/B076Z41X98?ref=cm_sw_r_cso_cp_apin_dp_P1FZ5TYQTZV6DBSJ31D3&ref_=cm_sw_r_cso_cp_apin_dp_P1FZ5TYQTZV6DBSJ31D3&social_share=cm_sw_r_cso_cp_apin_dp_P1FZ5TYQTZV6DBSJ31D3&th=1",
    },
    {
      nome: "Tapete Comfort",
      imagem: Tapete,
      descricao:
        "Para que cada passo em nosso lar seja cheio de aconchego e conforto",
      link: "https://www.riachuelo.com.br/produto/tapete-comfort-line-1-50-x-2-00-m-11636335001_sku_150-x-200-cm_bege?utm_source=app_share",
    },
    {
      nome: "Echo Pop",
      imagem: Echo,
      descricao:
        "Para nos acompanhar nas rotinas, músicas, risadas e em cada momento do nosso novo lar",
      link: "https://www.amazon.com.br/dp/B09ZXN77L2?ref=cm_sw_r_cso_cp_apin_dp_4J7JX6KHMZ019GRE0NBH&ref_=cm_sw_r_cso_cp_apin_dp_4J7JX6KHMZ019GRE0NBH&social_share=cm_sw_r_cso_cp_apin_dp_4J7JX6KHMZ019GRE0NBH&th=1",
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

      {/* Grid de Presentes Unificado e Responsivo */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {presentes.map((presente, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 d-flex">
              <CardPresente presente={presente} />
            </div>
          ))}
        </div>
      </div>

      {/* Seção Mais Opções */}
      <div className="container d-flex flex-column justify-content-center align-items-center text-center ">
        <h2 className="mais my-5">MAIS OPÇÕES</h2>
        <div className="row">
          <div className="col-12 col-md-6 px-5">
            <p className="mais-paragrafo mt-3">
              Se você deseja nos presentear com um apoio financeiro direto, ele
              será integralmente destinado á realização dos nossos grandes
              sonhos: a nossa viagem inesquecível e a mobília da nossa casa.
              Obrigado por fazer parte desse momento tão único para nós, seu
              presente é um passo a mais para concretizarmos esses projetos.
            </p>
            <p className="mais-paragrafo">
              Para nos presentear, escaneie o QR Code na tela ou utilize a{" "}
              <br />
              chave Pix Copia e Cola.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5">
            {" "}
            <img
              className="qrcode-imagem mb-4 mt-3"
              src={QRCODE}
              alt="qrcode"
              width={200}
              height={200}
            />
            <p className="mais-paragrafo fw-bold fs-4">071.734.945-40</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center text-center px-5">
            <h2 className="mais">COZINHA</h2>
            <p id="cozinha-paragrafo">
              Quem quiser demonstrar carinho de uma forma especial, estamos
              montando nosso lar com muito amor. Se você desejar contribuir com
              a compra dos nossos móveis para darmos forma ao cantinho onde o
              amor será tempero de cada refeição, pode fazê-lo através do pix.
            </p>
          </div>
          <div className="col-12 col-lg-6 order-3 order-lg-2 px-5">
            <img className="img-fluid" src={Cozinha} alt="" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 order-3 order-lg-1 px-5">
            <img
              className="img-sonho w-100 img-fluid"
              src={Viagem}
              alt="viagem"
            />
          </div>
          <div className="col-12 col-lg-6 order-2 order-lg-2 d-flex flex-column justify-content-center align-items-center text-center px-5">
            <h2 className="mais">VIAGEM</h2>
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
        <div className="row mb-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center text-center px-5">
            <h2 className="mais">SALA</h2>
            <p id="cozinha-paragrafo">
              Nosso lar começa a ganhar forma e aconchego com cada detalhe
              escolhido com amor. Se desejar nos presentear de uma forma
              especial, sua contribuição nos ajudará a tornar nossa sala um
              espaço acolhedor, onde criaremos memórias, risadas e momentos
              inesquecíveis juntos.{" "}
            </p>
          </div>
          <div className="col-12 col-lg-6 order-3 order-lg-2 px-5">
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
          <div
            className="modal-conteudo d-flex flex-column align-items-center"
            onClick={(e) => e.stopPropagation()}
          >
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
            <p className="modal-mensagem">Com amor, Milane e Lucas! </p>
            <img className="mb-4" src={flor} alt="Flor" width={80} />
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
