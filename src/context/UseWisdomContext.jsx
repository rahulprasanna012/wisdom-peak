import React, { createContext, useContext, useState } from 'react';

const WisdomContext = createContext();


export const WisdomProvider = ({ children }) => {
    const [theme, setTheme] = useState('blue');
    const apiStatus={
        success:"SUCCESS",
        error:"ERROR",
        loading:"LOADING"
    }
    return (
        <WisdomContext.Provider value={{ theme, setTheme,apiStatus }}>
            {children}
        </WisdomContext.Provider>
    );
};

export const useWisdomContext = () => {
    return useContext(WisdomContext);
};