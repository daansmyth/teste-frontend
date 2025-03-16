import { Link } from 'react-router-dom';

// CSS
import style from './Call.module.css';

// IMAGENS
import imgWhatsapp from '../../assets/WHATSAPP.png';
import imgTelefone from '../../assets/icone-telefone-open.svg';

const Call = () => {
    return (
        <div className={`${style.call}`}>
            <div className={`d-flex flex-column`}>
                <Link to=''>
                    <img src={imgTelefone} alt="Contato via Telefone" />
                </Link>
                <Link to=''>
                    <img src={imgWhatsapp} alt="Contato via WhatsApp" />
                </Link>
            </div>
        </div>
    )
}

export default Call
