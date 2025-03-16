import { Link } from 'react-router-dom'

// CSS
import style from './Navbar.module.css'

const Navbar = () => {

  const gotoBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <nav>
      <div className={style.logo}>
        <Link to="/">
          <span>Dra.</span>
          <h1>Suzane Sales</h1>
          <p>Pediatria e nefrologia pediátrica</p>
        </Link>
      </div>
      <div className={style.menu}>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/faq">Perguntas Frequentes</Link>
          </li>
          <li>
            <Link to="/news">Notícias e Conteúdo</Link>
          </li>
          <li>
            <Link to="#" onClick={gotoBottom}>Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
