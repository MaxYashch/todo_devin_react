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
    //    edit function
    const [isEditing, setIsEditing] = useState(false);
    // object state to set so we know which todo item we are editing
    const [currentTodo, setCurrentTodo] = useState({});

    const sortByDate = function (e) {
        e.preventDefault();
        const postList = todos;
        let newPostList = postList.sort(
            (a, b) => b.dateTimeSort - a.dateTimeSort
        );
        setTodos(() => Object.values(newPostList));
    };

    //    edit function
    const handleEditInputChangeTitle = (e) => {
        setCurrentTodo({
            ...currentTodo,
            title: e.target.value,
        });
    };
    const handleEditInputChangeText = (e) => {
        setCurrentTodo({
            ...currentTodo,
            text: e.target.value,
        });
    };

    function handleEditClick(todo) {
        setIsEditing(true);
        // set the currentTodo to the todo item that was clicked
        setCurrentTodo({ ...todo });
    }

    function handleUpdateTodo(id, updatedTodo) {
        // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
        // if the id's match, use the second parameter to pass in the updated todo object
        // otherwise just use old todo
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });
        // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
        setIsEditing(false);
        // update the todos state with the updated todo
        setTodos(updatedItem);
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        // call the handleUpdateTodo function - passing the currentTodo.id and the currentTodo object as arguments
        handleUpdateTodo(currentTodo.id, currentTodo);
    }

    function handleInputChange(e) {
        setTodos(e.target.value);
    }

    return (
        <div>
            <Mainmenu
                setTodos={setTodos}
                todos={todos}
                dateTimeSort={dateTimeSort}
                sortByDate={sortByDate}
                //    edit function
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                currentTodo={currentTodo}
                setCurrentTodo={setCurrentTodo}
                handleEditInputChangeTitle={handleEditInputChangeTitle}
                handleEditInputChangeText={handleEditInputChangeText}
                handleEditClick={handleEditClick}
                handleEditFormSubmit={handleEditFormSubmit}
                handleInputChange={handleInputChange}
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
