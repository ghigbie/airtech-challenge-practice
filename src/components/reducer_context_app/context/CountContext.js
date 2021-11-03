import { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => setCount(count++);
    const decrementCount = () => setCount(count--);

    return (
        <CountContext.Provider value={{count}}>
            {children}
        </CountContext.Provider>
    )
}