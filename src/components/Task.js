import React, {useState} from 'react';

const Task = ({task, save, nameTask, setNameTask}) => {
    const handleNameTask = (e) => {
        setNameTask(e.target.value)
    }
    return (
        <div className="col-5_5">
            <div className="box">
                { save ?
                    <p>{task.task}</p>
                    :
                    <input onChange={event => handleNameTask(event)} type="text" defaultValue={task.task}/>
                }
            </div>
        </div>
    );
};

export default Task;