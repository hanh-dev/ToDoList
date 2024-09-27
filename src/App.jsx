// import ColorPicker from "./ColorPicker";
// import MyComponent from "./Mycomponent";
// import List from './Food'
// import ToDoList from "./ToDoList";
// import ToDoListTest from "./ToDoListTest";

import TodoList from "./Components/ToDoList/TodoList";

// import { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar/Navbar";

// import MyComponent from "./Mycomponent";
function App(){

    // const current_theme = localStorage.getItem('current_theme');
    // const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
    // useEffect(() => {
    //     localStorage.setItem('current_theme', theme)
    // },[theme])

    return(
        <>
            <TodoList></TodoList>
        </>
        // <div className={`container ${theme}`}> 
        //     {/* {<ToDoList></ToDoList>} */}
        //     {/* {<MyComponent></MyComponent>} */}
        //     {/* <ToDoListTest></ToDoListTest> */}
        //     {/* <List></List> */}
        //     {/* <MyComponent></MyComponent> */}
        //     {/* <ColorPicker></ColorPicker> */}
        //     {/* {<Navbar theme={theme} setTheme={setTheme}></Navbar>} */}
        // </div>
    );
}
export default App;
