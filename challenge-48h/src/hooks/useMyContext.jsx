// 🌌 React :
import { useState, useContext } from 'react'

// 🗝️ Auth Context :
import { Context } from '../context/context';

function useProvideContext() {

    const OFF_SCREEN = process.env.REACT_APP_OFF_SCREEN;
    const LOCK_SCREEN = process.env.REACT_APP_LOCK_SCREEN;

    const [screen, setScreen] = useState(OFF_SCREEN);

    return {
        screen,
        setScreen
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