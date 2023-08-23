import React from 'react';

const ChekBox = ({task, handleChek}) => {
    return (
        <div className="col-1">
            <div className="box">
                <input type="checkbox" checked={task.statusDisabled} onChange={event => handleChek(event)}/>
            </div>
        </div>    );
};

export default ChekBox;