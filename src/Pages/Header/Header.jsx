import React from 'react';
import './Header.css';
import { RiAccountCircleLine } from "react-icons/ri";
import { RiParentFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiWalkFill } from "react-icons/ri";



const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <img src="https://rafaellindemann.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffc91fd6e-8ab9-4702-9997-d40bff18f361%2Fe4caefe6-a706-42d1-a3cf-6b2d59ee4880%2Ffarmarcia-logo-pq.png?table=block&id=0bbfad43-a85c-4c89-a655-cedbec8b34be&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=330&userId=&cache=v2" alt="Logo" />
          </div>
          <div className="search-bar">
          <RiSearchLine />

            <input type="text" placeholder=" Pesquisar..." />
          </div>
          <div className="header-icons">
          <RiAccountCircleLine />

            <a href="#" className="icon-link">Entrar</a>
            <RiWalkFill />

            <a href="#" className="icon-link">Fila</a>
            <RiParentFill />
            <a href="#" className="icon-link">Sobre Nós</a>

          </div>
        </div>
      </header>
      <nav className="category-bar">
        <a href="#">Todas as Categorias</a>
        <a href="#">Outlet</a>
        <a href="#">Mamães e Bebês</a>
        <a href="#">Dermocosméticos</a>
        <a href="#">Medicamentos e Saúde</a>
        <a href="#">Higiene e Beleza</a>
        <a href="#">Fitness e Nutrição</a>
        <a href="#">Nossas Marcas</a>
      </nav>
    </>
  );
};

export default Header;
