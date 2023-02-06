import React from 'react'

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLock } from '@fortawesome/free-solid-svg-icons';

import useMyContext from '../hooks/useMyContext';

function LockScreen() {

    const FA_STYLE = {
        padding: '0 6px',
    }

    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    const ctx = useMyContext();

    // Screens:
    const UNLOCK_SCREEN = process.env.REACT_APP_UNLOCK_SCREEN;

    return (
        <div className='animated clickable' onClick={() => ctx.setScreen(UNLOCK_SCREEN)}>
            <div className="clock" >
                <div id="time">{time}</div>
                <div id="date">Mardi 7 février</div>
            </div>
            <div className="container">
                <FontAwesomeIcon icon={faLock} style={FA_STYLE}/>
            </div>
        </div>
    )
}

export default LockScreen