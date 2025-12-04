import "./Confirmar.css"
import Header from "../../componentes/header/header"


function Confirmar() {

    return (
        <>
            <Header></Header>
            <h1 className="confirmar d-flex text-center justify-content-center align-items-center">CONFIRMAR PRESENÇA</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xl-6">
                        <div className="textos-1">
                            <h2>Sua resposta é essencial para que tudo <br></br> fique perfeito no nosso grande dia</h2>
                            <p className="mt-3">Para garantir que tudo seja perfeito e que possamos recebê-lo com todo o carinho e conforto que você merece, pedimos a gentileza de confirmar sua presença na lista de convidados até o dia <b>xx/xx/xx.</b></p>
                            <p className="mt-3 mb-5">Preencha seu nome e adicione todos os acompanhantes incluídos no seu convite nos campos indicados, garantindo o nome completo de cada um.</p>
                        </div>

                    </div>
                    <div className="coluna col-sm-12 col-xl-6">
                        <div id="fundo-form">
                            <h1 className="confirme-aqui text-center">Confirme aqui</h1>
                            <div className="d-flex gap-3 mt-4 mb-4">
                                <input type="text" className="form-control input-pequeno" placeholder="Digite seu nome" aria-describedby="button-addon2">
                                </input>
                                <button className="botao btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
                            </div>
                            <ul className="lista list-group list-group-flush mb-4">
                                <li className="list-group-item d-flex justify-content-between">An item <i className="bi bi-trash"></i> </li>
                            </ul>
                            <div className="text-center">
                                <button className="botao btn btn-outline-secondary" type="button" id="button-adicionar">Confirmar Presença</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Confirmar;