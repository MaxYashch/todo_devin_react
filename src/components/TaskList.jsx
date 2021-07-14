import React from "react";
import Task from "./Task";

function TaskList({ todos, setTodos, dateTimeSort, props }) {
    return (
        <ul
            className="list-group flex-wrap justify-content-between"
            id={"currentTasks"}
        >
            {/* <h1 onCLick={sortByDate}>SORT</h1> */}
            {/* <div className="d-flex">
                <button type="button" className="btn btn-primary mx-2">
                    <i
                        onClick={sortByDate}
                        className="fas fa-sort-numeric-up-alt"
                        aria-hidden={"true"}
                    ></i>
                </button>
                <button type="button" className="btn btn-primary">
                    <i
                        className="fas fa-sort-numeric-up"
                        aria-hidden={"true"}
                    ></i>
                </button>
            </div> */}
            {/* {todos.sort((a, b) => (a.dateTimeSort - b.dateTimeSort)).map((task) => ( */}
            {todos.map((task) => (
                <Task
                    todos={todos}
                    setTodos={setTodos}
                    title={task.title}
                    text={task.text}
                    idPriority={task.idPriority}
                    dateTime={task.dateTime}
                    dateTimeSort={task.dateTimeSort}
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
    );
}

export default TaskList;
