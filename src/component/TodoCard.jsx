import React from 'react'
import "./TodoCard.css"
import DelImg from "./trash.png"

function TodoCard({index, task, category, deleteItem }) {

  const CATEGORY_EMOGI_MAP = {
    learning: "📚",
    work: "👩🏻‍💻",
    personal: "👼",
    shopping: "🛍️",
    health: "💪",
    others: "➕"
  }

  const CATEGORY_COLORS = {
    learning: "blue",
    work: "green",
    personal: "purple",
    shopping: "orange",
    health: "red",
    others: "gray"
  }

  return (
    <div className='todo-card'>
      <img src={DelImg} alt='delete-Image' className='delete' onClick={()=>{deleteItem(index)}}/>


      <span className='task'>{task}</span>


      <span
        className='todo-card-category'
        style={{ backgroundColor: CATEGORY_COLORS[category] }}>
        {CATEGORY_EMOGI_MAP[category]}
        {category}
      </span>
    </div>
  )
}

export default TodoCard