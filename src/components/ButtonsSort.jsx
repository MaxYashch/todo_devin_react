import { React } from "react";

function Mainmenu() {
    return (
        <div className="container-fluid wrapper">
            <nav className="navbar navbar-light bg-light">
                <h1>MyToDoList</h1>
                <div className="d-flex">
                    <button type="button" className="btn btn-primary mx-2">
                        <i
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
                </div>
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
            </nav>
        </div>
    );
}

export default Mainmenu;
