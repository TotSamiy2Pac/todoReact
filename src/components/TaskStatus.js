import React, {useState} from 'react';

const TaskStatus = ({task, save, setStatus, status}) => {


    const handleTaskStatus = (event) => {
        setStatus(event.target.value)
    }
    return (
        <div key={task.id} className="col-2">
            <div className="box">
                <select
                    className={task.status === '2' ? 'gold' : task.status === '3' ? 'green' : 'black'}
                    key={task.id}
                        defaultValue={task.status}
                        onChange={event => {
                            handleTaskStatus(event)
                    }}
                    style={{borderColor: 'colorOption'}}
                    disabled={save}
                >
                    <option value='1'>Todo</option>
                    <option value="2">In Progress</option>
                    <option value="3">Complete</option>
                </select>
            </div>
        </div>
    );
};

export default TaskStatus;