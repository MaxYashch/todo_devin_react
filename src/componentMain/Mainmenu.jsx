import { React } from "react";

import ButtonsSort from "../components/ButtonsSort";
import ButtonAddTask from "../components/ButtonAddTask";
import TaskList from "../components/TaskList";

function Mainmenu({ todos, setTodos, sortByDate }) {
    return (
        <div className="container-fluid wrapper">
            <nav className="navbar navbar-light bg-light">
                <h1>MyToDoList</h1>
                <ButtonsSort
                    setTodos={setTodos}
                    todos={todos}
                    sortByDate={sortByDate}
                />
                <ButtonAddTask />
            </nav>
            <div className="row justify-content-center">
                <div className="col-10">
                    <h3 className="my-2">ToDo</h3>
                    <TaskList setTodos={setTodos} todos={todos} />

                    <hr />
                    {/* <h3 className="my-2">Completed</h3>
                    <ul
                        className="list-group flex-wrap justify-content-between"
                        id={"completedTasks"}
                    ></ul> */}
                </div>
            </div>
        </div>
    );
}

export default Mainmenu;
