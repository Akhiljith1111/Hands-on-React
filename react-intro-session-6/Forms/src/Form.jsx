import React from "react"; 

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            email: '',
            select:''

        }
    }

     handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
           [name]: value
        })
    }
     handleSubmit = (e) => {
            e.preventDefault()
            console.log(this.state, 'state')
     }

     render() {
        return (
            <div>
                {/* <input placeholder="enter your name" onChange={this.handleChange} name="name" value={this.state.name}/> */}
            <form onSubmit={this.handleSubmit}>
            <input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <input placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            <select name="select" value={this.state.select} onChange={this.handleChange}>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
            <input type="submit" value="SUBMIT" />
            </form>
            </div>
        )
    }
}

export default Form;