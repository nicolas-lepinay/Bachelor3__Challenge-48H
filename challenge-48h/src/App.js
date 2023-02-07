import { useState } from 'react';

// CSS :
import './App.css';

// Context :
import useMyContext from './hooks/useMyContext';

// Screens :
import OffScreen from './screens/OffScreen';
import LockScreen from './screens/LockScreen';
import UnlockScreen from './screens/UnlockScreen';
import HomeScreen from './screens/HomeScreen';
import MapsScreen from './screens/MapsScreen';
import GoogleReviewsScreen from './screens/GoogleReviewsScreen';
import GoogleReviewsScreen2 from './screens/GoogleReviewsScreen2';
import SettingsScreen from './screens/SettingsScreen';
import WifiScreen from './screens/WifiScreen';
import OutlookScreen from './screens/OutlookScreen';
import EmailScreen from './screens/EmailScreen';
import MessageScreen from './screens/MessageScreen';

// Components :
import CreditCard from './components/CreditCard';
import Smartwatch from './components/Smartwatch';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faWifi, faLock, faCloud, faLocationArrow, faBatteryFull, faCircle  } from '@fortawesome/free-solid-svg-icons'

// Material Design Icons
import { Wifi, WifiOff } from '@material-ui/icons';

function App() {

    const OFF_SCREEN = process.env.REACT_APP_OFF_SCREEN;
    const LOCK_SCREEN = process.env.REACT_APP_LOCK_SCREEN;
    const UNLOCK_SCREEN = process.env.REACT_APP_UNLOCK_SCREEN;
    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;
    const MAPS_SCREEN = process.env.REACT_APP_MAPS_SCREEN;
    const GOOGLE_REVIEWS_SCREEN = process.env.REACT_APP_GOOGLE_REVIEWS_SCREEN;
    const GOOGLE_REVIEWS_SCREEN_2 = process.env.REACT_APP_GOOGLE_REVIEWS_SCREEN_2;
    const SETTINGS_SCREEN = process.env.REACT_APP_SETTINGS_SCREEN;
    const WIFI_SCREEN = process.env.REACT_APP_WIFI_SCREEN;
    const OUTLOOK_SCREEN = process.env.REACT_APP_OUTLOOK_SCREEN;
    const EMAIL_SCREEN = process.env.REACT_APP_EMAIL_SCREEN;
    const MESSAGE_SCREEN = process.env.REACT_APP_MESSAGE_SCREEN;

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

    const [hideOverlay, setHideOverlay] = useState(false);
    const [triggerWatch, setTriggerWatch] = useState(false);

    return (
        <div className="App">  
            {hideOverlay ? 
                null 
                :
                <div className="start-overlay">
                    <div style={{padding: '0 20%', lineHeight: '2rem'}}>
                        <p>Vous avez accepté et signé un nouveau contrat de tueur à gages : l'assassinat d’un fonctionnaire.
                        Vous ne disposez d'aucune information à son sujet, mais vos talents de fin limier vous ont mené à son bureau de travail.
                        </p>
                        <p>Vous disposez de 30 minutes pour déterminer <b>l'endroit</b>, <b>l'heure</b> et <b>le moyen</b> d'assassiner votre cible pour que sa mort ait l'air accidentelle.</p>

                        <p>En tant que professionnel, votre instinct vous dit d'aller d'abord chercher des informations personnelles sur <a href="https://m.facebook.com/login/?locale=fr_FR" target='_blank'>les réseaux sociaux</a>.</p>
                        <button onClick={() => { setHideOverlay(true); setTriggerWatch(true) }}>Commencer</button>
                    </div>
                </div>
            } 

            <div className='phone'>
                <div className="top-bar">
                    <div className="speaker"></div>
                </div>
                <button className="lock"></button>
                <button className="volup"></button>
                <button className="voldown"></button>
                <div className="screen">
                    <div className={`content 
                            ${ctx.screen === HOME_SCREEN ? 'home-bg' : ''}
                            ${ctx.screen === MAPS_SCREEN ? 'maps-bg' : ''}
                        `}>
                        <div className="status-bar">
                        
                        {ctx.screen !== OFF_SCREEN &&                       
                            <>
                                <div className="left-side">
                                    <FontAwesomeIcon icon={faSignal} style={FA_STYLE}/>SFR
                                    {ctx.online ? <Wifi style={MD_STYLE}/> : <WifiOff style={MD_STYLE}/> }
                                </div>
                                <div className="middle-side">
                                    {(ctx.screen === LOCK_SCREEN || ctx.screen === UNLOCK_SCREEN) &&
                                        <FontAwesomeIcon icon={faLock} style={FA_STYLE}/>
                                    }
                                    {(ctx.screen !== LOCK_SCREEN && ctx.screen !== UNLOCK_SCREEN) &&
                                        <FontAwesomeIcon icon={faCloud} style={FA_STYLE}/>
                                    }
                                </div>
                                <div className="right-side">
                                    <FontAwesomeIcon icon={faLocationArrow} style={FA_STYLE}/>
                                    <FontAwesomeIcon icon={faBatteryFull} style={FA_STYLE}/>
                                </div>
                            </>
                        }
                        </div>

                        {ctx.screen === OFF_SCREEN &&                       
                            (<OffScreen/>)
                        }
                        {ctx.screen === LOCK_SCREEN &&                       
                            (<LockScreen/>)
                        }
                        {ctx.screen === UNLOCK_SCREEN &&                       
                            (<UnlockScreen/>)
                        }
                        {ctx.screen === HOME_SCREEN &&                       
                            (<HomeScreen/>)
                        }
                        {ctx.screen === MAPS_SCREEN &&                       
                            (<MapsScreen/>)
                        }
                        {ctx.screen === GOOGLE_REVIEWS_SCREEN &&                       
                            (<GoogleReviewsScreen/>)
                        }
                        {ctx.screen === GOOGLE_REVIEWS_SCREEN_2 &&                       
                            (<GoogleReviewsScreen2/>)
                        }
                        {ctx.screen === SETTINGS_SCREEN &&                       
                            (<SettingsScreen />)
                        }
                        {ctx.screen === WIFI_SCREEN &&                       
                            (<WifiScreen />)
                        }
                        {ctx.screen === OUTLOOK_SCREEN &&                       
                            (<OutlookScreen />)
                        }
                        {ctx.screen === EMAIL_SCREEN &&                       
                            (<EmailScreen />)
                        }
                        {ctx.screen === MESSAGE_SCREEN &&                       
                            (<MessageScreen />)
                        }
                    </div>
                </div>  
                    <div className="bottom-bar">
                        <div className="the-button" onClick={() => ctx.setScreen(ctx.screen === OFF_SCREEN ? LOCK_SCREEN : OFF_SCREEN)}></div>
                    </div>
            </div>

            <div className="sticky-note">
                <p>—  Penser vérifier publications Facebook</p>
                <p>—  Anniversaire de mariage ce soir ! !</p>
            </div>

            <div className="sticky-note right">
                <p>Prévenir Mr. Vigenère pour la FERIA de vendredi</p>
                <p>MMGXOQCKM</p>
            </div>

            <div className='credit-card-div'>
                <CreditCard />
            </div>

            <Smartwatch triggered={triggerWatch} />

        </div>
    );
}

export default App;
