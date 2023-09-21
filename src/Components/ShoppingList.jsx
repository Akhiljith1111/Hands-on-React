import React from 'react'

const ShoppingList = (props) => {
  return (
    <ul>
        <h1>{props.id.name}</h1>
        <h1>{props.name} List</h1>
        <li>mangoes</li>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Berrys</li>
        <li>Grapes</li>

    </ul>
  )
}

export default ShoppingList