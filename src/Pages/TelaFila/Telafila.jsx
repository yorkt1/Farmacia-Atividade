import React, { useState } from "react";
import './styles.css';
import Header from "../Header/Header";

const Telafila = () => {
  const [filaSenhas, setFilaSenhas] = useState({
    normal: [],
    preferencial: []
  });
  const [senhaChamada, setSenhaChamada] = useState("Nenhuma");

  const gerarSenha = (tipo) => {
    const numero = Math.floor(Math.random() * 1000);
    const senha = tipo === "preferencial" ? `P${numero}` : `N${numero}`;
    setFilaSenhas((prevFila) => ({
      ...prevFila,
      [tipo]: [...prevFila[tipo], senha]
    }));
  };

  const chamarSenha = () => {
    if (filaSenhas.preferencial.length > 0) {
      const senha = filaSenhas.preferencial.shift();
      setSenhaChamada(senha);
      setFilaSenhas((prevFila) => ({
        ...prevFila,
        preferencial: prevFila.preferencial.slice(1)
      }));
    } else if (filaSenhas.normal.length > 0) {
      const senha = filaSenhas.normal.shift();
      setSenhaChamada(senha);
      setFilaSenhas((prevFila) => ({
        ...prevFila,
        normal: prevFila.normal.slice(1)
      }));
    } else {
      setSenhaChamada("Fila vazia!");
    }
  };

  return (
    <div>
     <Header/>
      <main>
        <section id="senhas" className="body">
          <h2>Sistema de Senhas</h2>
          <div className="senha-controls">
            <div className="senha-area">
              <h3>Gerar Senhas</h3>
              <button onClick={() => gerarSenha("normal")}>Gerar Senha Normal</button>
              <button onClick={() => gerarSenha("preferencial")}>Gerar Senha Preferencial</button>
            </div>
            <div className="senha-area">
              <h3>Chamar Senhas</h3>
              <button onClick={chamarSenha}>Chamar Senha</button>
              <div id="display-senha">Senha chamada: {senhaChamada}</div>
            </div>
          </div>
          <div className="senha-lists">
            <div className="senha-list">
              <h3>Senhas Normais</h3>
              <ul id="lista-normal">
                {filaSenhas.normal.map((senha, index) => (
                  <li key={index}>{senha}</li>
                ))}
              </ul>
            </div>
            <div className="senha-list">
              <h3>Senhas Preferenciais</h3>
              <ul id="lista-preferencial">
                {filaSenhas.preferencial.map((senha, index) => (
                  <li key={index}>{senha}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Farmárcia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Telafila;
