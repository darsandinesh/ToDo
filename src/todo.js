import React, { useState } from "react";
import './todo.css';

function ToDo() {

    const [todo, setToDo] = useState('');
    const [todos, setToDos] = useState([]);
    const [completeToDo, setCompleteToDo] = useState([]);

    const deleteToDo = (del) => {
        const newToDo = todos.filter((val) => val !== del);
        setToDos(newToDo)
    }

    const addToDos = (val) => {
        if(!todo){
            console.log('empty');
        }else{
            setToDos([...todos, todo])
        }
    }

    const deleteCompleteToDo = (del) => {
        const newcompleteToDo = completeToDo.filter((val) => val !== del);
        setCompleteToDo(newcompleteToDo)
    }

    return (
        <div>
            <div className='app'>
                <div className="addToDo">
                    <div className="appHeading">
                        <h1>Sample Todo App</h1>
                    </div>
                    <dvi className='input'>
                        <input type="text" placeholder="Enter the task" value={todo} onChange={(e) => setToDo(e.target.value)}></input>
                        <button onClick={() => addToDos()} className="addButton">Add</button>
                        {/* <button onClick={() => setToDos([...todos, todo])} className="addButton">Add</button> */}
                    </dvi>
                </div>
                <div className="viewTodo">
                    {
                        todos.map((obj) => (
                            <div className="todoItem">
                                <input type="radio" onClick={() => {
                                    setCompleteToDo([...completeToDo, obj])
                                    deleteToDo(obj)
                                }}></input>
                                <label>{obj}</label>
                                <button className="deleteButton" onClick={() => deleteToDo(obj)}>Delete</button>
                            </div>
                        ))
                    }
                </div>

            </div >
            {
                completeToDo.length === 0 ? null : <div className='app'>
                    <div className="completeToDo">
                        <div className="appHeading">
                            <h1>Completed Tasks</h1>
                        </div>
                        <div className="completeTodoList">
                            {completeToDo.map((obj, index) => (
                                <div className="completeTodoItem">
                                    <p>{obj}</p>
                                    <button className="deleteButton" onClick={() => deleteCompleteToDo(obj)}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div >
            }

        </div>
    )
}

export default ToDo