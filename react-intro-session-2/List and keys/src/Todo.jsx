import React,{Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./components/TodoItem";

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state ={
            value: '',
            list: []
        }
    }
    render() {
        const handleChange = (e) => {
           this.setState({
            value: e.target.value
           })
        }
        const handleAddTask = () => {
            if(this.state.value === ''){
                return;
            }
            this.setState({
                list: [...this.state.list, {
                    id: uuidv4(),
                    task: this.state.value
                }]
            })
        }

        const handleDelete = (id) => {
            this.setState({
                list: this.state.list.filter(item => item.id !== id)
            });
        }
        return(
            <div>
                <h1>Todo App</h1>
                <input placeholder="Enter Task" onChange={handleChange} />
                <button onClick={handleAddTask}>Add</button>

                {
                    this.state.list.map((item) => {
                        return (
                            // <li key={item.id}>{item.task}</li>
                            <TodoItem key={item.id} task={item.task} handleDelete= {() => handleDelete(item.id)}/>
                        )
                    })
                }
            </div>
        )
        }
}

export default Todo;