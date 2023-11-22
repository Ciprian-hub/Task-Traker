import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const dummyTasks = [
        {
            id: 1,
            do: 'Take trash',
            status: 'done',
            reminder: false,
            dayTime: 'Feb 03 at 13:00'
        },
        {
            id: 2,
            do: 'Eat',
            status: 'pending',
            reminder: false,
            dayTime: 'Feb 03 at 13:00'
        },
        {
            id: 3,
            do: 'Do dishes',
            status: 'to do',
            reminder: false,
            dayTime: 'Feb 03 at 13:00'
        }
    ]

    const [tasks, setTasks] = useState([...dummyTasks])

    const deleteTask = (id) => {
        console.log(id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleDoubleClick = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
        console.log(task)
    }

    return (
        <div className="App text-white mx-auto p-5 rounded mt-5">
            <Header title="Task Tracker"/>
            <AddTask onAdd={addTask}/>
            {
                tasks.length > 0 ?
                    <Tasks tasks={tasks}
                           onDelete={deleteTask} onDoubleClick={handleDoubleClick}
                    /> : 'No tasks yet'
            }
        </div>
    );
}

export default App;
