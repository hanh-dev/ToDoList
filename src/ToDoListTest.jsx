import { useState } from "react";
import './index.css';
function ToDoListTest(){
    const [task, setTask] = useState(['Eat breakfast','Eat lunch','Go to work'])
    const [newTask, setNewTask] = useState('')
    function handleInputChange(e){
        setNewTask(e.target.value)
    }
    function addTask(){
        if(newTask.trim() !==""){
            setTask(t=>[...t, newTask])
        }
        setNewTask('')
    }
    function deleteTask(index){
        const updateNewTask = [...task];    
        const updateTask = updateNewTask.filter((_,i)=>i!==index)
        setTask(updateTask)
    }
    function moveUp(index){
        if(index>0){
            const updateTask = [...task];
            [updateTask[index],updateTask[index-1]] = [updateTask[index-1],updateTask[index]]
            setTask(updateTask)
        }
    }
    function moveDown(index){
        const max = task.length;
        if(index<max-1){
            const updateTask = [...task];
            [updateTask[index],updateTask[index+1]] = [updateTask[index+1],updateTask[index]]
            setTask(updateTask)
        }
    }
    return(
        <>
            <div className="to-do-list">
                <h2>TO DO LIST</h2>
                <div className="to-do_center">
                    <input className="to-do_newList" placeholder="Enter a new task..." value={newTask} onChange={handleInputChange}></input>
                    <button className="addButton" onClick={()=>addTask()}>ADD</button>
                </div>
                <ol className="to-do-under">
                    {task.map((t, index)=><li key={index}>
                                            <span className="text">{t}</span>
                                            <button className="deleteButton" onClick={()=>deleteTask(index)}>Delete</button>
                                            <button className="moveUpButton" onClick={()=>moveUp(index)}>Up</button>
                                            <button className="moveDownButton" onClick={()=>moveDown(index)}>Down</button>
                                            </li>)}
                </ol>
            </div>
        </>
    );
}
export default ToDoListTest;