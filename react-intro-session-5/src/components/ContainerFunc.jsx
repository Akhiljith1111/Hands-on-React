import React from "react";
import { AppContext } from "../context/AppContextProvider";


export default function ContainerFunc(){
    return (
        <AppContext.Consumer >
               {({toggleAuth, isAuth}) => {
                return <div><button onClick={toggleAuth}>{isAuth ? 'Log Out' : 'Log In'}</button> </div>
               }}
        </AppContext.Consumer>
    )
}