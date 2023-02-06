import React from 'react'

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle  } from '@fortawesome/free-solid-svg-icons'
import useMyContext from '../hooks/useMyContext';

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

    return (
        <div onClick={() => ctx.setScreen(LOCK_SCREEN)}>
            <div className="clock" >
                <div id="time">Unlock</div>
                <div id="date">Password</div>
            </div>
            <div className="downside">
                <FontAwesomeIcon icon={faCircle} style={FA_STYLE}/>
                <FontAwesomeIcon icon={faCircle} style={FA_STYLE}/>
                <FontAwesomeIcon icon={faCircle} style={FA_STYLE}/>
            </div>
        </div>    )
}

export default UnlockScreen