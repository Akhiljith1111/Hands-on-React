import React,{useState} from 'react'
import ShoppingList from './Components/ShoppingList'

function App() {
    const [count,setCount] = useState(0);


    const Max = () =>{
        setCount(count+1)
    }

    const Min = () =>{
       if(count > 0){
        setCount(count-1)
       }
    }

  return (
    <div>
    <h1>This is an App Component</h1>
    <div> This is a Word</div>
    <ShoppingList id={{name:"ABCD",age:25}}  name="ABCD"/>
    <ShoppingList id={{name:"EFGH",age:30}}  name="EFGH"/>

    <h1>{count}</h1>
    <button onClick={Max}>MAX</button>
    <button onClick={Min}>MIN</button>

    </div>
   
  )
}

export default App