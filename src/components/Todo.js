import React from 'react'

function Todo(props) {
    const deleteClass = {
        color: 'red'
    }
    console.log(props);
    return (
        <div>
            <ul>
                {props.todos.map((e , i) =>
                    <div >
                       <p> {e}  <span style={deleteClass} onClick={() =>  props.deleteTodo(e)}>      X  </span></p>
                        <button className="btn btn-danger">Submit</button>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Todo
