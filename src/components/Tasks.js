import Task from "./Task";
import Button from "./Button";


function Tasks({tasks}) {

    return (
        <div className="">
            {tasks.map(task => {
                return (
                    <Task key={task.id} task={task}/>
                )
            })}
        </div>
    )
}

export default Tasks