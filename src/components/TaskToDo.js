import React, {useEffect, useState} from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";
import TaskIdCom from "./TaskIdCom";
import Task from "./Task";
import TaskStatus from "./TaskStatus";
import EditTask from "./EditTask";
import ClearTask from "./ClearTask";

const TaskToDo = () => {
    const [tasks, setTasks] = useState([])
    const [colorOption, setColorOption] = useState('')
    const [save, setSave] = useState(true)
    const [selectId, setSelectId] = useState(null)
    const [ev, setEv] = useState(null)

    useEffect(() => {
        axios('https://64e2ee93bac46e480e77eb43.mockapi.io/todo')
            .then(({data}) => setTasks(data))
    }, []);


    const handleColor = (task, event) => {
        if (event.target.value === '1'){
            setColorOption('grey')
        }
        else if (event.target.value === '2') {
            setColorOption('gold')
        }
        else if (event.target.value === '3'){
            setColorOption('green')
        }
        const newDate = {...task, status : colorOption}
        axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${task.id}`, newDate)
            .then(({data}) => {
                tasks.map(data => task.id === data.id ? newDate : data)
            } )
    }

    const handleEdit = (task) => {
        setSave(!save)
    }

    const handleSave = (taskOld, event) => {
        if (ev){
            const newDate = {...taskOld, selectValue : ev}
            axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${taskOld.id}`, newDate)
                .then(({data}) => {
                    tasks.map(task => taskOld.id === data.id ? newDate : data)
                } )
        }

        setSave(!save)
    }

    return (
        tasks.map(task => {
            return (
                <div key={task.id} className={'row taskContainer'}>
                    <div className="col-12">
                        <div className="row">
                            <TaskIdCom task={task}/>
                            <Task task={task} />
                            <TaskStatus task={task}
                                        colorOption={colorOption}
                                        handleColor={handleColor}
                                        save={save}
                                        setSelectId={setSelectId}
                                        handleSave={handleSave}
                                        setEv={setEv}
                                        ev={ev}
                            />
                            <EditTask task={task} handleSave={handleSave} save={save} handleEdit={handleEdit}/>
                            <ClearTask />
                        </div>
                    </div>
                </div>
            )
        })
    );
};

export default TaskToDo;