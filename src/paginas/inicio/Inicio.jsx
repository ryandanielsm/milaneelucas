import { useState, useEffect } from "react";
import Header from "../../componentes/header/header";
import banner from "../../assets/banner-destaque.JPG";
import flor from "../../assets/flor-1.png";
import memoji from "../../assets/memoji.png";
import carrosel11 from "../../assets/carrosel11.png";
import carrosel2 from "../../assets/carrosel2.png";
import carrosel3 from "../../assets/carrosel3.png";
import carrosel4 from "../../assets/carrosel4.png";
import carrosel5 from "../../assets/carrosel5.png";
import carrosel6 from "../../assets/carrosel6.png";
import "./Inicio.css";

function Inicio() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("Mar 14, 2026 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header></Header>
      <div class="banner-wrapper">
        <img
          className="img-fluid w-100"
          src={banner}
          alt="#"
          id="banner-mobile"
        />
      </div>
      <div className="contagem d-flex flex-column align-items-center justify-content-center text-center p-4">
        <h1 className="contagem-titulo">CONTAGEM REGRESSIVA</h1>
        <div className="d-flex gap-4 mt-4">
          <div className="card-contagem rounded-3 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-1 m-0">{timeLeft.days}</p>
            <p className="m-0">DIAS</p>
          </div>
          <div className="card-contagem rounded-3 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-1 m-0">{timeLeft.hours}</p>
            <p className="m-0">HORAS</p>
          </div>
          <div className="card-contagem rounded-3 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-1 m-0">{timeLeft.minutes}</p>
            <p className="m-0">MINUTOS</p>
          </div>
          <div className="card-contagem rounded-3 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-1 m-0">{timeLeft.seconds}</p>
            <p className="m-0">SEGUNDOS</p>
          </div>
        </div>
      </div>
      <div className="textos-inicio container text-center">
        <img className="m-4 flor-mobile" src={flor} alt="#" width={300} />
        <div className="p-5">
          <p className="mb-4">
            Olá! É um prazer imenso ter vocês, nossos queridos amigos e
            familiares, por aqui.
          </p>
          <p className="mb-4">
            Criamos este cantinho muito especial com todo carinho para
            compartilhar <br />
            um pouco da nossa história e todos os detalhes do nosso grande dia.{" "}
            <br />
            Estamos vibrando de felicidade e mal podemos esperar para celebrar{" "}
            <br />o nosso amor com cada um de vocês!
          </p>
          <p>
            Naveguem à vontade! Agradecemos desde já as mensagens e <br />
            feedbacks que vocês deixarem.
          </p>
        </div>

        <img className="mb-1 mt-3 flor-mobile" src={flor} alt="#" width={300} />
        <div className="row align-items-stretch">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="mt-5">SOBRE NÓS</h2>
            <img
              className="mt-3 mb-5 memoji"
              src={memoji}
              alt="#"
              width={400}
            />
          </div>

          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p className="text-center p-5">
              Nos conhecemos ainda na adolescência, quando o amor era inocente,
              os dias eram cheios de descobertas e todos os sonhos eram
              possíveis. Tivemos um namorinho típico dessa fase de mãos dadas,
              trocas de olhares e sonhos simples de quem estava apenas começando
              a entender o amor.
              <br />
              <br />
              Vivemos a intensidade de um sentimento adolescente, a ansiedade de
              nos ver pessoalmente e o frio na barriga para falar um com o
              outro. Com o tempo, a vida nos levou por caminhos diferentes, e
              cada um seguiu sua jornada.
            </p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <p className="p-5 m-0">
              Anos depois, já mais maduros e com novas experiências, os planos
              de Deus concretizaram o nosso reencontro. Era como se o tempo
              apenas tivesse feito uma pausa, esperando o momento certo para que
              nós dois pudéssemos viver esse amor da forma que sempre foi
              planejada por Deus. <br /> <br />
              Foi então que percebemos que aquele sentimento juvenil nunca havia
              se apagado, apenas adormecido à espera do momento certo. Assim,
              nossa história teve um recomeço, depois de um lindo namoro,
              decidimos então, com a benção de Deus eternizar esse reencontro com o nosso casamento.
            </p>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 d-flex justify-content-center">
            <div
              className="position-relative shadow rounded-4 overflow-hidden w-100"
              style={{ maxWidth: "500px", height: "400px" }}
            >
              <CarrosselImagens
                imagens={[
                  carrosel11,
                  carrosel2,
                  carrosel3,
                  carrosel4,
                  carrosel5,
                  carrosel6,
                ]}
              />
            </div>
          </div>
        </div>
        <p className="fs-2 pb-4" id="paragrafo-amor">
          Com amor, Milane e Lucas.
        </p>
      </div>
    </>
  );
}

