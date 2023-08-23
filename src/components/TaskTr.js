import React, {useState} from 'react';
import TaskIdCom from "./TaskIdCom";
import Task from "./Task";
import TaskStatus from "./TaskStatus";
import EditTask from "./EditTask";
import ClearTask from "./ClearTask";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import ChekBox from "./ChekBox";

const TaskTr = ({task, setTasks, tasks}) => {
    const [save, setSave] = useState(true)
    const [nameTask, setNameTask] = useState('')
    const [status, setStatus] = useState('')
    const [chek, setChek] = useState(false)
    const handleEdit = () => {
        setNameTask(task.task)
        setStatus(task.status)
        setSave(!save)
    }
    const handleSave =  () => {

        if (status === '3') {
            const newData = {...task, task : nameTask, status : status, statusDisabled : true}
            axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${task.id}`, newData)
                .then(({data}) => {
                    setTasks(tasks.map(elem => elem.id === task.id ? data : elem))
                },[])
        }
        else {
            const newData = {...task, task : nameTask, status : status, statusDisabled : false}
            axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${task.id}`, newData)
                .then(({data}) => {
                    setTasks(tasks.map(elem => elem.id === task.id ? data : elem))
                },[])
        }

        // const newData = {...task, task : nameTask, status : status}
        //  axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${task.id}`, newData)
        //     .then(({data}) => {
        //         setTasks(tasks.map(elem => elem.id === task.id ? data : elem))
        //     },[])
        setSave(!save)
        console.log(status)
        // if (status === '3'){
        //     handleChekComplete()
        // }
        // console.log(newData)
    }
    const handleDelete = () => {
        axios.delete(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${task.id}`)
            .then(({data}) => {
                setTasks(tasks.filter(task => task.id !== data.id))
        })
    }

    const handleChek = (event) => {
        // console.log(event)
        const newDate = {...task, statusDisabled : event.target.checked}
        axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${task.id}`, newDate)
            .then(({data}) => {
                setTasks(tasks.map(task => task.id === data.id ? data : task))
        })
    }
    const handleChekComplete = () => {
        console.log('zapusk')
        // const newDate = {...task, statusDisabled : true}
        // axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/todo/${task.id}`, newDate)
        //     .then(({data}) => {
        //         setTasks(tasks.map(task => task.id === data.id ? data : task))
        //     })
    }

    return (
        <div key={task.id} className="col-12">
            <div className="row">
                <TaskIdCom task={task}/>
                <Task
                    task={task}
                    save={save}
                    nameTask={nameTask}
                    setNameTask={setNameTask}
                />
                <TaskStatus
                    task={task}
                    save={save}
                    setStatus={setStatus}
                    status={status}
                />
                <EditTask
                    task={task} save={save}
                    handleSave={handleSave}
                    handleEdit={handleEdit}
                />
                <ChekBox
                    task={task}
                    handleChek={handleChek}
                />
                <ClearTask handleDelete={handleDelete}/>
            </div>
        </div>
    );
};

export default TaskTr;