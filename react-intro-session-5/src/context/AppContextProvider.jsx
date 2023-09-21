import React from "react";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Iam from context API',
            isAuth: false
        }
    }

    toggleAuth = () => {
        this.setState({
            isAuth: !this.state.isAuth
        })
    }
    render() {
        const { isAuth } = this.state;
        const { toggleAuth } = this;
        return (
            <AppContext.Provider value={{ isAuth, toggleAuth }}>
             {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;