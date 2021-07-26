import { React } from "react";

function ButtonsSort(props) {
    return (
        <div className="d-flex">
            <button type="button" className="btn btn-primary mx-2">
                <i
                    onClick={props.sortByDate}
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
