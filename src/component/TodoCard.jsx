import React from 'react'
import "./TodoCard.css"

function TodoCard({task,category}) {

  const CATEGORY_EMOGI_MAP={
    learning:"📚",
    work:"👩🏻‍💻",
    personal:"👼",
    shopping:"🛍️",
    health:"💪",
    others:"➕"}

  const CATEGORY_COLORS={
    learning:"blue",
    work:"green",
    personal:"purple",
    shopping:"orange",
    health:"red",
    others:"gray"
  }  

  return (
    <div className='todo-card'>{task}  
    <span className='todo-card-category'  style={{backgroundColor:CATEGORY_COLORS[category]}}> {CATEGORY_EMOGI_MAP[category]} {category}</span></div>
  )
}

export default TodoCard