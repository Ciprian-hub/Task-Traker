import Button from "./Button";

function Task({task}) {

    return (
        <div className="task">
            <div key={task.id}>
                <h1>{task.do}</h1>
                <p>{task.status}</p>
            </div>
            <Button/>
        </div>
    )
}

export default Task