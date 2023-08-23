import React, {useEffect, useState} from 'react';
import axios from "axios";
import TaskTr from "./TaskTr";

const TaskToDo = ({inputHeader}) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios('https://64e2ee93bac46e480e77eb43.mockapi.io/todo')
            .then(({data}) => setTasks(data))
    }, []);


    return (
        tasks.map(task => {
            return (
                <div key={task.id} className={'row taskContainer'}>
                    <TaskTr task={task} tasks={tasks} setTasks={setTasks} />
                </div>
            )
        })
    );
};

export default TaskToDo;