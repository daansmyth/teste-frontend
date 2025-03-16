// CSS
import style from './About.module.css';

// COMPONENTS
import Depoimentos from '../components/About/Depoimentos/Depoimentos';
import Sobre from '../components/About/Sobre/Sobre';
import Trajetoria from '../components/About/Trajetoria/Trajetoria';

const About = () => {
  return (
    <main>
      <section className={`${style.banner} position-relative`}>
        <div className={`${style.texto} d-flex flex-column`}>
          <p className={`ms-5 mb-2`}>SOBRE A</p>
          <div >
            <p className={`${style.bgtexto} d-flex flex-column ps-5 gap-2 pe-5`}>
              <span>DRA. SUZANE</span>
              <span>SALES</span>
            </p>
          </div>
        </div>
      </section>
      <Sobre />
      <Depoimentos />
      <Trajetoria />

    </main>
  )
}

export default About
