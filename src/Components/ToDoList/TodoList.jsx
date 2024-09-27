import React, { useState } from 'react'
import './TodoList.css'
const TodoList = () => {
    const[task, setTask] = useState(['Eat breakfast', 'Take a shower', 'Have a dinner', 'Walk dog']);
    const[newTask, setNewTask] = useState('');

    function handleChange(e){
        setNewTask(e.target.value)
    }

    function addItem(){
        if(newTask.trim() !=""){
            setTask((t)=>[newTask, ...t])
        }
        setNewTask('')
    }

    function deleteItem(i){
        const updateTask = [...task]
        const newUpdate = updateTask.filter((_, index)=>{ return index!=i})
        setTask(newUpdate);
    }

    function upItem(i){
        const updateTask = [...task];
        if(i>0){
            [updateTask[i],updateTask[i-1]] = [updateTask[i-1], updateTask[i]];
        }
        setTask(updateTask)
    }

    function downItem(i){
        const updateTask = [...task];
        if(i<updateTask.length-1){
            [updateTask[i],updateTask[i+1]] = [updateTask[i+1], updateTask[i]];
        }
        setTask(updateTask)
    }

  return (
    <div className='container'>
        <div className='heading'>
            <h2>To Do List</h2>
            <div className='newTaskInput'>
                <input type='text' placeholder='Name of things...' value={newTask} onChange={handleChange}></input>
                <button onClick={()=>addItem()}>Add</button>
            </div>
                <div className='to-do-list-menu'>
                    {task.map((val, index)=>
                        <li key={index} className='to-do-list-item'>
                            <span>{val}</span>
                            <button className='delete' onClick={()=>deleteItem(index)}>Delete</button>
                            <button className='move-up' onClick={()=>upItem(index)}>Up</button>
                            <button className='move-down' onClick={()=>downItem(index)}>Down</button>
                        </li>
                    )}
                </div>
        </div>
    </div>
  )
}

export default TodoList
