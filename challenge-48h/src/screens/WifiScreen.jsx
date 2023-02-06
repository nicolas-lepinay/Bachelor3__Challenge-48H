import { useState } from 'react';

// CSS :
import '../styles/wifi-screen.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faChevronLeft  } from '@fortawesome/free-solid-svg-icons';

// Context :
import useMyContext from '../hooks/useMyContext';

function WifiScreen() {

    const ctx = useMyContext();

    const SETTINGS_SCREEN = process.env.REACT_APP_SETTINGS_SCREEN;

    const CHEVRON_STYLE = {
        position: 'absolute',
        top: '45px',
        height: '40px',
        marginLeft: '15px',
        opacity: '0.9',
        color: 'white',
    }

    return (
        <div className='settings-screen'>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={CHEVRON_STYLE} onClick={() => ctx.setScreen(SETTINGS_SCREEN)}/>
            
            <div className='settings-container'>
                <h1>Réseaux et internet</h1>
            </div>
        </div>
    )
}

export default WifiScreen