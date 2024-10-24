import './App.css'

import Home from './Pages/Home/Home'; 

import Telafila from './Pages/TelaFila/Telafila'  // Corrigir o caminho para a Tela da Fila
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  // Função para rolar suavemente para uma seção específica
 

  return (
    <Router> 
      <>
        
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          
         
          <Route path="/fila" element={<Telafila />} />
        </Routes>

       
      
      </>
    </Router>
  )
}

export default App;
