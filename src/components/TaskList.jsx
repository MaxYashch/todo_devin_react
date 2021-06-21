import React from "react";
import Task from "./Task";

function TaskList({ todos, setTodos }) {
    // const [todosToSort, setTodosToSort] = useState([]);
    
    // const sortByDate = (e) => {
    //     e.preventDefault();
    //     // console.log("tttttttttttt");
    //     // const { todosToSort } = todos;
    //     // console.log(todosToSort);
    //     // let newPostList = JSON.parse(JSON.stringify(postList));
    //     // newPostList = newPostList.reverse();
    //     // console.log(newPostList);

    //     setState({
    //         todos.sort(
    //             (a, b) => b.dateTimeSort - a.dateTimeSort
    //         ),
    //     });
    // }

    return (
        <ul
            className="list-group flex-wrap justify-content-between"
            id={"currentTasks"}
        >
            {/* <div className="d-flex">
                <button type="button" className="btn btn-primary mx-2">
                    <i
                        onClick={sortByDate}
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
            </div> */}
            {/* {todos.sort((a, b) => (a.dateTimeSort - b.dateTimeSort)).map((task) => ( */}
            {todos.map((task) => (
                <Task
                    setTodos={setTodos}
                    todos={todos}
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
