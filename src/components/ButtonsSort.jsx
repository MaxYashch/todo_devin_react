import { React } from "react";

function ButtonsSort() {
    return (
        <div className="d-flex">
            <button type="button" className="btn btn-primary mx-2">
                <i
                    className="fas fa-sort-numeric-up-alt"
                    aria-hidden={"true"}
                ></i>
            </button>
            <button type="button" className="btn btn-primary">
                <i className="fas fa-sort-numeric-up" aria-hidden={"true"}></i>
            </button>
        </div>
    );
}

export default ButtonsSort;
