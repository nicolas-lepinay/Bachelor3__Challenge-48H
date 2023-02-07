import { useState, useRef } from 'react'

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle  } from '@fortawesome/free-solid-svg-icons'
import useMyContext from '../hooks/useMyContext';

// CSS :
import '../styles/unlock-screen.css';

function UnlockScreen() {

    // Screens:
    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;

    const PINCODE = process.env.REACT_APP_PINCODE;

    const FA_STYLE = {
        padding: '0 6px',
    }
    const ctx = useMyContext();

    const [password, setPassword] = useState('')
    const [invalidClass, setInvalidClass] = useState('')

    return (
        <div>
            <div className="clock">
                <div className="pincode-title">Entrez votre code PIN</div>
                <div className="pincode-subtitle">Votre code PIN contient 6 caractères.</div>
                <input 
                    className={`password-input ${invalidClass}`} 
                    placeholder='Saisir votre code PIN'
                    onChange={(e) => {setPassword(e.target.value); setInvalidClass('') }}
                />
                <br></br>
                <button 
                    className='confirm-button' 
                    onClick={() => { password === PINCODE ? ctx.setScreen(HOME_SCREEN) : setInvalidClass('invalid') } }
                >Confirmer</button>
            </div>

            <div className="downside">
                <FontAwesomeIcon icon={faCircle} style={FA_STYLE}/>
            </div>
        </div>    
    )
}

export default UnlockScreen