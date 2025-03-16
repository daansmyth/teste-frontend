// CSS
import style from './Trajetoria.module.css';

//IMAGENS
import imgEstetoscopio from '../../../assets/Grupo 12.svg'
import imgMicroscopio from '../../../assets/Grupo 25.svg'
import imgTrajetoria from '../../../assets/Grupo 33.svg'

const Trajetoria = () => {
    return (
        <section className={`${style.trajetoria} row d-flex gap-3 mb-5`}>
            <div className={`d-flex align-items-center justify-content-center gap-2`}>
                <img src={imgMicroscopio} alt="Desenho de um microscópio" />
                <img src={imgEstetoscopio} alt="Desenho de um estetoscópio" />
                <img src={imgTrajetoria} alt="Desenho" />
            </div>
            <h2 className={`${style.titulo} text-center`}>TRAJETÓRIA MÉDICA</h2>

            <div className={`container`}>
                <div className={`${style.conteudo} row d-flex align-items-start`}>
                    <div className={`col-md-6 d-flex flex-column justify-content-center`}>
                        <h3 className={`${style.titulo} ${style.underline} ps-4`}>Títulos</h3>
                        <ul className={`${style.lista} d-flex gap-3 flex-column p-5`}>
                            <li className={`${style.item}`}>Especialista em Nefrologia Pediátrica pela Sociedade Brasileira de Nefrologia - 2017</li>
                            <li className={`${style.item}`}>Especialista em Pediatria (TEP) pela Sociedade Brasileira de Pediatria - 2015</li>
                        </ul>
                    </div>
                    <div className={`col-md-6 d-flex flex-column justify-content-center`}>
                        <h3 className={`${style.titulo} ${style.underline} ps-4`}>Residência Médica</h3>
                        <ul className={`${style.lista} d-flex gap-3 flex-column p-5`}>
                            <li className={`${style.item}`}>Residência Médica • Residência médica no Programa de Nefrologia Pediátrica do Hospital das Clínicas – Instituto da Criança (FMUSP-HC), iniciado em 2015 e concluído em 2017.</li>
                            <li className={`${style.item}`}>Residência médica no Programa de Pediatria da Irmandade da Santa Casa de Misericórdia de São Paulo, iniciado em 2013 e concluído em 2015.</li>
                        </ul>
                    </div>
                </div>
                <div className={`row d-flex align-items-center justify-content-center`}>
                    <div className={`col-sm-11 d-flex flex-column align-items-center justify-content-center`}>
                        <h3 className={`${style.titulo} ps-4`}>EXPERIÊNCIA PROFISSIONAL</h3>
                        <ul className={`${style.lista} d-flex gap-3 flex-column align-items-center p-3`}>
                            <li className={`${style.item}`}>Médica da equipe de nefrologia Pediátrica do Instituto da Criança (FMUSP-HC) – Admissão em junho de 2018.</li>
                            <li className={`${style.item}`}>Médica plantonista PS Pediatria do Hospital Israelita Albert Einstein unidade Morumbi – Admissão em janeiro de 2017.</li>
                            <li className={`${style.item}`}>Médica plantonista da Enfermaria do Hospital Sabará 2016-2017</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Trajetoria
