import React from 'react'

export const TodoItem = (props) => {
  return (
    <div>
        <li>{props.task}
        <button onClick={props.handleDelete} >Delete</button>
        </li>
    </div>
  )
}

export default TodoItem;
