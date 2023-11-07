import Navbar from "../components/navbar"
import { Outlet } from "react-router-dom"

import { useState } from "react";

import { LoginStateContext } from "../contexts/loginContext"


export default function Home()
{
    const [loginState, setLoginState] = useState(false);
    return(
        <div className=" lg:max-w-lg">
            <LoginStateContext.Provider value={{loginState, setLoginState}}>
                
            <Navbar />
            <div className="mt-12 mx-12 min-h-screen">
            <Outlet />
            </div>

            
            <div className="mt-4 pb-8 pt-4 text-center">
                <p className="text-2xl">footer</p>
            </div>
            </LoginStateContext.Provider>
        </div>
    )
}