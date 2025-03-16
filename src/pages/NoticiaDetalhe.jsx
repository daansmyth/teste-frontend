import { Link, useParams } from 'react-router-dom';

// DADOS
import noticias from '../db/noticias.json';

// CSS
import style from './NoticiaDetalhe.module.css';

// COMPONENTS
import Noticias from '../components/Home/Noticias/Noticias.jsx'

const NoticiaDetalhe = () => {

    const { id } = useParams();
    const noticia = noticias.find((noticia) => noticia.id === id);

    if (!noticia) {
        return <p>Noticia não encontrada.</p>;
    }

    return (
        <main>
            <header className={`${style.banner}`}>
                <div className={`${style.bannerOver}`}>
                    <Link className={`${style.link} btn-custom btn-verde d-flex gap-1`} to='/news'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Voltar</span>
                    </Link>
                    <h2 className={`${style.titulo}`}>{noticia.title}</h2>
                </div>
                <img src={noticia.img} alt={noticia.title} />
            </header>
            <section className={`${style.noticiaDetalhe}`}>
                <div className="container">
                    <div className="row">
                        <ul className="col-lg-8 mx-auto d-flex flex-column gap-3">
                            {noticia.content.map((item, index) => (
                                <div key={index}>
                                    <li className={`${style.titulo} mb-2`}>{item.title}</li>
                                    <li className={`${style.texto}`}>{item.texto}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Noticias />
        </main>
    )
}

export default NoticiaDetalhe
