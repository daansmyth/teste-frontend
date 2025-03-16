// CSS
import style from './Perguntas.module.css';

// DADOS
import faqs from '../../../db/faqs.json';

const Perguntas = () => {
    return (
        <section className={`${style.perguntas} d-flex mx-auto`}>
            <div className="accordion w-100" id="accordionPanelsStayOpenExample">
                {faqs.map((faq) => (
                    <div class="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${faq.id}`} aria-expanded="false" aria-controls={`${faq.id}`}>
                                {faq.pergunta}
                            </button>
                        </h2>
                        <div id={`${faq.id}`} className="accordion-collapse collapse">
                            <div className="accordion-body">
                                {faq.resposta}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Perguntas
