import React from "react";
import Task from "./Task";

function TaskList({ todos, setTodos }) {
    return (
        <ul
            className="list-group flex-wrap justify-content-between"
            id={"currentTasks"}
        >
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
