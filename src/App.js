import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeaderToDo from "./components/HeaderToDo";
import TaskToDo from "./components/TaskToDo";
import task from "./components/Task";
import TaskTr from "./components/TaskTr";

const App = () => {
    const [inputHeader, setInputHeader] = useState('')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios('https://64e2ee93bac46e480e77eb43.mockapi.io/todo')
            .then(({data}) => setTasks(data))
    }, []);

    const handleAdd = () => {
        {inputHeader &&
            axios.post(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo`, {task: inputHeader, status : '1'})
                .then(({data}) => {
                    setTasks([...tasks, data])
                    setInputHeader('')
                },[])
        }
    }

    return (
        <>
            <div key={task.id} className="container">
                <h1>TODO List Demo App</h1>
                <HeaderToDo setInputHeader={setInputHeader} inputHeader={inputHeader} handleAdd={handleAdd} />
                <div key={task.id} className={'row taskContainer'}>
                    {
                        tasks.map(task => {
                            return (
                                    <TaskTr task={task} tasks={tasks} setTasks={setTasks} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default App;