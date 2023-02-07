import { useState, useEffect } from 'react';

// CSS :
import '../styles/outlook-screen.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUser, faEye } from '@fortawesome/free-solid-svg-icons';

// Material Design Icons
import { WifiOff } from '@material-ui/icons';

// Context :
import useMyContext from '../hooks/useMyContext';

function OutlookScreen() {

    const ctx = useMyContext();

    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;
    const EMAIL_SCREEN = process.env.REACT_APP_EMAIL_SCREEN;

    const EMAIL_ADDRESS = process.env.REACT_APP_EMAIL_ADDRESS;
    const EMAIL_PASSWORD = process.env.REACT_APP_EMAIL_PASSWORD;

    const CHEVRON_STYLE = {
        position: 'absolute',
        top: '45px',
        height: '40px',
        marginLeft: '15px',
        opacity: '0.9',
        color: 'white',
    }
    
    const WIFI_STYLE = {
        height: '50px',
        width: '50px',
        opacity: '0.3',
        color: 'black',
    }

    const FA_STYLE = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '40px',
        opacity: '0.9',
        color: 'rgb(69, 118, 224)',
    }

    const [password, setPassword] = useState('');
    const [invalidClass, setInvalidClass] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const OfflinePopup = () => {
        
        return (
            <div className="popup">
                <div className="overlay" onClick={() => ctx.setScreen(HOME_SCREEN) }></div>
                <div className='card white'>
                    <WifiOff style={WIFI_STYLE}/>
                    <p>Aucune connexion à internet.</p>
                    <p style={{fontSize: '0.8rem', opacity: '0.7'}}>Veuillez vérifier votre connexion réseau.</p>
                    <button className='ok-btn' onClick={() => ctx.setScreen(HOME_SCREEN) }>RETOUR</button>
                </div>
            </div>
        )
    }

    return (
        <div className='outlook-screen'>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={CHEVRON_STYLE} onClick={() => ctx.setScreen(HOME_SCREEN)}/>
            <div className='settings-container'>
                <div className='d-flex'>
                    <img src="./gmail.png" style={{height: '30px', marginRight: '20px'}} />
                    <h1>Gmail</h1>
                </div>
                <div className='card'>
                    <div className='round-icon light-blue'>
                        <FontAwesomeIcon icon={faUser} style={FA_STYLE}/>
                    </div>
                    <p style={{fontSize: '0.9rem'}}>{EMAIL_ADDRESS}</p>
                    <div style={{position: 'relative', width: '90%', margin: 'auto'}}>
                        <input
                            type={showPassword ? "text" : "password"} 
                            placeholder="Mot de passe"
                            className={`${invalidClass}`}
                            onChange={(e) => { setPassword(e.target.value); setInvalidClass('') } }
                        />
                        <FontAwesomeIcon
                            icon={faEye}
                            style={{fontSize: '0.9rem', position: 'absolute', top: '20px', right: '5px' }}
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <button 
                        className='signin-btn'
                        onClick={() => {
                            if(password.toLowerCase() === EMAIL_PASSWORD.toLowerCase()) {
                                ctx.setLoggedInToEmail(true);
                                ctx.setScreen(EMAIL_SCREEN);
                            }
                            else {
                                setInvalidClass('invalid');
                            }
                        }}
                    >Se connecter</button>
                </div>
            </div>

            {!ctx.online && <OfflinePopup/>}
        </div>
    )
}

export default OutlookScreen