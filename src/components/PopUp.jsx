import React from "react";

function PopUp({
    title,
    setTitle,
    text,
    setText,
    idPriority,
    setIdPriority,
    dateTime,
    setDateTime,
    todos,
    setTodos,
}) {
    function getTitleValue(e) {
        console.log(e.target.value);
        setTitle(e.target.value);
    }
    function getTextValue(e) {
        console.log(e.target.value);
        setText(e.target.value);
    }
    function getPriorityId(e) {
        console.log(e.target.value);
        setIdPriority(e.target.value);
    }
    function AddTask(e) {
        e.preventDefault();
        // set date & time
        let today = new Date();
        let date =
            today.getDate() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getFullYear();
        let time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        let dateTime = `${time} ${date}`;
        setDateTime(dateTime);

        setTodos([
            ...todos,
            {
                title: title,
                text: text,
                idPriority: idPriority,
                dateTime: dateTime,
                completed: false,
                id: Math.round(Math.random() * 1000),
            },
        ]);
        console.log(todos);
    }
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none" }}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Add task
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputTitle"
                                    className="col-sm-2 col-form-label"
                                >
                                    Title
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={"inputTitle"}
                                        placeholder="Title"
                                        required=""
                                        onChange={getTitleValue}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputText"
                                    className="col-sm-2 col-form-label"
                                >
                                    Text
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputText"
                                        placeholder="Text"
                                        required=""
                                        onChange={getTextValue}
                                    />
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row" onChange={getPriorityId}>
                                    <legend className="col-form-label col-sm-2 pt-0">
                                        Priority
                                    </legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gridRadios"
                                                id="Low"
                                                value="Low"
                                                required=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="Low"
                                            >
                                                Low
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gridRadios"
                                                id="Medium"
                                                value="Medium"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="Medium"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gridRadios"
                                                id="High"
                                                value="High"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="High"
                                            >
                                                High
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-group row">
                                <div className="col-sm-12 text-center">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary js-addButton"
                                        onClick={AddTask}
                                    >
                                        Add task
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
