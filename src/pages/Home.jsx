import { Link } from 'react-router-dom';

// CSS
import style from './Home.module.css';

// COMPONENTS
import Consulta from '../components/Home/Consulta/Consulta.jsx';
import Sobre from '../components/Home/Sobre/Sobre.jsx';
import Consultorio from '../components/Home/Consultorio/Consultorio.jsx';
import Agendar from '../components/Home/Agendar/Agendar.jsx';
import Noticias from '../components/Home/Noticias/Noticias.jsx';
import Faq from '../components/Home/Faq/Faq.jsx';

const Home = () => {

  return (
    <main>
      <section className={`${style.banner} position-relative`}>
        <div className={`${style.texto} d-flex flex-column`}>
          <p className={`ms-4 mb-2`}>PEDIATRA E</p>
          <p className={`ms-4 mb-1`}>NEFROLOGIA</p>
          <div >
            <p className={`${style.bgtexto} ps-4`}>INFANTIL</p>
          </div>
        </div>
        <div >
          <Link to="#" className={`${style.link}`}>AGENDE SUA CONSULTA</Link>
        </div>
      </section>

      <Consulta />
      <Sobre />
      <Consultorio />
      <Noticias />
      <Faq />
      <Agendar />
    </main>
  )
}

export default Home
