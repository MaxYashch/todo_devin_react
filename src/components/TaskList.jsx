import React from "react";
import Task from "./Task";

function TaskList({ todos }) {
    console.log(todos);
    return (
        <ul
            className="list-group flex-wrap justify-content-between"
            id={"currentTasks"}
        >
            {todos.map((task) => (
                <Task
                    title={task.title}
                    text={task.text}
                    idPriority={task.idPriority}
                    dateTime={task.dateTime}
                    id={task.id}
                />
            ))}
        </ul>
    );
}

export default TaskList;
