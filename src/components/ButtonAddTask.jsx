import { React } from "react";

function ButtonAddTask() {
    return (
        <div className="d-flex">
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                <i className="fas fa-plus" aria-hidden={"true"}></i>
                Add task
            </button>
        </div>
    );
}

export default ButtonAddTask;
