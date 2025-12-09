import Header from "../../componentes/header/header";
import "./Cerimonia.css";
import Flor1 from "../../assets/flor-cerimonia-1.png";
import Flor2 from "../../assets/flor-cerimonia-2.png";
import Local from "../../assets/local.png";

function Cerimonia() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="cerimonia">
          <img src={Flor1} alt="#" width={100} />
          <h1>CERIMÔNIA</h1>
          <img src={Flor2} alt="#" width={100} />
        </div>
        <div className="local">
          <img className="img-fluid pt-4" src={Local} alt="Imagem do local" />
          <div id="endereco">
            <h2>QUALITY HOTEL ARACAJU</h2>
            <p>
              Av. Delmiro Gouveia, 100 - Coroa do Meio, Aracaju - SE, 49035-500
            </p>
          </div>
        </div>
        <div className="paragrafo-local d-flex flex-column text-center justify-content-center align-items-center mt-3">
          <p>
            A celebração da nossa união está se aproximando e a alegria{" "}
            <br></br> desse dia estará completa com você ao nosso lado.
          </p>
          <p>
            Contamos com a presença de todos para celebrarmos o nosso <br></br>
            amor no dia <b>14 de Março de 2026</b>, pontualmente às{" "}
            <b>16h30.</b>
          </p>
        </div>
        <div className="mapa-container d-flex justify-content-center mt-2 mb-5">
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2588661882482!2d-37.049894488874!3d-10.943807822302638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3f98797cf35%3A0xff567a4db43c658e!2sQuality%20Hotel%20Aracaju!5e0!3m2!1spt-BR!2sbr!4v1763142171089!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mapa-iframe"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cerimonia;
