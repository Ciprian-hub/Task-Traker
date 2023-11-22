import {useState} from "react";

function AddTask({onAdd}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    function onSubmit  (e)  {
        e.preventDefault()

        if(!text) {
            alert('Fill the form')
        }
        onAdd({text, day, setDay})

        setText("")
        setDay("")
        setReminder(false)

    }

    return (
        <div className="text-left">
            <form onSubmit={onSubmit}>
                <div className="mt-4">
                    <label htmlFor="todo">Task</label>
                    <input type="text"
                           name="todo"
                           className="form-control"
                           value={text}
                           onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="dayTime">Day and Time</label>
                    <input type="text" name="dayTime"
                           className="form-control"
                           id="dayTime"
                           value={day}
                           onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div className="form-check mt-4">
                    <input className="form-check-input"
                           type="checkbox"
                           checked={reminder}
                           onChange={(e) => setReminder(e.currentTarget.checked)}
                           id="inlineCheckbox1"/>
                    <label className="form-check-label"
                           htmlFor="inlineCheckbox1">Reminder</label>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Save</button>
            </form>
        </div>
    );
}

export default AddTask;