import "./Presente.css";
import Header from "../../componentes/header/header";
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
      <div className="container">
        <div class="card-group gap-5 p-5">
          <div className="card p-1 rounded-3 card-presente d-flex flex-column">
            <img src={Cafeteira} className="card-img-top" alt="cafeteira" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Cafeteira</h5>
              <p className="card-text">
                Para que nunca falte um café quentinho e boas conversas pela
                manhã.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://produto.mercadolivre.com.br/MLB-3944483227#origin=share&sid=share&action=copy"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i className="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="card p-1 rounded-3 card-presente">
            <img src={Batedeira} className="card-img-top" alt="batedeira" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Batedeira</h5>
              <p className="card-text">
                Para misturar amor, leveza e sabor nas nossas melhores receitas.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.amazon.com.br/Batedeira-Planet%C3%A1ria-Philco-Velocidades-Php500/dp/B07664S9YG/ref=asc_df_B07664S9YG?mcid=c3a5477f0ff83d90893673033ebe396f&tag=googleshopp00-20&linkCode=df0&hvadid=709874962041&hvpos=&hvnetw=g&hvrand=5972550658670094006&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198255&hvtargid=pla-812124823196&psc=1&language=pt_BR&gad_source=1"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card p-1 rounded-3 card-presente">
            <img src={Forno} className="card-img-top" alt="forno" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Forno</h5>
              <p className="card-text">
                Para preparar juntos as receitas que aquecerão nosso lar.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.magazineluiza.com.br/forno-a-gas-embutir-infinity-50l-127v-preto-c-grill-fischer/p/jj2ggchej0/ed/frne/?partner_id=64068&utm_source=pdp&utm_medium=share"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-group gap-5 p-5">
          <div className="card p-1 rounded-3 card-presente">
            <img src={Cama} className="card-img-top" alt="cafeteira" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Jogo de Cama</h5>
              <p className="card-text">
                Para sonharmos juntinhos todas as noites.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://produto.mercadolivre.com.br/MLB-3944483227#origin=share&sid=share&action=copy"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="card p-1 rounded-3 card-presente">
            <img src={Toalha} className="card-img-top" alt="batedeira" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Jogo de Toalhas</h5>
              <p className="card-text">
                Para envolver nossos dias com conforto e carinho.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.amazon.com.br/dp/B0DWXRW4HV?ref=cm_sw_r_cso_cp_apin_dp_GMZY2YF74E918ABG3J7F&ref_=cm_sw_r_cso_cp_apin_dp_GMZY2YF74E918ABG3J7F&social_share=cm_sw_r_cso_cp_apin_dp_GMZY2YF74E918ABG3J7F&th=1"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card p-1 rounded-3 card-presente">
            <img src={Talher} className="card-img-top" alt="forno" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Jogo de Talheres</h5>
              <p className="card-text">
                Para dividir o sabor da vida a cada refeição.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.amazon.com.br/dp/B08BJBN15Y?ref=cm_sw_r_cso_cp_apin_dp_KQC9HB3QZAZE504CFNMJ&ref_=cm_sw_r_cso_cp_apin_dp_KQC9HB3QZAZE504CFNMJ&social_share=cm_sw_r_cso_cp_apin_dp_KQC9HB3QZAZE504CFNMJ"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="card-group gap-5 p-5">
          <div className="card p-1 rounded-3 card-presente">
            <img src={Geladeira} className="card-img-top" alt="geladeira" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Geladeira</h5>
              <p className="card-text">
                Para guardar com carinho os sabores e memórias da nossa vida a
                dois.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://m.magazineluiza.com.br/geladeira-refrigerador-electrolux-frost-free-inverse-inox-look-400l-efficient-ib6s-bivolt/p/240441500/ed/refr/?partner_id=64068&utm_source=pdp&utm_medium=share
"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="card p-1 rounded-3 card-presente">
            <img
              src={Maquina}
              className="card-img-top"
              alt="maquina de lavar"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Máquina de Lavar</h5>
              <p className="card-text">
                Para facilitar o dia a dia e sobrar mais tempo pra nós dois.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.magazineluiza.com.br/lavadora-de-roupas-panasonic-na-f120b1ta-12kg-cesto-inox-8-programas-de-lavagem-titanio/p/227324100/ed/lava/?partner_id=64068&utm_source=pdp&utm_medium=share"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card p-1 rounded-3 card-presente">
            <img src={Televisao} className="card-img-top" alt="televisao" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Televisão</h5>
              <p className="card-text">
                Para compartilharmos cada história, riso e emoção.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.ferreiracosta.com/produto/497615
"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="card-group gap-5 p-5">
          <div className="card p-1 rounded-3 card-presente">
            <img src={Jantar} className="card-img-top" alt="jantar" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Jogo de Jantar</h5>
              <p className="card-text">
                Para receber quem amamos à nossa mesa com muito carinho.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.amazon.com.br/dp/B0CJFZ31XP?ref=cm_sw_r_cso_cp_apin_dp_GQ5SM88FMGJK57XKH2MJ_1&ref_=cm_sw_r_cso_cp_apin_dp_GQ5SM88FMGJK57XKH2MJ_1&social_share=cm_sw_r_cso_cp_apin_dp_GQ5SM88FMGJK57XKH2MJ_1"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="card p-1 rounded-3 card-presente">
            <img src={Panela} className="card-img-top" alt="jogo de panelas" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Jogo de Panelas</h5>
              <p className="card-text">
                Para cozinhar com amor e temperar nossos dias de alegria.
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://www.amazon.com.br/dp/B0BZ58KCRX?ref=cm_sw_r_cso_cp_apin_dp_4A5WTNC790RBDXH401SN&ref_=cm_sw_r_cso_cp_apin_dp_4A5WTNC790RBDXH401SN&social_share=cm_sw_r_cso_cp_apin_dp_4A5WTNC790RBDXH401SN"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card p-1 rounded-3 card-presente">
            <img src={Pressao} className="card-img-top" alt="forno" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Panela de Pressão Elétrica</h5>
              <p className="card-text">
                Para que nunca falte aquele feijãozinho cheio de amor em nosso
                lar
              </p>
              <div className="d-grid gap-2 d-md-block mt-auto">
                <button
                  className="btn botao-lista w-100 fw-medium"
                  type="button"
                >
                  <a
                    className="text-decoration-none text-reset"
                    href="https://loja.electrolux.com.br/panela-de-pressao-eletrica-electrolux-5l-experience-por-rita-lobo--pcc15-/p?skuId=310120422"
                    target="_blank"
                  >
                    Link do produto
                  </a>{" "}
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            071.734.945-40 <br /> Milane Gerônimo Beserra de Lima
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
            <img src={Cozinha} alt="" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img className="img-sonho w-100" src={Viagem} alt="viagem" />
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
            <img src={Sala} alt="sala" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Presente;