function CarrosselImagens({ imagens }) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const [indiceModal, setIndiceModal] = useState(0);

  useEffect(() => {
    if (!modalAberto) {
      const intervalo = setInterval(() => {
        setIndiceAtual((prev) => (prev + 1) % imagens.length);
      }, 4000);
      return () => clearInterval(intervalo);
    }
  }, [imagens.length, modalAberto]);

  const abrirModal = (index) => {
    setIndiceModal(index);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const proximaImagemModal = (e) => {
    e.stopPropagation();
    setIndiceModal((prev) => (prev + 1) % imagens.length);
  };

  const anteriorImagemModal = (e) => {
    e.stopPropagation();
    setIndiceModal((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <>
      {imagens.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Foto ${index + 1}`}
          className={`d-block w-100 position-absolute top-0 start-0`}
          style={{
            height: "100%",
            objectFit: "cover",
            opacity: indiceAtual === index ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: indiceAtual === index ? 1 : 0,
          }}
        />
      ))}
      <button
        className="position-absolute top-50 start-0 translate-middle-y btn text-white p-3"
        style={{
          zIndex: 2,
          background: "transparent",
          border: "none",
          height: "100%",
        }}
        onClick={() =>
          setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length)
        }
      >
        <i className="bi bi-chevron-left fs-3"></i>
      </button>
      <button
        className="position-absolute top-50 end-0 translate-middle-y btn text-white p-3"
        style={{
          zIndex: 2,
          background: "transparent",
          border: "none",
          height: "100%",
        }}
        onClick={() => setIndiceAtual((prev) => (prev + 1) % imagens.length)}
      >
        <i className="bi bi-chevron-right fs-3"></i>
      </button>
      {/* Aviso de clique para ampliar */}
      {/* Aviso de clique para ampliar - Agora clicável */}
      {!modalAberto && (
        <button
          className="position-absolute bottom-0 end-0 m-3 px-3 py-1 rounded-pill text-white border-0"
          onClick={() => abrirModal(indiceAtual)}
          style={{
            zIndex: 3,
            backgroundColor: "rgba(0,0,0,0.6)",
            fontSize: "0.8rem",
            backdropFilter: "blur(2px)",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")
          }
        >
          <i className="bi bi-arrows-fullscreen me-2"></i>
          Clique para ampliar
        </button>
      )}

      {/* Modal de Visualização */}
      {modalAberto && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.9)", zIndex: 9999 }}
          onClick={fecharModal}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl position-relative"
            role="document"
          >
            <div className="modal-content bg-transparent border-0">
              <div
                className="modal-body p-0 d-flex justify-content-center align-items-center position-relative"
                style={{ minHeight: "80vh" }}
              >
                <button
                  className="btn btn-link text-white position-absolute top-0 end-0 m-3 text-decoration-none"
                  onClick={fecharModal}
                  style={{ zIndex: 1050, fontSize: "2rem" }}
                >
                  <i className="bi bi-x-lg"></i>
                </button>

                <button
                  className="btn btn-link text-white position-absolute start-0 ms-2"
                  onClick={anteriorImagemModal}
                  style={{ zIndex: 1050, fontSize: "3rem" }}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <img
                  src={imagens[indiceModal]}
                  alt="Visualização ampliada"
                  className="img-fluid rounded-3 shadow-lg"
                  style={{
                    maxHeight: "85vh",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />

                <button
                  className="btn btn-link text-white position-absolute end-0 me-2"
                  onClick={proximaImagemModal}
                  style={{ zIndex: 1050, fontSize: "3rem" }}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Inicio;
