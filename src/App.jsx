
import './App.css'
import Header from './Pages/Header/Header'
import Produtos from './Pages/produtos/Produtos'
import Inicio from './Pages/Inicio/Inicio'
import Sobrenos from './Pages/Sobrenos/Sobrenos'


const App = () => {
  // Função para rolar suavemente para uma seção específica
  const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };
  return (
    <>
     <Header onScrollToSection={scrollToSection}/>
     <Inicio/>
     <Produtos/>
     <Sobrenos/>
    
    </>
  )
}

export default App
