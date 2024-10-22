import { Link } from "react-router-dom"; 

function Produto(){
    return(
        <div>
            <h1>Bem-Vindo à página de Produto</h1>

            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/home'>Home</Link>
        </div>
    );
}

export default Produto;