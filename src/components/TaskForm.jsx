import React, { useState } from 'react';
import '../style/style.css'

export const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    //el evento para el formulario
    const handleSubmit = e => {
        e.preventDefault();
        if (taskName.trim() !== ''){
            addTask(taskName) //llamar a la función para agregar tareas pasadas por promesas
            setTaskName('') //Con esto limpio la entrada del input
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button className='agregarTarea' type="submit" >Agregar tarea</button>
    </form>
  )
}