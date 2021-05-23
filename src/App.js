import { React, useState } from "react";
import "./App.css";
import Mainmenu from "./componentMain/Mainmenu";
import PopUp from "./components/PopUp";

function App() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [idPriority, setIdPriority] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h1>Yo nigger {dateTime}</h1>;
            <Mainmenu setTodos={setTodos} todos={todos} />
            <PopUp
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                idPriority={idPriority}
                setIdPriority={setIdPriority}
                dateTime={dateTime}
                setDateTime={setDateTime}
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    );
}

export default App;

// after entering clean the input

// cd todo_devin_react/
// npm start
