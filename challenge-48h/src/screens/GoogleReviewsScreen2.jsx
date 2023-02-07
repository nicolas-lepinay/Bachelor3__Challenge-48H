import React from 'react'

// CSS :
import '../styles/google-reviews.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Context :
import useMyContext from '../hooks/useMyContext';

function GoogleReviewsScreen2() {

    const ctx = useMyContext();

    const MAPS_SCREEN = process.env.REACT_APP_MAPS_SCREEN;
    const WIFI_CODE = process.env.REACT_APP_WIFI_CODE;

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
                <h2>Le Germinal</h2>
                <h3>4.2 ⭐</h3>
            </div>

            <div className='review-description'>
                <p style={{opacity: '0.7'}}>Actuellement fermé</p>
                <p>08:00 – 23:00</p>
                <p style={{fontSize: '0.9rem'}}>Une cuisine traditionnelle française dans un cadre cosy avec canapés, livres, meubles chinés et terrasse.</p>
            </div>

            <div className='review-description' style={{borderBottom: 'none', paddingTop: '30px'}}>
                <p>Laissez un avis pour cet établissement.</p>
            </div>
        </div>
    )
}

export default GoogleReviewsScreen2