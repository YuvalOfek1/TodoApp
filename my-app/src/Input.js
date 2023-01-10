import React from "react";
import TodoList from "./TodoList";

const Input = (props) => {

    return(
        <div className="form">
            <form>
                <input name="todo" placeholder='add Todo...' />
                <button onClick={props.func} type="submit">Add Todo</button>
            </form>
      </div>
    )

}

export default Input