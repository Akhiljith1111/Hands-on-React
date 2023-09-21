import React from "react";
import { AppContext } from "../context/AppContextProvider";

class Container extends React.Component {
    // componentDidMount() {
    //     console.log(this.context)
    // }
    render() {
        console.log(this.context); 
        const { isAuth, toggleAuth } = this.context;
        return (
            <div>
                {/* {this.context} */}
                {/* ABCDE */}
                {
                    isAuth ? "LoggedIn" : "LoggedOut"
                }
                {/* <button onClick={toggleAuth}>{isAuth ? 'Log Out' : 'Log In'}</button> */}
            </div>
        )
    }
}

Container.contextType = AppContext;

export default Container;