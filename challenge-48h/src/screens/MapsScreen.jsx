import { useState, useRef } from 'react'

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// Context :
import useMyContext from '../hooks/useMyContext';

// CSS :
import '../styles/maps-screen.css';

function MapsScreen() {

    const ctx = useMyContext();

    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;


    const FA_STYLE = {
        height: '40px',
        padding: '15px 0',
        marginLeft: '15px',
        opacity: '0.9'
    }

    return (
        <div>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={FA_STYLE} onClick={() => ctx.setScreen(HOME_SCREEN)}/>
        </div>
    )
}

export default MapsScreen