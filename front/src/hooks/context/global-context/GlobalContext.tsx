import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../../useGlobalContext";
import { useLocation, useNavigate } from "react-router-dom";

export const GlobalContext = createContext({})

export const GlobalProvider:FC <{children:ReactNode}> = ({children}) => {

    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate();
    const location = useLocation();

    const saveSession = (user: User) => {
        localStorage.setItem("SESSION", JSON.stringify(user))
        setUser(user)
    }

    //console.log("LOCATION", location);
    useEffect(() => {
        const session = localStorage.getItem("SESSION");
        if(session){
            setUser(JSON.parse(session));
            navigate(JSON.parse(session).rol);
            return;
        }
        location.pathname !== "/" && navigate("/login")
    }, [])
    
    const logout = () => {
        localStorage.removeItem("SESSION")
        setUser(null)
        navigate("/login")
    }

    return (
        <GlobalContext.Provider value={{user, setUser: saveSession, logout}}>
            {children}
        </GlobalContext.Provider>
    )
}