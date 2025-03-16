import { Link } from 'react-router-dom';

// CSS
import style from './Agendar.module.css';

// IMAGENS
import imgConsultorio from '../../../assets/DSC_6947@2x.png';
import imgAgendarUrso from '../../../assets/Grupo de máscara 10.svg';

const Agendar = () => {
    return (
        <section className={`${style.agendar} row mb-5`}>
            <div className={`${style.imagem} col-4 d-flex justify-content-end`}>
                <img src={imgConsultorio} alt="Dra. Suzane examinando uma menininha" />
            </div>

            <div className={`${style.conteudo} col-md-6 d-flex justify-content-center`}>
                <div className={`col-md-6 d-flex flex-column justify-content-center gap-2`}>
                    <div className={`d-flex flex-column gap-3`}>
                        <h2 className={`${style.titulo}`}>AGENDAR CONSULTA</h2>
                        <p className={`${style.texto}`}>A sua agenda pode ser feita por duas maneiras.</p>
                        <p className={`${style.texto}`}>
                            <span>Basta selecionar o desejado</span>
                        </p>
                    </div>

                    <div className={`d-flex align-items-start gap-3 mt-4`}>
                        <Link to='#' className={`btn-custom btn-rosa d-flex align-items-center justify-content-center gap-1`}>
                            <i className={`fa-solid fa-phone-volume`}></i>
                            Telefone
                        </Link>
                        <Link to='/#' className={`btn-custom btn-rosa d-flex align-items-center justify-content-center gap-1`}>
                            <i className={`fa-brands fa-whatsapp`}></i>
                            WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`col-md-2 d-flex justify-content-end`}>
                <img src={imgAgendarUrso} alt="Urso cor verde" />
            </div>
        </section>
    )
}

export default Agendar
