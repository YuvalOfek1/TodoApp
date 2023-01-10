import React from "react";
import TodoList from "./TodoList";

const Input = (props) => {

    return(
        <div className="form">
            <form>
                <input name="todo" placeholder='add Todo...' />
                <button className="add-btn" onClick={props.func} type="submit">+</button>
            </form>
      </div>
    )

}

export default Input