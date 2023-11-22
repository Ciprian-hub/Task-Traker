import Task from "./Task";

function Tasks({tasks, onDelete, onDoubleClick}) {

    return (
        <div className="">
            {tasks.map(task => {
                return (
                    <Task key={task.id} task={task} onDelete={onDelete} onDoubleClick={onDoubleClick}/>
                )
            })}
        </div>
    )
}

export default Tasks