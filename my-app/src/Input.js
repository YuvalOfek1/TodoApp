import React from "react";

const Input = (props) => {

    return(
        <div className="form-div">
            <form>
                <input name="todo" placeholder='add Todo...' />
                <button className="add-btn" onClick={props.func} type="submit">+</button>
            </form>
      </div>
    )

}

export default Input;