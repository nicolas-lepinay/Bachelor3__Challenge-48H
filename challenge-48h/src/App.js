import './App.css';
import useMyContext from './hooks/useMyContext';
import LockScreen from './pages/LockScreen';
import UnlockScreen from './pages/UnlockScreen';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faWifi, faLock, faLocationArrow, faBatteryFull, faCircle  } from '@fortawesome/free-solid-svg-icons'

// Material Design Icons
import { Wifi, WifiOff } from '@material-ui/icons';

//import Application from './Application/Application';

function App() {

    const LOCK_SCREEN = process.env.REACT_APP_LOCK_SCREEN;
    const UNLOCK_SCREEN = process.env.REACT_APP_UNLOCK_SCREEN;

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
    console.log(ctx?.screen)

    return (
        <div className="App">              
            <div className='phone'>
                <div className="top-bar">
                    <div className="speaker"></div>
                </div>
                <button className="lock"></button>
                <button className="volup"></button>
                <button className="voldown"></button>
                <div className="screen">
                    <div className="content">
                        <div className="status-bar">
                            <div className="left-side">
                                <FontAwesomeIcon icon={faSignal} style={FA_STYLE}/>SFR
                                <WifiOff style={MD_STYLE}/>
                            </div> 
                            <div className="middle-side">
                                <FontAwesomeIcon icon={faLock} style={FA_STYLE}/>
                            </div>
                            <div className="right-side">
                                <FontAwesomeIcon icon={faLocationArrow} style={FA_STYLE}/>
                                <FontAwesomeIcon icon={faBatteryFull} style={FA_STYLE}/>
                            </div>
                        </div>

                        {ctx.screen == LOCK_SCREEN &&                       
                            (<LockScreen/>)
                        }
                        {ctx.screen == UNLOCK_SCREEN &&                       
                            (<UnlockScreen/>)
                        }

                    </div>
                </div>  
                    <div className="bottom-bar">
                        <div className="the-button"></div>
                    </div>
            </div>
        </div>
    );
}

export default App;
