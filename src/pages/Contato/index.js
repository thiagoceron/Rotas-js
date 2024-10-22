import { Link } from "react-router-dom"; 

function Contato(){
    return(
        <div>
            <h1>Bem-Vindo à página CONTATO</h1>

            <Link to='/sobre'>Sobre</Link>
            <Link to='/home'>Home</Link>
            <Link to='/produto'>Produto</Link>
        </div>
    );
}

export default Contato;