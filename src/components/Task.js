import React from 'react';

const Task = ({task}) => {
    return (
        <div className="col-6">
            <div className="box">
                <p>{task.task}</p>
            </div>
        </div>
    );
};

export default Task;