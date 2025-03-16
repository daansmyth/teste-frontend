// CSS
import style from './Faq.module.css'

// IMAGENS
import imgBebeUm from '../assets/Grupo 3151.svg';
import imgBebeDois from '../assets/Grupo 3184.svg';
import imgBebeTres from '../assets/Grupo 3173.svg';
import imgBebeQuatro from '../assets/Grupo 3162.svg';

// COMPONENTS
import Perguntas from '../components/Faq/Perguntas/Perguntas';
import Noticias from '../components/Home/Noticias/Noticias.jsx';

const Faq = () => {
  return (
    <main className={`${style.main}`}>
      <span className={`${style.banner}`}>
        <section className={`${style.faq} row d-flex align-items-center justify-content-center`}>
          <div className={`col-md-6 d-flex flex-column justify-content-center align-items-center gap-3`}>
            <div className={`d-flex align-items-center justify-content-center gap-2`}>
              <img src={imgBebeUm} alt="Desenho de um bebe" />
              <img src={imgBebeDois} alt="Desenho de um bebe" />
              <img src={imgBebeTres} alt="Desenho de um bebe" />
              <img src={imgBebeQuatro} alt="Desenho de um bebe" />
            </div>
            <p className={`${style.texto}`}>Perguntas Frequentes</p>
            <div>
              <h2 className={`${style.titulo} text-center`}>O IDEAL É LEVAR O SEU BEBÊ AO PEDIATRA LOGO NA PRIMEIRA SEMANA DE VIDA!</h2>
            </div>
            <p className={`${style.texto} d-flex gap-2`}>
              Vem ver outras respostas que podem te interessar
              <i class="fa-regular fa-hand-point-down fs-5"></i>
            </p>
          </div>
        </section>
      </span>

      <h3 className={`${style.titulo} mx-auto`}>NOTÍCIAS E CONTEÚDO</h3>
      <Perguntas />
      <Noticias />
    </main>
  )
}

export default Faq
