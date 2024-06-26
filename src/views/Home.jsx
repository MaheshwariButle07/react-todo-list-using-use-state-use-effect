import React, { useEffect, useState } from 'react'
import "./Home.css"
import TodoCard from '../component/TodoCard'

import toast, { Toaster } from 'react-hot-toast'

function Home() {

    const [todoList, setTodoList] = useState([])

    const [newTask, setNewTask] = useState("")

    const [category, setCategory] = useState("")

    useEffect(() => {
        const savedList = localStorage.getItem("todoList")

        if (savedList) {
            setTodoList(JSON.parse(savedList))
        }
    }, [])

    useEffect(() => {
        if (todoList.length === 0) return

        localStorage.setItem("todoList", JSON.stringify(todoList))
    }, [todoList])

    return (
        <>

            <h1 className='heading'>Todo App</h1>

            <div className='todo-container'>

            <div className='input-container'>

                <input
                    placeholder="Write Your List Item's Here" className='input-box'
                    value={newTask}
                    onChange={(e => setNewTask(e.target.value))} />

                <select
                    className='category'
                    value={category}
                    onChange={(e => setCategory(e.target.value))}>

                    <option value="">
                        Category
                    </option>

                    <option value="shopping">
                        Shopping
                    </option>
                    <option value="learning">
                        Learning
                    </option>
                    <option value="health">
                        Health
                    </option>
                    <option value="personal">
                        Personal
                    </option>
                    <option value="work">
                        Work
                    </option>
                    <option value="others">
                        Others
                    </option>



                </select>


                <img
                    src="https://cdn-icons-png.flaticon.com/128/10358/10358033.png"
                    alt='add-button'
                    className='increment-btn'
                    onClick={() => {

                        if (newTask === "") {
                            toast.error("Task Cannot be empty...")
                            return
                        }

                        if (category === "") {
                            toast.error("Category Cannot be empty...")
                            return

                        }

                        setTodoList([...todoList, { task: newTask, category: category }])
                        setNewTask("")
                        setCategory("")
                        toast.success("Task Added Successfully ...")
                    }} />

            </div>

            <hr /><br/>


           

                {(todoList.map((todoItems, i) => {

                    const { task, category } = todoItems

                    return <TodoCard key={i} task={task} category={category} />
                }))

                }

                {
                    todoList.length === 0 ? <p className='task'>No task to show, Please add new task</p> : null
                }

            </div>




            <Toaster />
        </>
    )
}

export default Home