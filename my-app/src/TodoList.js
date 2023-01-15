import React, { useState, createContext } from 'react';
import Input from './Input';
import './App.css'
import TodoItem from './TodoItem';
import List from './common/List';


export const TodoListContext = createContext({})

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();
    const input = event.target.form.todo;
    console.log(input.value)
    if (input.value) {
      setTodos([...todos, { text: input.value, completed: false }]);
      input.value = '';
    }
  }

  function handleToggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    console.log(newTodos[index].completed);
    console.log(newTodos[index]);
    setTodos(newTodos);
  }

  function handleRemoveTodo(index) {
    setTodos(todos.filter((i,j) => j !== index));
  }

  return (
    <div className='todo-List'>
      <h1>TODO</h1>
        <Input func = {handleAddTodo}></Input>
        <div className={todos.length>0? 'items-wrapper-active' :'items-wrapper' } >
          <TodoListContext.Provider value={{handleToggleTodo,handleRemoveTodo, handleAddTodo} }>
          <List items={todos}
           Component={TodoItem}/>
            </TodoListContext.Provider>
        </div>
    </div>
  );
}

export default TodoList;















// import React, {useState} from "react";
// import TodoItem from "./TodoItem";


// const TodoList = () => {
//     const [todos, setTodos] = useState([{content: 'go to the gym', isCompleted: false},
//     {content: 'go to the mall', isCompleted:false}])
//     const onAddTodo = () => {
//         const newTodo = {content:'go to the Dev club', isCompleted: false}
//         setTodos([...todos, newTodo])

//     }
//     return (<div>
//         {todos.map(todo => <TodoItem content={todo.content} test = "test"/>)}
//         <button className="add-button" onClick={onAddTodo}>+</button>
//     </div>)

// }



// export default TodoList