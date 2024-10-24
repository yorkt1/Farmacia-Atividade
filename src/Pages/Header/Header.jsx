import React from 'react';
import './Header.css';
import Logo from '../../componentes/Logo/Logo';
import { RiAccountCircleLine, RiParentFill, RiSearchLine, RiWalkFill } from "react-icons/ri";
import { Link } from 'react-router-dom';  // Importe o Link do React Router

const Header = ({ onScrollToSection }) => {
  return (
    <>
      <header>
        <div className="header-container">
       <Logo/>
          <div className="search-bar">
            <RiSearchLine />
            <input type="text" placeholder=" Pesquisar..." />
          </div>
          <div className="header-icons">
            
            <a href="/" className="icon-link">Principal</a>
           
            <Link to="/fila" className="icon-link">Fila</Link> 
           
            <a href="#" className="icon-link" onClick={() => onScrollToSection('section1')}>Sobre Nós</a>
          </div>
        </div>
      </header>
      <nav className="category-bar">
        <a className='Letras' href="#">Todas as Categorias</a>
        <a className='Letras' href="#">Outlet</a>
        <a className='Letras' href="#">Mamães e Bebês</a>
        <a className='Letras' href="#">Dermocosméticos</a>
        <a className='Letras' href="#">Medicamentos e Saúde</a>
        <a className='Letras' href="#">Higiene e Beleza</a>
        <a className='Letras' href="#">Fitness e Nutrição</a>
        <a className='Letras' href="#">Nossas Marcas</a>
      </nav>
    </>
  );
};

export default Header;
