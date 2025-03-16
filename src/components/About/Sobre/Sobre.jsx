//CSS
import style from './Sobre.module.css';

const Sobre = () => {
    return (
        <section className={`${style.sobre} d-flex flex-column align-items-center`}>
            <h2 className={`${style.titulo} mb-4`}>PEDIATRA E NEFROLOGISTA</h2>
            <div className={`${style.conteudo} d-flex flex-column gap-3`}>
                <p>Formada pela <strong>Faculdade de Medicina do ABC</strong>, a Dra. Suzane Sales é <strong>especializada em pediatria pela Santa Casa de Misericórdia de São Paulo</strong>, além de ser <strong>sub-especializada em nefrologia pela Faculdade de Medicina da USP</strong>.</p>
                <p>Em mais de 10 anos de carreira, a profissional já passou por diversos hospitais de referência como o Hospital Sabará, especializado em crianças e adolescentes, e há mais de 5 anos integra o corpo clínico dos hospitais Israelita Albert Einstein e Hospital das Clínicas de São Paulo. Neste último, a doutora é integrante da equipe de nefrologia pediátrica.</p>
            </div>
        </section>
    )
}

export default Sobre
