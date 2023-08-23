import React, {useState} from 'react';

const TaskStatus = ({task, handleColor, colorOption, save, handleSave, setEv, ev}) => {
    // console.log(save)
    return (
        <div key={task.id} className="col-2">
            <div className="box">
                <select key={task.id}
                        defaultValue={task.selectValue}
                        onChange={event => {
                            setEv(event.target.value)
                            handleColor(task, event)
                    }}
                    style={{borderColor: colorOption}}
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