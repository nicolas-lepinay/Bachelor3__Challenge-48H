import { useState, useRef } from 'react'

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faMessage, faGear, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Context :
import useMyContext from '../hooks/useMyContext';

// CSS :
import '../styles/home-screen.css';

function HomeScreen() {

    // Screens:
    const MAPS_SCREEN = process.env.REACT_APP_MAPS_SCREEN;

    const FA_STYLE = {
        color: 'white',
        height: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: '0.8'
    }

    const ctx = useMyContext();

    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    return (
        <div className='animated clickable'>
            <div className="clock" >
                <div id="time" className='text-shadow'>{time}</div>
                <div id="date" className='text-shadow'>Mardi 7 février</div>
            </div>
            <div className="apps">

                <div className="app" onClick={() => ctx.setScreen(MAPS_SCREEN)}>
                    <FontAwesomeIcon icon={faMap} style={FA_STYLE}/>
                    <p>Maps</p>
                </div>

                <div className="app">
                    <FontAwesomeIcon icon={faMessage} style={FA_STYLE}/>
                    <p>Messages</p>
                </div>

                <div className="app">
                    <FontAwesomeIcon icon={faEnvelope} style={FA_STYLE}/>
                    <p>Outlook</p>
                </div>

                <div className="app">
                    <FontAwesomeIcon icon={faGear} style={FA_STYLE}/>
                    <p>Paramètres</p>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen