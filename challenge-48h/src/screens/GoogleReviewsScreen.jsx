import React from 'react'

// CSS :
import '../styles/google-reviews.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Context :
import useMyContext from '../hooks/useMyContext';

function GoogleReviewsScreen() {

    const ctx = useMyContext();

    const MAPS_SCREEN = process.env.REACT_APP_MAPS_SCREEN;

    const FA_STYLE = {
        height: '40px',
        padding: '15px 0',
        marginLeft: '15px',
        opacity: '0.9'
    }

    return (
        <div className='google-reviews'>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={FA_STYLE} onClick={() => ctx.setScreen(MAPS_SCREEN)}/>

            <div className='review-name'>
                <h2>Café Vermeer</h2>
                <h3>3.9 ⭐</h3>
            </div>

            <div className='review-description'>
                <p style={{opacity: '0.7'}}>Actuellement ouvert</p>
                <p>09:00 – 21:00</p>
                <p style={{fontSize: '0.9rem'}}>Cuisine créative, et plats végétariens et sans allergènes, servis pour le petit-déjeuner et le déjeuner dans une ambiance détendue.</p>
                <p style={{fontSize: '0.9rem'}}>Code WIFI gratuit : VERM33R</p>
            </div>

            <div className='review-description' style={{borderBottom: 'none', paddingTop: '30px'}}>
                <p>Laissez un avis pour cet établissement.</p>
            </div>
        </div>
    )
}

export default GoogleReviewsScreen