import { React } from "react";
// import MainmenuDoComplete from "./MainmenuDoComplete";
import ButtonsSort from "../components/ButtonsSort";
import ButtonAddTask from "../components/ButtonAddTask";
import TaskList from "../components/TaskList";

function Mainmenu({ todos }) {
    return (
        <div className="container-fluid wrapper">
            <nav className="navbar navbar-light bg-light">
                <h1>MyToDoList</h1>
                <ButtonsSort />
                <ButtonAddTask />
            </nav>
            <div className="row justify-content-center">
                <div className="col-10">
                    <h3 className="my-2">ToDo</h3>
                    <TaskList todos={todos} />

                    <hr />
                    <h3 className="my-2">Comleted</h3>
                    <ul
                        className="list-group flex-wrap justify-content-between"
                        id={"completedTasks"}
                    ></ul>
                </div>
            </div>
        </div>
    );
}

export default Mainmenu;
