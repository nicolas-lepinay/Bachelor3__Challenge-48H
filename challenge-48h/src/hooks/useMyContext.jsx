// 🌌 React :
import { useState, useContext } from 'react'

// 🗝️ Auth Context :
import { Context } from '../context/context';

function useProvideContext() {

    const OFF_SCREEN = process.env.REACT_APP_OFF_SCREEN;

    const [screen, setScreen] = useState(OFF_SCREEN);
    const [online, setOnline] = useState(false);
    const [loggedInToEmail, setLoggedInToEmail] = useState(false);

    return {
        screen, setScreen,
        online, setOnline,
        loggedInToEmail, setLoggedInToEmail
    }
}

export function ProvideContext({ children }) {
    const context = useProvideContext();
    return (
        <Context.Provider value={context}>
            { children }
        </Context.Provider>
    )
}

const useMyContext = () => {
    return useContext(Context)
}

export default useMyContext;