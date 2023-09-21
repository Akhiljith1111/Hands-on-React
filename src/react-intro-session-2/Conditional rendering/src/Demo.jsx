// import React,{Component} from "react";

// class Demo extends Component {
//     constructor(props) {
//         super(props)
//         this.handleChange = this.handleChange.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//         this.state = {
//             email : '',
//             firstName: '',
//             lastName: '',
//             password: '',
//             isLoggedIn: false,
//         }
//     }
//     handleChange(e) {
//        const {name,value} = e.target;
//        this.setState({
//         [name]: value
//        })
//     }

//     handleClick(){
//         this.setState({
//             isLoggedIn: !this.state.isLoggedIn
//         })
//     }
//     render(){

        // Conditional Rendering

        // return (
        //     <div>
        //         <h1>This is a Demo Component</h1>
        //         <div>
        //         <input placeholder="Email" onChange={this.handleChange} name="email"/>
        //         </div>
        //         <div>
        //         <input placeholder="firstName" onChange={this.handleChange} name="firstName"/>
        //         </div>
        //         <div>
        //         <input placeholder="lastName" onChange={this.handleChange} name="lastName"/>
        //         </div>
        //         <div>
        //         <input placeholder="password" onChange={this.handleChange} name="password"/>
        //         </div>
        //     </div>
        // )


        //Using if/else => conditional statements

        // console.log(this.state.isLoggedIn)
        // if(this.state.isLoggedIn) {
        //     return (
        //         <button onClick={this.handleClick}>Logout</button>
        //     )
        // } else {
        //     return (
        //         <button onClick={this.handleClick}>Login</button>
        //     )
        // }


        //Using Ternary operator

        // return this.state.isLoggedIn ? 
        // (
        //     <button onClick={this.handleClick}>Logout</button>
        // ) :
        // (
        //     <button onClick={this.handleClick}>Login</button>
        // )


        // return(
        //     <div>
        //         {
        //             this.state.isLoggedIn ? (
        //                 <div>
        //                 <button onClick={this.handleClick}>Logout</button>
        //                 <h1>You are logged in</h1>
        //                 </div>
        //             ) : (
        //                 <div>
        //                 <button onClick={this.handleClick}>Login</button>
        //                 <h1>You are logged out</h1>
        //                 </div>
        //             ) 
        //         }
                
        //     </div>
        // )


//         return (
//             <div></div>
//         )
//     }
// }

// export default Demo;




import React, {Component} from "react";

 const defaultEmail = 'admin';
 const defaultPass = 'admin123';

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }
    handleLogin = () => {
        if(this.state.email === defaultEmail && this.state.password === defaultPass){
           this.setState({
            isLoggedIn: true
           })
        }else {
            alert("Please provide correct credentials")
        }
    }

    handleLogout = () => {
       this.setState({
        isLoggedIn: false 
       })
    }
    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ? (
                        <div>
                            <h1>Home page</h1>
                            <h2>Welcome</h2>
                            <button onClick={this.handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div>
                        <h1>Login Component</h1>
                        <input placeholder="email" name="email" onChange={this.handleChange} />
                        <input placeholder="password" name="password" onChange={this.handleChange} />
                        <button onClick={this.handleLogin}>Login IN</button>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Demo;