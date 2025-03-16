import { Link } from 'react-router-dom'

// CSS
import style from './Sobre.module.css'

// IMAGES
import imgSobre from '../../../assets/IMG_2434@2x.png';

const Sobre = () => {
    return (
        <section className={`${style.sobre}`}>
            <div className='row'>
                <div className={`${style.imagem} col-md-4 d-flex justify-content-end`}>
                    <img src={imgSobre} alt="Dra. Suzane" />
                </div>
                <div className={`${style.conteudo} col-md-8 p-5 d-flex flex-column justify-content-center`}>
                    <span>
                        <h2 className={`${style.titulo}`}>Sobre a Dra. Suzane Sales</h2>
                        <p className={`${style.texto}`}>Pediatra e nefrologista</p>
                    </span>
                    <p className={`${style.texto}`}>Formada pela Faculdade de Medicina do ABC, a Dra. Suzane Sales é especializada em pediatria pela Santa Casa de Misericórdia de São Paulo, além de ser sub-especializada em nefrologia pela Faculdade de Medicina da USP.</p>
                    <p className={`${style.texto}`}>Com mais de 10 anos de carreira médica a profissional dedica a sua vida à pediatria, com foco total na saúde, bem-estar e desenvolvimento dos pequenos.</p>

                    <Link to='/about' className='btn-custom btn-rosa'>
                        Saiba Mais
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Sobre
