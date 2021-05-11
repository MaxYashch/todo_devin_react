import { React } from "react";

function MainmenuDoComplete() {
    return (
        <div className="row justify-content-center">
            <div className="col-10">
                <h3 className="my-2">ToDo</h3>
                <ul
                    className="list-group flex-wrap justify-content-between"
                    id={"currentTasks"}
                ></ul>
                <hr />
                <h3 className="my-2">Comleted</h3>
                <ul
                    className="list-group flex-wrap justify-content-between"
                    id={"completedTasks"}
                ></ul>
            </div>
        </div>
    );
}

export default MainmenuDoComplete;
