import { useState } from "react";
function List(){
    const [food, setFood] = useState(["Apple", "Mango", "Coconut"])
    function handleChange(){
        const newFood = document.querySelector('#foodInput').value;
        document.querySelector('#foodInput').value = ''
        setFood([...food, newFood])
    }
    function handleRemove(index){
        setFood(food.filter((e, i)=>i!==index))
    }
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food, index)=>(<li key={index} onClick={() =>handleRemove(index)}>{food}</li>))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"></input>
            <button onClick={handleChange}>Add</button>
        </div>
    )
}
export default List;