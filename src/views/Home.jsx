import React, { useState } from 'react'
import "./Home.css"
import TodoCard from '../component/TodoCard'

import toast, { Toaster } from 'react-hot-toast'

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

                {
                    todoList.length === 0 ?  <p>No task to show, Please add new task</p> : null
                }

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

                        if(newTask === ""){
                            toast.error("Task Cannot be empty...")
                            return
                        }

                        setTodoList([...todoList, newTask])
                        setNewTask("")
                        toast.success("Task Added Successfully ...")
                    }} />

            </div>
            <Toaster/>
        </>
    )
}

export default Home