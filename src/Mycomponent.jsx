// import { useState } from "react";
// function MyComponent(){
//     const [car, setCar] = useState({year:2024, make:"Ford", model:"Mustang"})
//     function handleYear(e){
//         setCar(c =>({...c,year:e.target.value}))
//     }
//     return(
//         <>
//             <p>Your favorite car is {car.year} {car.make} {car.model}</p>
//             <input type="number" value={car.year} onChange={handleYear}></input>
//         </>
//     )
// }
// export default MyComponent;
import React, {useState, useEffect} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);
    function handle(){
        setCount(c=> c+1)
    }
    useEffect(()=>{
        document.title = `Count: ${count}`
    })
    const [color, setColor] = useState('green')
    function substract(){
        setCount(c=>c-1)
    }
    function changeColor(){
        setColor(c=> c==="green" ? "red" : "green")
    }
    return(
            <>
                <p style={color}>Count: {count}</p>
                <button onClick={handle}>Add</button>
                <button onClick={substract}>Subtract</button><br></br>
                <button onClick={changeColor}>Change Color</button>
            </>
    );
}
export default MyComponent;