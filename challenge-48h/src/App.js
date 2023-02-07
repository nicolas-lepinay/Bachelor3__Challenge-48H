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
import SettingsScreen from './screens/SettingsScreen';
import WifiScreen from './screens/WifiScreen';
import OutlookScreen from './screens/OutlookScreen';

// Components :
import CreditCard from './components/CreditCard';

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
    const SETTINGS_SCREEN = process.env.REACT_APP_SETTINGS_SCREEN;
    const WIFI_SCREEN = process.env.REACT_APP_WIFI_SCREEN;
    const OUTLOOK_SCREEN = process.env.REACT_APP_OUTLOOK_SCREEN;
    const EMAIL_SCREEN = process.env.REACT_APP_EMAIL_SCREEN;

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

    return (
        <div className="App">  
            {hideOverlay ? 
                null 
                :
                <div className="start-overlay">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus assumenda enim officiis in expedita numquam ipsam pariatur, veritatis corrupti?</p>
                    <button onClick={() => setHideOverlay(true)}>Commencer</button>
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
                            (<HomeScreen />)
                        }
                    </div>
                </div>  
                    <div className="bottom-bar">
                        <div className="the-button" onClick={() => ctx.setScreen(ctx.screen === OFF_SCREEN ? LOCK_SCREEN : OFF_SCREEN)}></div>
                    </div>
            </div>

            <div className="sticky-note">
                <p>—  Penser mettre à jour profil Facebook</p>
                <p>—  Anniversaire de mariage ce soir ! !</p>
            </div>

            <div className='credit-card-div'>
                <CreditCard />
            </div>
        </div>
    );
}

export default App;
