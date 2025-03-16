import { Link } from 'react-router-dom';

// CSS
import style from './Noticias.module.css';

// DADOS
import noticias from '../../../db/noticias.json';

const Noticias = () => {

    const gotoTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <section className={`${style.noticias}`}>
            <div className={`${style.lista} d-flex p-3 align-items-center justify-content-center gap-3`}>
                <Link className={`${style.item} position-relative`} to={`/news/${0}`} onClick={gotoTop}>
                    <img className={`img-fluid`} src={noticias[0].img} alt={noticias[0].title} />
                    <div className={`${style.conteudo} col-md-11 d-flex flex-column gap-2`}>
                        <h3 className={`${style.titulo}`}>{noticias[0].title}</h3>
                        <h4 className={`${style.subtitulo}`}>{noticias[0].subTitle}</h4>
                    </div>
                </Link>
                <Link className={`${style.item} position-relative`} to={`/news/${1}`} onClick={gotoTop}>
                    <img className={`img-fluid`} src={noticias[1].img} alt={noticias[1].title} />
                    <div className={`${style.conteudo} col-md-11 d-flex flex-column gap-2`}>
                        <h3 className={`${style.titulo}`}>{noticias[1].title}</h3>
                        <h4 className={`${style.subtitulo}`}>{noticias[1].subTitle}</h4>
                    </div>
                </Link>
                <div className={`d-flex flex-column`}>
                    <Link className={`${style.item} position-relative`} to={`/news/${2}`} onClick={gotoTop}>
                        <img className={`img-fluid`} src={noticias[2].img} alt={noticias[2].title} />
                        <div className={`${style.conteudo} col-md-11 d-flex flex-column gap-2`}>
                            <h3 className={`${style.titulo}`}>{noticias[2].title}</h3>
                            <h4 className={`${style.subtitulo}`}>{noticias[2].subTitle}</h4>
                        </div>
                    </Link>
                    <Link className={`${style.item} position-relative`} to={`/news/${3}`} onClick={gotoTop}>
                        <img className={`img-fluid`} src={noticias[3].img} alt={noticias[3].title} />
                        <div className={`${style.conteudo} col-md-11 d-flex flex-column gap-2`}>
                            <h3 className={`${style.titulo}`}>{noticias[3].title}</h3>
                            <h4 className={`${style.subtitulo}`}>{noticias[3].subTitle}</h4>
                        </div>
                    </Link>
                </div>
                <Link className={`${style.item} position-relative`} to={`/news/${4}`} onClick={gotoTop}>
                    <img className={`img-fluid`} src={noticias[4].img} alt={noticias[4].title} />
                    <div className={`${style.conteudo} col-md-11 d-flex flex-column gap-2`}>
                        <h3 className={`${style.titulo}`}>{noticias[4].title}</h3>
                        <h4 className={`${style.subtitulo}`}>{noticias[4].subTitle}</h4>
                    </div>
                </Link>
            </div>
            <Link to='/news' className={`${style.link}`} onClick={gotoTop}>Ver todas</Link>
        </section>
    )
}

export default Noticias
