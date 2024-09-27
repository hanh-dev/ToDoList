import { useState } from "react";
function ColorPicker(){
    const [color, setColor] = useState('')
    function handleSetColor(e){
        setColor(e.target.value)
    }
    return(
        <>
            <div className="container">
                <h2>Color Picker</h2>
                <p style={{backgroundColor: color}}>Selected color {color}</p>
                <label>Select a color</label>
                <input type="color" value={color} onChange={handleSetColor}></input>
            </div>
        </>
    )
}
export default ColorPicker;