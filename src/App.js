import { React, useState } from "react";
import "./App.css";
import Main from "./componentMain/Main";
import PopUp from "./components/PopUp";

function App() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h1>Yo nigger {title}</h1>;
            <Main />
            <PopUp setTitle={setTitle} />
        </div>
    );
}

export default App;

// cd todo_devin_react/
// npm start
