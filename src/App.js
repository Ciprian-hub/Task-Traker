import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const dummyTasks = [
        {
            id: 1,
            do: 'Take trash',
            status: 'done',
        },
        {
            id: 2,
            do: 'Eat',
            status: 'pending'
        },
        {
            id: 3,
            do: 'Do dishes',
            status: 'to do',
        }
    ]

    const [tasks, setTasks] = useState([...dummyTasks])

    return (
        <div className="App text-white mx-auto p-5 rounded mt-5">
            <Header title="Task Tracker"/>
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;
