import { Link } from 'react-router-dom'

// CSS
import style from './Faq.module.css'

// IMAGENS
import imgBebeUm from '../../../assets/Grupo 315.svg';
import imgBebeDois from '../../../assets/Grupo 316.svg';
import imgBebeTres from '../../../assets/Grupo 317.svg';
import imgBebeQuatro from '../../../assets/Grupo 318.svg';

const Faq = () => {
    return (
        <section className={`${style.faq} row`}>
            <div className={`col-md-6 d-flex flex-column text-center gap-3 mx-auto`}>
                <div className={`d-flex align-items-center justify-content-center gap-2`}>
                    <img src={imgBebeUm} alt="Desenho de um bebe" />
                    <img src={imgBebeDois} alt="Desenho de um bebe" />
                    <img src={imgBebeTres} alt="Desenho de um bebe" />
                    <img src={imgBebeQuatro} alt="Desenho de um bebe" />
                </div>
                <p className={`${style.texto}`}>Perguntas Frequentes</p>
                <div>
                    <h4 className={`${style.titulo}`}>O IDEAL É LEVAR O SEU BEBÊ AO PEDIATRA LOGO NA PRIMEIRA SEMANA DE VIDA!</h4>
                </div>
                <p className={`${style.texto}`}>Vem ver outras respostas que podem te interessar</p>
                <div>
                    <Link to='#' className={`btn-custom btn-rosa d-flex mx-auto`}>Saiba Mais</Link>
                </div>
            </div>

        </section>
    )
}

export default Faq
