import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Sobre';  
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';
import Rodape from './components/Rodape'; 


import './estilo.css';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='*' element={<Erro />} />
                <Route path='/produto' element={<Produto />} />
            </Routes>
            <Rodape /> {/* Adicionando o Rodape */}
        </BrowserRouter>
    );
}

export default RoutesApp;