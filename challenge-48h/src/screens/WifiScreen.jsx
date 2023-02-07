import { useState } from 'react';

// CSS :
import '../styles/wifi-screen.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faChevronLeft, faLock, faEye, faUnlock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

// Context :
import useMyContext from '../hooks/useMyContext';

function WifiScreen() {

    const ctx = useMyContext();

    const SETTINGS_SCREEN = process.env.REACT_APP_SETTINGS_SCREEN;
    const WIFI_CODE = process.env.REACT_APP_WIFI_CODE;

    const CHEVRON_STYLE = {
        position: 'absolute',
        top: '45px',
        height: '40px',
        marginLeft: '15px',
        opacity: '0.9',
        color: 'white',
    }

    const FA_STYLE = {
        fontSize: '1.1rem',
    }

    const [wifiItem, setWifiItem] = useState({});

    const wifiList = [
        {
            name: 'Livebox-82E8',
        },
        {
            name: 'Chez Julie',
        },
        {
            name: 'Cafe_Vermeer',
            password: WIFI_CODE,
        },
        {
            name: 'Skynet',
        },
        {
            name: 'it_hurts_when_ip',
        },
        {
            name: 'Maison LANister',
        },
    ]

    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const Popup = ({ wifiItem }) => {
        
        const [showPassword, setShowPassword] = useState(false);
        const [invalidClass, setInvalidClass] = useState('')
        const [password, setPassword] = useState('');

        return (
            <div className="popup">
                <div className="overlay" onClick={() => setShowPopup(false)}></div>
                <div className='card'>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faWifi} style={{fontSize: '1.4rem' }}/>
                        <p style={{fontSize: '1.3rem', paddingLeft: '20px'}}>{wifiItem.name}</p>
                    </div>
                    <p>Mot de passe</p>
                    <div style={{position: 'relative'}}>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className={`${invalidClass}`}
                            onChange={(e) => { setPassword(e.target.value); setInvalidClass('') }}
                        />
                        <FontAwesomeIcon 
                            icon={faEye} 
                            style={{fontSize: '0.9rem', position: 'absolute', top: 0, right: '20px' }}
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div className="d-flex space-between" style={{marginTop: '60px'}}>
                        <button 
                            className="secondary" 
                            onClick={() => setShowPopup(false)}
                        >Annuler</button>

                        <button 
                            className="primary" 
                            onClick={() => {
                                if(wifiItem.password && password === wifiItem.password) {
                                    ctx.setOnline(true);
                                    setShowPopup(false);
                                    setShowSuccessPopup(true);
                                } else {
                                    setInvalidClass('invalid');
                                }
                            }}
                        >Se connecter</button>
                    </div>
                </div>
            </div>
        )
    }

    const SuccessPopup = () => {
        
        return (
            <div className="popup">
                <div className="overlay" onClick={() => setShowSuccessPopup(false)}></div>
                <div className='card white'>
                    <p>Vous êtes connecté(e) à internet ✔️</p>
                    <button className='ok-btn' onClick={() => setShowSuccessPopup(false)}>OK</button>
                </div>
            </div>
        )
    }

    return (
        <div className='wifi-screen'>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={CHEVRON_STYLE} onClick={() => ctx.setScreen(SETTINGS_SCREEN)}/>
            
            <div className='wifi-container'>
                <h1>Réseaux et internet</h1>
                <h1 style={{fontSize: '1rem', opacity: '0.7', fontWeight: '100'}}>Wifi, données mobiles et points d'accès</h1>

                <div className='wifi-list'>
                    {wifiList.map(item => (
                        <div key={item?.name} className='wifi-item' onClick={() => { setWifiItem(item); setShowPopup(true) } }>
                            <div className='d-flex'>
                                <FontAwesomeIcon icon={faWifi} style={FA_STYLE}/>
                                <p style={{paddingLeft: '20px'}}>{item.name}</p>
                            </div>
                            {item?.password === WIFI_CODE && ctx.online ?
                                <FontAwesomeIcon icon={faLockOpen} style={FA_STYLE}/>
                                :
                                <FontAwesomeIcon icon={faLock} style={FA_STYLE}/>
                            }
                        </div>
                        ))
                    }
                </div>
            </div>

            {showPopup && <Popup wifiItem={wifiItem}/>}
            {showSuccessPopup && <SuccessPopup />}

        </div>
    )
}

export default WifiScreen