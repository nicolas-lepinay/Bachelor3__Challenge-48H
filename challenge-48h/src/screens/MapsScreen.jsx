import { useState, useRef } from 'react'

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// Material Design Icons
import { PinDrop } from '@material-ui/icons';

// Context :
import useMyContext from '../hooks/useMyContext';

// CSS :
import '../styles/maps-screen.css';

function MapsScreen() {

    const ctx = useMyContext();

    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;
    const GOOGLE_REVIEWS_SCREEN = process.env.REACT_APP_GOOGLE_REVIEWS_SCREEN;
    const GOOGLE_REVIEWS_SCREEN_2 = process.env.REACT_APP_GOOGLE_REVIEWS_SCREEN_2;

    const FA_STYLE = {
        height: '40px',
        padding: '15px 0',
        marginLeft: '15px',
        opacity: '0.9'
    }

    const MD_STYLE = {
        height: '40px',
        width: '40px',
        position: 'absolute',
        top: '370px',
        left: '140px',
        color: '#cc0000',
    }

    const MD_STYLE_2 = {
        height: '40px',
        width: '40px',
        position: 'absolute',
        top: '180px',
        left: '280px',
        color: '#cc0000',
    }

    return (
        <div>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={FA_STYLE} onClick={() => ctx.setScreen(HOME_SCREEN)}/>
            {!ctx.online && <h1 className='offline-msg'>Vous êtes hors-connexion</h1>}
            <div style={{cursor: 'pointer'}} onClick={() => ctx.setScreen(GOOGLE_REVIEWS_SCREEN)}>
                <PinDrop style={MD_STYLE}/>
                <p className='subtitle'>Café Vermeer</p>
            </div>

            <div style={{cursor: 'pointer'}} onClick={() => ctx.setScreen(GOOGLE_REVIEWS_SCREEN_2)}>
                <PinDrop style={MD_STYLE_2}/>
                <p className='subtitle_2'>Le Germinal</p>
            </div>
            <div className='me'></div>
        </div>
    )
}

export default MapsScreen