// CSS
import style from './Depoimentos.module.css';

// IMAGENS
import imgDepoimento from '../../../assets/DSC_6984 copiar.png'

const Depoimentos = () => {
    return (
        <section className={`${style.depoimentos}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-6`}>
                        <img className={`img-fluid`} src={imgDepoimento} alt="Doutora Suzane examinando uma menininha loira de olhos claros" />
                    </div>
                    <div className={`col-md-6 d-flex`}>
                        <div className={`${style.conteudo} d-flex flex-column gap-3 justify-content-center`}>
                            <h3 className={`${style.titulo}`}>FALA, DOUTORA!</h3>
                            <p>
                                <strong>“O carinho pelas crianças sempre me incentivou e foi que o me motivou dedicar a minha vida à pediatria.”</strong>
                            </p>
                            <p className={`${style.texto}`}>
                            “Sou mãe de uma menina de 3 aninhos. Compreendo cada vez mais os desafios que a vida nos impõe com a rotina intensa, hiper conexão, alimentos ultra processados e excessos em geral que podem influenciar na saúde física e mental dos nossos pequenos.</p>
                            <p className={`${style.texto}`}>Faz parte do meu estilo de atendimento avaliar a criança como um todo, sempre prezando por uma vida mais saudável e equilibrada. Meu grande propósito é promover o desenvolvimento de crianças saudáveis e felizes.</p>
                            <p className={`${style.texto}`}>A participação da família é fundamental no processo de atendimento. Gosto de envolver todos os integrantes do núcleo familiar para compreender as dinâmicas e rotinas, criando um plano de atendimento personalizado. “</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Depoimentos
