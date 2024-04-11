import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const SessionContext = createContext();

export function SessionProvider ({children}){

    const [user, setUser] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    useEffect(() =>{ 
        const possibleUser=cookies.user
        if(possibleUser){
            setUser(possibleUser)
        }
    }, [])


    function login(userData){
        setUser(userData)
        setCookie('user', userData)
    }

    function logout(){
        setUser(null)
        removeCookie('user', userData)
    }

    return (
        <SessionContext.Provider value={{user,login,logout}}>
            {children}
        </SessionContext.Provider>
    )
}