import { useState, useEffect } from "react";
import Header from "../../componentes/header/Header";
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
import video from "../../assets/video.mp4";

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
        <div className="d-flex gap-4">
          <div className="card-contagem">
            <h4>{timeLeft.days}</h4>
            <p>DIAS</p>
          </div>
          <div className="card-contagem">
            <h4>{timeLeft.hours}</h4>
            <p>HORAS</p>
          </div>
          <div className="card-contagem">
            <h4>{timeLeft.minutes}</h4>
            <p>MINUTOS</p>
          </div>
          <div className="card-contagem">
            <h4>{timeLeft.seconds}</h4>
            <p>SEGUNDOS</p>
          </div>
        </div>
      </div>
      <div className="textos-inicio container text-center">
        <img className="m-4 flor-mobile" src={flor} alt="#" width={300} />
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
        <img className="mb-1 mt-3 flor-mobile" src={flor} alt="#" width={300} />
        <h2 className="mt-5">SOBRE NÓS</h2>
        <img className="mt-3 mb-5 memoji" src={memoji} alt="#" width={400} />
        <p>
          Nos conhecemos ainda na adolescência, quando o amor era inocente, os
          dias eram cheios de descobertas e todos os sonhos eram possíveis.
          Tivemos um namorinho típico dessa fase de mãos dadas, trocas de
          olhares e sonhos simples de quem estava apenas começando a entender o
          amor. <br /> <br />
          Vivemos a intensidade de um sentimento adolescente, a ansiedade de nos
          ver pessoalmente e o frio na barriga para falar um com o outro. Com o
          tempo, a vida os levou por caminhos diferentes, e cada um seguiu sua
          jornada.
        </p>
        <div className="row">
          <div className="col-sm-12 col-xl-6" id="texto-carrosel">
            <p>
              Anos depois, já mais maduros e com novas experiências, os planos
              de Deus concretizaram o nosso reencontro. Era como se o tempo
              apenas tivesse feito uma pausa, esperando o momento certo para que
              nós dois pudéssemos viver esse amor da forma que sempre foi
              planejada por Deus. <br /> <br />
              Foi então que percebemos que aquele sentimento juvenil nunca havia
              se apagado, apenas adormecido à espera do momento certo. Assim,
              nossa história teve um recomeço, depois de um lindo namoro,
              decidimos então, com a benção de Deus.
            </p>
          </div>
          <div className="col-sm-12 col-xl-6" id="imagem-carrosel">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={carrosel11} alt="" className="carousel-img" />
                </div>
                <div className="carousel-item">
                  <img src={carrosel2} alt="" className="carousel-img" />
                </div>
                <div className="carousel-item">
                  <img src={carrosel3} alt="" className="carousel-img" />
                </div>
                <div className="carousel-item">
                  <img src={carrosel4} alt="" className="carousel-img" />
                </div>
                <div className="carousel-item">
                  <img src={carrosel5} alt="" className="carousel-img" />
                </div>
                <div className="carousel-item">
                  <img src={carrosel6} alt="" className="carousel-img" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div>
          <h2 className="nosso-ensaio">NOSSO ENSAIO</h2>

          <div className="ratio ratio-16x9 video-wrapper">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-3"
            />
          </div>

          <p id="paragrafo-amor">Com amor, Milane e Lucas.</p>
        </div> */}
      </div>
    </>
  );
}

export default Inicio;
