import React from "react";
import './App.css'
import TodoList from "./TodoList";
import BackGround from "./BackGround";






const App = () => {
  //const [newTodo, setNewTodo] = useState("")
  //const [TDL, setTDL] = useState([])
  return (
    <div>
      <TodoList/>
      <BackGround/>
    </div>
    )
  //return <Counter/>
}

export default App;
