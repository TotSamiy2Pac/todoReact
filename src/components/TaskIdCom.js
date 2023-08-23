import React from 'react';

const TaskIdCom = ({task}) => {
    return (
        <div className="col-1">
            <div className="box">
                <p>{task.id}</p>
            </div>
        </div>
    );
};

export default TaskIdCom;