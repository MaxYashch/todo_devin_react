import { React } from "react";
import ButtonsStatus from "./ButtonsStatus";

function Task() {
    return (
        <li
            className="list-group-item d-flex w-100 mb-2"
            data-date="1910383671693"
        >
            <div className="w-100 mr-2">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">1</h5>
                    <div>
                        <small className="mr-2">undefined</small>
                        <small className="timeToDo">19:47:51 11-1-2021</small>
                    </div>
                </div>
                <p className="mb-1 w-100"></p>
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
                    style="
                    position: absolute;
                    will-change: transform;
                    top: 0px;
                    left: 0px;
                    transform: translate3d(
                        -162px,
                        0px,
                        0px
                    );
                "
                >
                    <ButtonsStatus />
                </div>
            </div>
        </li>
    );
}

export default Task;
