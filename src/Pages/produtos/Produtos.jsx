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
                  src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
            <h3>trust &amp; co.</h3>
            <p>Fill out the form and the algorithm will offer the right team of experts</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">branding</li>
              <li style={{ '--clr-tag': '#70b3b1' }} className="packaging">packaging</li>
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
            <h3>tonic</h3>
            <p>Fill out the form and the algorithm will offer the right team of experts</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">branding</li>
              <li style={{ '--clr-tag': '#d05fa2' }} className="marketing">marketing</li>
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
