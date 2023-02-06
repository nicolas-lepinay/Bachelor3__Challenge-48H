import { useState, useEffect } from 'react';

// CSS :
import '../styles/settings-screen.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faChevronLeft, faDatabase, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Context :
import useMyContext from '../hooks/useMyContext';

function SettingsScreen() {

    const ctx = useMyContext();

    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;
    const WIFI_SCREEN = process.env.REACT_APP_WIFI_SCREEN;

    const FA_STYLE = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '17px',
        opacity: '0.9'
    }

    const CHEVRON_STYLE = {
        position: 'absolute',
        top: '45px',
        height: '40px',
        marginLeft: '15px',
        opacity: '0.9',
        color: 'white',
    }

    const [shakeClass1, setShakeClass1] = useState('')
    const [shakeClass2, setShakeClass2] = useState('')
    const [shakeClass3, setShakeClass3] = useState('')

    useEffect( () => {
        setTimeout(() => {
            setShakeClass1('');
            setShakeClass2('');
            setShakeClass3('');
          }, "500")
    }, [shakeClass1, shakeClass2, shakeClass3]);

    return (
        <div className='settings-screen'>

            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={CHEVRON_STYLE} onClick={() => ctx.setScreen(HOME_SCREEN)}/>
            
            <div className='settings-container'>
                <h1>Paramètres</h1>

                <div className={`setting ${shakeClass1}`} onClick={() => setShakeClass1('shake')}>
                    <div className='round-icon blue'>
                        <FontAwesomeIcon icon={faDatabase} style={FA_STYLE}/>
                    </div>
                    <div className='text'>
                        <p>Batterie</p>
                        <p style={{fontSize: '0.8rem', opacity: '0.7'}}>88% de batterie restante</p>
                    </div>
                </div>

                <div className='setting' onClick={() => ctx.setScreen(WIFI_SCREEN)}>
                    <div className='round-icon green'>
                        <FontAwesomeIcon icon={faWifi} style={FA_STYLE}/>
                    </div>
                    <div className='text'>
                        <p>Réseaux et internet</p>
                        <p style={{fontSize: '0.8rem', opacity: '0.7'}}>Wifi, données mobiles et point d'accès</p>
                    </div>
                </div>

                <div className={`setting ${shakeClass2}`} onClick={() => setShakeClass2('shake')}>
                    <div className='round-icon red'>
                        <FontAwesomeIcon icon={faDatabase} style={FA_STYLE}/>
                    </div>
                    <div className='text'>
                        <p>Stockage</p>
                        <p style={{fontSize: '0.8rem', opacity: '0.7'}}>25% d'espace utilisé</p>
                    </div>
                </div>

                <div className={`setting ${shakeClass3}`} onClick={() => setShakeClass3('shake')}>
                    <div className='round-icon grey'>
                        <FontAwesomeIcon icon={faInfoCircle} style={FA_STYLE}/>
                    </div>
                    <div className='text'>
                        <p>A propos de l'appareil</p>
                        <p style={{fontSize: '0.8rem', opacity: '0.7'}}>MIUI Global 12.5.8</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default SettingsScreen