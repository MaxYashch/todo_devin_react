import { React } from "react";
// import ButtonsStatus from "./ButtonsStatus";

function Task({ title, text, idPriority, dateTime, task, todos, setTodos }) {
    const deleteTask = () => {
        setTodos(todos.filter((el) => el.id !== task.id));
    };
    const completeTask = () => {};
    return (
        <li className="list-group-item d-flex w-100 mb-2" data-date="">
            <div className="w-100 mr-2">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{title}</h5>
                    <div>
                        <small className="mr-2">{idPriority}</small>
                        <small className="timeToDo">{dateTime}</small>
                    </div>
                </div>
                <p className="mb-1 w-100">{text}</p>
            </div>
            <div className="dropdown m-2 dropleft">
                <button
                    className="btn btn-secondary h-100"
                    type="button"
                    id="dropdownMenuItem1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div
                    className="dropdown-menu p-2 flex-column"
                    aria-labelledby="dropdownMenuItem1"
                    x-placement="left-start"
                    style={{
                        position: "absolute",
                        // willChange: "transform",
                        top: "0px",
                        left: "0px",
                        // transform: translate("-162px", "0px", "0px"),
                    }}
                >
                    <div>
                        <button className="btn btn-success w-100">
                            Complete
                        </button>
                        <button className="btn btn-info w-100 my-2">
                            Edit
                        </button>
                        <button
                            className="btn btn-danger w-100"
                            onClick={deleteTask}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Task;
