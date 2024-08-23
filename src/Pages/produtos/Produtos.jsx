// CardSection.js
import React from 'react';
import './Produtos.css'; // Importa o arquivo CSS

const Produtos = () => {
  return (
    <section>
      <h2>
        Todas novidades<br /> far Marcia</h2>
      <div className="container">
        <div className="card">
          <div className="card-inner" style={{ '--clr': '#fff' }}>
            <div className="box">
              <div className="imgBox">
                <img 
                  src="https://rafaellindemann.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffc91fd6e-8ab9-4702-9997-d40bff18f361%2F319f4c3e-82a3-4672-9613-69beabdbd757%2Ffarmarcia-placa.png?table=block&id=6756a027-a925-4623-87a2-33e0726a2221&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1150&userId=&cache=v2" 
                  alt="Trust & Co." 
                />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined">Ir</span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>Localidade</h3>
            <p>Encontre a farmacia que encantou o brasil na sua cidade.</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">Maps e Google  </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-inner" style={{ '--clr': '#fff' }}>
            <div className="box">
              <div className="imgBox">
                <img 
                  src="https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Tonic" 
                />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined">Ir</span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>Novidades</h3>
            <p>Conheça todas as novidades de produtos da nova farmacia</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">Novos Produtos </li>
            
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-inner" style={{ '--clr': '#fff' }}>
            <div className="box">
              <div className="imgBox">
                <img 
                  src="https://rafaellindemann.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffc91fd6e-8ab9-4702-9997-d40bff18f361%2Fc92cd9c8-bd04-442a-bc1c-327f0fb166b5%2Ffarmarcia-camiseta.png?table=block&id=d23f77bb-9437-49a8-996c-f45619054cc5&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1100&userId=&cache=v2" 
                  alt="Shower Gel" 
                />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined">Ir</span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>Roupas</h3>
            <p>Faça parte dessa familia e venha conhecer a confecção de roupas da farmacia.</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">Confecções</li>
           
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
