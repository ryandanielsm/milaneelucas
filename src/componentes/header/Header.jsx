import logo from '../../assets/logo.PNG';
import "./Header.css";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100 bg-transparent">
                <div className="container-fluid justify-content-center position-relative">

                    {/* Logo à esquerda */}
                    <a className="navbar-brand position-absolute start-0 ms-3" href="#">
                        <img src={logo} alt="Logo" width={82} id='logo-mobile' />
                    </a>

                    {/* Botão hamburguer (mobile) */}
                    <button
                        className="hamburger-btn d-lg-none"  /* some no desktop */
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                        aria-controls="navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Menu centralizado */}
                    <div className="listas collapse navbar-collapse justify-content-center" id="navbar">
                        <ul className="navbar-nav mb-2 mb-lg-0" id='navbar-mobile'>
                            <li className="nav-item">
                                <a className="nav-link" href="/inicio">INÍCIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cerimonia">CERIMÔNIA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/confirmar-presenca">CONFIRMAR PRESENÇA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lista-presente">LISTA DE PRESENTES</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;
