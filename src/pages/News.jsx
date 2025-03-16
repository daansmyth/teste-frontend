// CSS
import style from './News.module.css';

// IMAGENS
import imgBanner from '../assets/IMG_2434.svg';
import imgUrso from '../assets/Grupo 107.png';

// COMPONENTS
import Noticias from '../components/News/Noticias/Noticias';

const News = () => {
  return (
    <main>
      <header className={`${style.banner}`}>
        <img src={imgBanner} />
        <div className={`${style.conteudo} d-flex flex-column align-items-center gap-3`}>
          <img src={imgUrso} alt="Desenho de ursinho" />
          <div>
            <h2 className={`${style.titulo}`}>BLOG</h2>
            <p className={`${style.texto}`}>Dra. Suzane Sales</p>
          </div>
        </div>
      </header>

      <Noticias />
    </main>
  )
}

export default News
