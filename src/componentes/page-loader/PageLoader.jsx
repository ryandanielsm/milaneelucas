import logoBranca from "../../assets/logo-branca.PNG";
import "./PageLoader.css";

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <img src={logoBranca} alt="Carregando..." className="logo-pulse" />
      </div>
    </div>
  );
}

export default PageLoader;
