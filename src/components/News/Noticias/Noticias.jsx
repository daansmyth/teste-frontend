import { Link } from 'react-router-dom';

// CSS
import style from './Noticias.module.css';

// DADOS
import noticias from '../../../db/noticias.json';


const gotoTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}

const Noticias = () => {
    return (
        <section className={`${style.noticias}`}>
            <div className="row g-3 align-items-stretch p-5">
                {noticias.map((noticia) => (
                    <div className="col-lg-4 d-flex" key={noticia.id}>
                        <div className={`${style.card} card h-100 d-flex flex-column`}>
                            <img src={noticia.img} alt={noticia.title} />
                            <div className={`${style.cardbody} card-body d-flex flex-column flex-grow-1 gap-2`}>
                                <h5 className={`${style.titulo}`}>{noticia.title}</h5>
                                <p className={`${style.texto} flex-grow-1`}>{noticia.subTitle}</p>
                                <div className="mt-auto">
                                    <Link to={`/news/${noticia.id}`} className={`${style.link}`} onClick={gotoTop}>Leia mais</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Noticias;
