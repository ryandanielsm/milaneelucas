import logo from '../../assets/logo.PNG';


function Header() {
    return(
    <>
    <div className='d-flex align-items-center'>
    <img src={logo} alt="" width={82} />
    <ul className='list-unstyled d-flex'>
        <li>
            <a href="">INÍCIO</a>
        </li>
        <li>
            <a href="">CERIMÔNIA</a>
        </li>
        <li>
            <a href="">CONFIRMAR PRESENÇA</a>
        </li>
        <li>
            <a href="">LISTA DE PRESENTES</a>
        </li>
    </ul>
    </div>
    </>
    )
}

export default Header;