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
    const SETTINGS_SCREEN = process.env.REACT_APP_SETTINGS_SCREEN;
    const OUTLOOK_SCREEN = process.env.REACT_APP_OUTLOOK_SCREEN;
    const EMAIL_SCREEN = process.env.REACT_APP_EMAIL_SCREEN;
    const MESSAGE_SCREEN = process.env.REACT_APP_MESSAGE_SCREEN;

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
        <div className='clickable'>
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
                    <FontAwesomeIcon icon={faMessage} style={FA_STYLE} onClick={() => ctx.setScreen(MESSAGE_SCREEN)}/>
                    <p>Messages</p>
                </div>

                <div className="app" onClick={() => { 
                        ctx.loggedInToEmail ? ctx.setScreen(EMAIL_SCREEN) : ctx.setScreen(OUTLOOK_SCREEN)
                    }}>
                    <FontAwesomeIcon icon={faEnvelope} style={FA_STYLE}/>
                    <p>Gmail</p>
                </div>

                <div className="app">
                    <FontAwesomeIcon icon={faGear} style={FA_STYLE} onClick={() => ctx.setScreen(SETTINGS_SCREEN)}/>
                    <p>Paramètres</p>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen