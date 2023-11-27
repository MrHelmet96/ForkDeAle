
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



export const TaskItem = ({handleComplete, handleDelete, task}) => {
    const [isCompleted, setIsCompleted] = useState(false)

    const toggleComplete = () =>{
        setIsCompleted(!isCompleted)
        handleComplete(task.id) //estamos llamando a la tarea que esta completada
    }

    const onDelete = () => {
        handleDelete(task.id)
    }


  return (
    <div>
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {task.name}
        </span>
        <button className='completar' onClick={toggleComplete}><FaCheck className='iconito'/> Completar</button>
        <button className='eliminar' onClick={onDelete}><IoMdClose className='iconito2'/> Eliminar</button>
    </div>
  )
}