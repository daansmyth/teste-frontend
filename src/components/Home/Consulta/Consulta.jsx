// CSS
import style from './Consulta.module.css'

// DADOS
import cards from '../../../db/consultas.json'

const Consulta = () => {
    return (
        <section className={style.consulta}>
            <ul className={`row d-flex justify-content-center gap-3`}>
                {cards.map((card) => (
                    <li key={card.id} className={`col-md-3 mb-4 p-0 bg-white ${style.card}`}>
                        <img className={`img-fluid`} src={card.img} alt={card.title} />
                        <div className={`d-flex flex-column m-4 gap-4`}>
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Consulta
