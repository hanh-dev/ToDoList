import { useState } from "react";
import './index.css';
function ToDoList(){
    const [task, setTask] = useState(['Eat breakfast','Take a shower'])
    const [newTask, setNewTask] = useState('')
    function handleInputChange(e){
        setNewTask(e.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t =>[...t, newTask]);
            setNewTask("");
        }
        // setNewTask(...)
    }
    function deleteTask(index){
        const updateTask = task.filter((_, i)=> i !== index)
        setTask(updateTask)
        // setNewTask(updateTask)
    }
    function moveTaskUp(index){
        if(index>0){
            const updateTask = [...task];
            [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]]
            setTask(updateTask)
        } 
    }
    function moveTaskDown(index){
        if(index<0){
            const updateTask = [...task];
            [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]]
            setTask(updateTask)
        } 
        
    }
    return(
        <>
            <div className="to-do-list">
                <h2>TO DO LIST</h2>
                <div>
                    <input type="text" placeholder="Enter new task..." value={newTask} onChange={handleInputChange}></input>
                    <button className="addButton" onClick={()=>addTask()}>Add</button>
                </div>
                <ol>
                    {task.map((t, index)=><li key={index}>
                                            <span className="text">{t}</span>
                                            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                                            <button className="move-button" onClick={()=>moveTaskUp(index)}>UP</button>
                                            <button className="move-button" onClick={()=>moveTaskDown(index)}>DOWN</button>
                                        </li>)}
                </ol>
            </div>
        </>
    )
}
export default ToDoList;