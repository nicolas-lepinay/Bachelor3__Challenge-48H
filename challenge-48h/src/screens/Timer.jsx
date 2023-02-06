import React, {useState} from 'react'

// CSS :
import '../styles/timer.css';

function Timer(props) {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    
    
    React.useEffect(() => {
        let interval = null;
        

        if (isActive && isPaused === false) {
          interval = setInterval(() => {
            setTime((time) => time + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
        
        return () => {
          clearInterval(interval);
        };
        
    }, [isActive, isPaused]);
      
    const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    };
    
    const handlePauseResume = () => {
    setIsPaused(!isPaused);
    };
    
    const handleReset = () => {
    setIsActive(false);
    setTime(0);
    };
      
    if (time > 1800000){
        alert(`Temps écoulé,   perdu!`);
        window.location.reload(false);
    };

    return (
    <div className="timer">
        <span className="digits">
            {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
            {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
    </div>
    )
}

export default Timer