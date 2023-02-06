// 🌌 React :
import { useState, useContext } from 'react'

// 🗝️ Auth Context :
import { Context } from '../context/context';

function useProvideContext() {

    const [user, setUser] = useState("Initial user");

    return {
        user,
        setUser
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