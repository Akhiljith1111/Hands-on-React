import React from "react";

const Child = ({count, handleAdd, handleReduce}) => {
    return (
        <>
         <h1>Counter value is {count} </h1>
         <button onClick={handleAdd}>Add</button>
         <button onClick={handleReduce}>Reduce</button>
        </>
       
    )
}

 export default class ParentToChild extends React.Component {
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
                {/* <h1>Counter value is {this.state.count}</h1> */}
                <h2>Child to Parent</h2>
                {/* <Child count={this.state.count} /> */}
                <Child count={this.state.count}  handleAdd={this.handleAdd} handleReduce={this.handleReduce}/>
                {/* <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleReduce}>Reduce</button> */}

            </div>
        )
    }
}
