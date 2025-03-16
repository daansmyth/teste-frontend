import { Link } from 'react-router-dom';

// CSS
import style from './Footer.module.css';

// IMAGENS
import imgSuzaneSales from '../../assets/Grupo de máscara 9@2x.png';

const Footer = () => {
  return (
    <footer className={`${style.footer} container-fluid d-flex flex-column`}>

      <div className={`${style.corpo} row d-flex flex-column gap-3 pt-5 pb-2`}>
        <div className={`d-flex flex-column justify-content-center align-items-center`}>
          <img src={imgSuzaneSales} alt="Dra. Suzane Sales" />
          <p className={`${style.texto}`}>CRM: 157636</p>
        </div>
        <div className={`row`}>
          <div className={`col-md-12 col-lg-4 d-flex align-items-start justify-content-around gx-3 p-3`}>
              <ul className={`col-md-3 col-lg-6 d-flex flex-column gap-2`}>
                <li><Link to="/" className={`${style.link}`}>Home</Link></li>
                <li><Link to="/about" className={`${style.link}`}>Sobre</Link></li>
                <li><Link to="/faq" className={`${style.link}`}>Perguntas Frequentes</Link></li>
              </ul>
              <ul className={`col-md-3 col-lg-6 d-flex flex-column gap-2`}>
                <li><Link to="/news" className={`${style.link}`}>Notícias e Conteúdo</Link></li>
                <li><Link to="#" className={`${style.link}`}>Contato</Link></li>
              </ul>
          </div>

          <div className={`col-md-12 col-lg-6 d-flex align-items-start justify-content-start gap-2 p-1`}>
            <div className={`col-lg-6 ${style.endereco}`}></div>
            <div className={`col-lg-6 d-flex justify-content-start`}>
              <div className={`d-flex flex-column gap-1`}>
                <p className={`${style.texto} ${style.light}`}>Consultório particular</p>
                <p className={`${style.texto} ${style.light}`}>Av. Senador Vergueiro,2123 - São Bernardo do Campo - 16º. Andar - Sala 1605 | CEP 09601-000</p>
                <p className={`${style.texto} ${style.light}`}>Telefone: 11 91057.8890</p>
                <div className={`d-flex flex-column align-items-start gap-3 mt-4`}>
                  <p className={`${style.texto}`}>Veja como chegar:</p>
                  <div className={`d-flex flex-dialign-items-center gap-2 mb-5`}>
                    <Link className={`btn-custom btn-rosa d-flex align-items-center justify-content-center gap-1`} to='https://www.waze.com/pt-BR/live-map/directions/br/sp/av.-senador-vergueiro,-2123?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJZ1UkYqtDzpQRBx5f0nr7o_M' target='_blanck'>
                      waze
                      <i className={`fa-brands fa-waze fs-3 text-white`}></i>
                    </Link>
                    <Link className={`btn-custom btn-rosa d-flex align-items-center justify-content-center`} to='https://www.google.com/maps/place/Av.+Senador+Vergueiro,+2123+-+Rudge+Ramos,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09750-001/@-23.6779524,-46.5565263,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce43ab62245567:0xf3a3fb7ad25f1e07!8m2!3d-23.6779524!4d-46.5565263!16s%2Fg%2F11df7y79t3?sa=X&ved=2ahUKEwjm2Peqnu7-AhUNq5UCHdiEAjIQ8gF6BAgSEAI&shorturl=1' target='_blanck'>
                      <i className={`fa-solid fa-location-dot text-white`}></i>
                      <p>Google Maps</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to='https://instagram.com/' className={`${style.link} d-flex justify-content-center align-items-center gap-1`}>
            <p className={`${style.texto}`}>Siga nosso Instagram | </p>
            <div className={`${style.instagram} d-flex justify-content-center align-items-center`}>
              <i className={`fa-brands fa-instagram`}></i>
            </div>
          </Link>
        </div>
      </div>
      <p className={`${style.texto} text-black text-center m-2 fw-light`}>&copy; 2023 Direitos Reservados - Termos de Uso - Política de Privacidade | Criado por: <Link to='https://amzmp.com.br' className={`${style.link}`}>amz|mp</Link></p>
    </footer >
  )
}

export default Footer
