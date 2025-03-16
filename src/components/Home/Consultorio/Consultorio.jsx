import { Link } from 'react-router-dom';

//CSS
import style from './Consultorio.module.css';

// IMAGENS
import imgConsultorio from '../../../assets/IMG-CARROSEL@2x.png';
import imgConsultorioUrso from '../../../assets/Interseção 2.svg';


const Consultorio = () => {
  return (
    <section className={`${style.consultorio}`}>
      <div className={`row`}>
        <div className={`${style.conteudo} col-md-12 col-lg-6 d-flex flex-row gap-4`}>
          <div className='d-none d-md-block'>
            <img src={imgConsultorioUrso} alt="Urso cor de rosa" />
          </div>
          <div className={`col-md-9 col-lg-10 d-flex flex-column gap-2`}>
            <div className={`col-md-8 d-flex flex-column gap-3`}>
              <h2 className={`${style.titulo} text-center text-md-start`}>O CONSULTÓRIO</h2>
              <p className={`${style.texto} text-center text-md-start`}>Localização estratégica, praticidade e conforto. Nosso espaço foi projetado especialmente para o conforto e comodidade das crianças. <strong>Aqui o bem-estar dos pacientes está sempre em primeiro lugar!</strong></p>
              <p className={`${style.texto} text-center text-md-start`}> Estamos localizados na melhor região de <strong>São Bernardo do Campo</strong>, com <strong>fácil acesso às cidades do ABC paulista</strong>. O prédio também <strong>oferece estacionamento próprio</strong>, oferecendo maior segurança à sua família.</p>
            </div>
            <div className={`${style.endereco} d-flex align-items-center gap-3`}>
              <i className={`fa-solid fa-location-dot`}></i>
              <p className={`${style.texto} text-center text-md-start`}>Av. Senador Vergueiro,2123 - São Bernardo do Campo - 16º. Andar - Sala 1605 | CEP 09601-000</p>
            </div>
            <div className={`${style.telefone} d-flex align-items-center gap-3`}>
              <i className={`fa-solid fa-phone`}></i>
              <p className={`${style.texto} text-center`}>Telefone: 11 91057.8890</p>
            </div>

            <div className={`${style.links} d-flex flex-column align-items-md-start align-items-sm-center gap-3 mt-4`}>
              <span>Como chegar:</span>
              <div className={`d-flex align-items-center gap-2 mb-5`}>
                <Link  to='https://www.waze.com/pt-BR/live-map/directions/br/sp/av.-senador-vergueiro,-2123?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJZ1UkYqtDzpQRBx5f0nr7o_M' className={`btn-custom btn-waze d-flex align-items-center justify-content-center gap-1`} target='_blanck'>
                  waze
                  <i className={`fa-brands fa-waze`}></i>
                </Link>
                <Link to='https://www.google.com/maps/place/Av.+Senador+Vergueiro,+2123+-+Rudge+Ramos,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09750-001/@-23.6779524,-46.5565263,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce43ab62245567:0xf3a3fb7ad25f1e07!8m2!3d-23.6779524!4d-46.5565263!16s%2Fg%2F11df7y79t3?sa=X&ved=2ahUKEwjm2Peqnu7-AhUNq5UCHdiEAjIQ8gF6BAgSEAI&shorturl=1' className={`btn-custom btn-maps d-flex align-items-center justify-content-center gap-1`}target='_blanck'>
                  <i className={`fa-solid fa-location-dot`}></i>
                  Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-md-4 d-flex justify-content-start`}>
          <img src={imgConsultorio} alt="Dra. Suzane" />
        </div>
      </div>
    </section>
  )
}

export default Consultorio
