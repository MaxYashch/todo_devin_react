import { React, useState } from "react";
import "./App.css";
import Mainmenu from "./componentMain/Mainmenu";
import PopUp from "./components/PopUp";

function App() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [dateTimeSort, setDateTimeSort] = useState("");
    const [idPriority, setIdPriority] = useState("");
    const [todos, setTodos] = useState([]);
    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: "",
    // });

    const sortByDate = function (e) {
        e.preventDefault();
        const postList = todos;
        let newPostList = postList.sort(
            (a, b) => b.dateTimeSort - a.dateTimeSort
        );
        setTodos(() => Object.values(newPostList));
    };

    return (
        <div>
            <Mainmenu
                setTodos={setTodos}
                todos={todos}
                dateTimeSort={dateTimeSort}
                sortByDate={sortByDate}
            />
            <PopUp
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                idPriority={idPriority}
                setIdPriority={setIdPriority}
                dateTime={dateTime}
                setDateTime={setDateTime}
                dateTimeSort={dateTimeSort}
                setDateTimeSort={setDateTimeSort}
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    );
}

export default App;

// function move to Completed area
// function Edit

// cd todo_devin_react/
// npm start
