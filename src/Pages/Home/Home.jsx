



import Header from '../Header/Header'; 
import Inicio from '../Inicio/Inicio';
import Produto from '../produtos/Produtos';
import Sobrenos from  '../Sobrenos/Sobrenos';
function Home() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
    <>
<Header onScrollToSection={scrollToSection} />

<Inicio/>
<Produto/>
<Sobrenos/>
    </>
        
    );
}

export default Home;