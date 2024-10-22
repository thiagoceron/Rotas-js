import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h2>Thiago Ceron</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/erro'>Erro</Link>
                <Link to='/produto'>Produto</Link>
            </div>
        </header>
    );
}

export default Header;