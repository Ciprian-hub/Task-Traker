import {FaTimes} from "react-icons/fa";

function Task({task, onDelete, onDoubleClick}) {

    return (
        <div
            className={task.reminder === true ? 'task mt-4' : 'task mt-4 border border-success'}
            onDoubleClick={() => onDoubleClick(task.id)}>
            <div key={task.id}>
                <h4 className="d-flex justify-content-between w-100">
                    <div>{task.do} </div>
                    <div>
                        <FaTimes onClick={() => onDelete(task.id)}
                                 style={{color: 'white', cursor: 'pointer', width: '10px'}}/>
                    </div>
                </h4>
                <p>{task.dayTime}</p>

            </div>
        </div>
    )
}

export default Task