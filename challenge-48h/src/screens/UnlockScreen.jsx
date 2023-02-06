import { useRef } from 'react'

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle  } from '@fortawesome/free-solid-svg-icons'
import useMyContext from '../hooks/useMyContext';

// CSS :
import '../styles/unlock-screen.css';

function UnlockScreen() {

    // Screens:
    const LOCK_SCREEN = process.env.REACT_APP_LOCK_SCREEN;

    const FA_STYLE = {
        padding: '0 6px',
    }
    const MD_STYLE = {
        padding: '0 6px',
        position: 'absolute',
        top: '0',
        width: '16px'
    }
    const ctx = useMyContext();

    const inputRef = useRef(null);

    return (
        <div>
            <div className="clock" >
                <div className="pincode-title">Entrez votre code PIN</div>
                <div className="pincode-subtitle">Votre code PIN contient au moins 6 caractères.</div>
                <input className='password-input' placeholder='Saisir votre code PIN'/>
                <br></br>
                <button className='confirm-button' onClick={() => inputRef.current.value === '280299' && ctx.set }>Confirmer</button>
            </div>


            <div className="downside">
                <FontAwesomeIcon icon={faCircle} style={FA_STYLE}/>
            </div>
        </div>    
    )
}

export default UnlockScreen