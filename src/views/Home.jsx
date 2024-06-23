import React, { useState } from 'react'
import "./Home.css"
import TodoCard from '../component/TodoCard'

function Home() {

    const [todoList, setTodoList] = useState([])

    const [newTask, setNewTask] = useState("")


    return (
        <>

            <h1 className='heading'>Todo App</h1>
            <div className='todo-container'>
                {
                    (todoList.map((todoItems, i) => <TodoCard key={i} todoItems={todoItems} />)
                    )
                }

                <p>Here You Can Add New Task</p>
            </div>



            <div className='input-container'>

                <input
                    placeholder="Write Your List Item's Here" className='input-box'
                    value={newTask}
                    onChange={(e => setNewTask(e.target.value))} />


                <img
                    src="https://cdn-icons-png.flaticon.com/128/10358/10358033.png"
                    alt='add-button'
                    className='increment-btn'
                    onClick={() => {
                        setTodoList([...todoList, newTask])
                        setNewTask("")
                    }} />

            </div>
        </>
    )
}

export default Home