import React from "react";
import Task from "./Task";

function TaskList({
    todos,
    setTodos,
    isEditing,
    setIsEditing,
    currentTodo,
    setCurrentTodo,
    handleEditInputChangeTitle,
    handleEditInputChangeText,
    handleEditClick,
    handleEditFormSubmit,
}) {
    return (
        <>
            {isEditing ? (
                // if we are editing - display the edit todo input
                // make sure to add the handleEditFormSubmit function in the "onSubmit" prop
                <form onSubmit={handleEditFormSubmit}>
                    <h4>Edit Todo</h4>
                    <label htmlFor="editTitle">Edit title: </label>
                    {/* notice that the value for the update input is set to the currentTodo state */}
                    <input
                        name="editTitle"
                        type="text"
                        placeholder="Edit title"
                        value={currentTodo.title}
                        onChange={handleEditInputChangeTitle}
                    />
                    <br></br>
                    <label htmlFor="editText">Edit text: </label>
                    <input
                        name="editText"
                        type="text"
                        placeholder="Edit text"
                        value={currentTodo.text}
                        onChange={handleEditInputChangeText}
                    />
                    <br></br>
                    {/* here we added an "update" button element - use the type="submit" on the button which will still submit the form when clicked using the handleEditFormSubmit function */}
                    <button type="submit">Update</button>
                    {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <ul
                    className="list-group flex-wrap justify-content-between"
                    id={"currentTasks"}
                >
                    {todos.map((task) => (
                        <Task
                            todos={todos}
                            setTodos={setTodos}
                            title={task.title}
                            text={task.text}
                            idPriority={task.idPriority}
                            dateTime={task.dateTime}
                            dateTimeSort={task.dateTimeSort}
                            key={task.id}
                            task={task}
                            //    edit function
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            currentTodo={currentTodo}
                            setCurrentTodo={setCurrentTodo}
                            handleEditClick={handleEditClick}
                            handleEditFormSubmit={handleEditFormSubmit}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

export default TaskList;
