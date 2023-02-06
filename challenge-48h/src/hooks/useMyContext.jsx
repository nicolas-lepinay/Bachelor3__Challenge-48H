// 🌌 React :
import { useState, useContext } from 'react'

// 🗝️ Auth Context :
import { Context } from '../context/context';

function useProvideContext() {

    const LOCK_SCREEN = process.env.REACT_APP_LOCK_SCREEN;

    const [user, setUser] = useState("Initial user");
    const [screen, setScreen] = useState(LOCK_SCREEN);

    return {
        user,
        setUser,
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