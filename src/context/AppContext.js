"use client";
import { useState,createContext} from 'react';
export const appContext = createContext();

export const  AppProvider = ({children})=>{


    const [activeMenu, setActiveMenu] = useState(false);

 
    return <appContext.Provider value={{ activeMenu, setActiveMenu }}>{children}</appContext.Provider>
}
