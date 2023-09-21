import React from "react";

const Child = ({count}) => {
    return (
        <h1>Counter value is {count} </h1>
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
                <Child count={this.state.count} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleReduce}>Reduce</button>
            </div>
        )
    }
}

