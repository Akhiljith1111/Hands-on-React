import React from "react";

const Child = ({count}) => {
    return (
        <>
         <h1>Counter value is {count} </h1>
        </>
       
    )
}
const Button = ({label, func}) => {
    return (
        <button onClick={() => func()}>{label}</button>
    )
}

 export default class Siblings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState((prev) => ({
            count: prev.count + 1
        }))
    }
    handleReduce = () => {
        this.setState((prev) => ({
            count: prev.count - 1
        }))
    }
    render() {
        return(
            <div>
        
                <h2>Sibblings</h2>
                <Child count={this.state.count} />
                <Button func={this.handleAdd}label="Add" />
                <Button func={this.handleReduce}label="Reduce" />
            </div>
        )
    }
}