import React, { createContext, useState, useContext } from 'react';
import { OrangeTin } from '../components/Tins';

// Create the context
const DrinksContext = createContext();

// Create a custom hook to use the DrinksContext
export const useDrinks = () => useContext(DrinksContext);

// Create the provider component
export const DrinksProvider = ({ children }) => {
    const [orangeSoda, setOrangeSoda] = useState(true);
    const [lemonSoda, setLemonSoda] = useState(false);
    const [strawSoda, setStrawSoda] = useState(false);
    const [data,setdata] = useState(OrangeTin)

    return (
        <DrinksContext.Provider value={{ orangeSoda, setOrangeSoda, lemonSoda, setLemonSoda, strawSoda, setStrawSoda,data,setdata }}>
            {children}
        </DrinksContext.Provider>
    );
};
