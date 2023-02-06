import React from 'react'

import '../App.css';
import useMyContext, { ProvideContext } from '../hooks/useMyContext';
import LockScreen from '../pages/LockScreen';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faWifi, faLock, faLocationArrow, faBatteryFull, faCircle  } from '@fortawesome/free-solid-svg-icons'

// Material Design Icons
import { Wifi, WifiOff } from '@material-ui/icons';

function Application() {

    const FA_STYLE = {
        padding: '0 6px',
    }
    const MD_STYLE = {
        padding: '0 6px',
        position: 'absolute',
        top: '0',
        width: '16px'
    }

    const context = useMyContext();
    console.log(context)

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

                        <LockScreen/>
                        <h1>{context?.user}</h1>

                    </div>
                </div>  
                    <div className="bottom-bar">
                        <div className="the-button"></div>
                    </div>
            </div>
        </div>
    )
}

export default Application