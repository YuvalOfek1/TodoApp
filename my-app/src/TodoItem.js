import React, { useContext } from "react";
import {TodoListContext} from './TodoList'
const TodoItem = ({text, completed, index}) => {
    const {handleRemoveTodo, handleToggleTodo} = useContext(TodoListContext)

    return  <div className={completed? 'item checked':'item'} key={index}>
    <input
      type="checkbox"
      checked={completed}
      onChange={() => handleToggleTodo(index)}/>
      <span style={{textDecoration: completed? `line-through` : `none`}}>
        {text}
        </span> 
    <button className='remove-btn' onClick={() => handleRemoveTodo(index)}>Remove</button>
  </div>
}

export default TodoItem