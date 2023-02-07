import { useState, useEffect } from 'react'

function Smartwatch({ triggered }) {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        let interval = null;

        if (triggered && isPaused === false) {
          interval = setInterval(() => {
            setTime((time) => time + 1000);
          }, 1000);
        } else {
          clearInterval(interval);
        }
        
        return () => {
          clearInterval(interval);
        };
    }, [triggered, isPaused]);

    useEffect(() => {
        if (time > 1800000){
            setFailed(true);
        };
    }, [time])

    return (
        <div className="watch-container">
            <div className="watch">
                <div className="currentTime">
                <div className='timer' style={failed ? {color: 'red'} : {}}>
                    <span className="digits">
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    </span>
                    <span className="digits">
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                    </span>
                </div>
                </div>
                <img src="https://i.imgur.com/Zygu7I3.png" alt="watchImage" className="watchImage" />
            </div>
        </div>
    )
}

export default Smartwatch