import React from 'react';

const ClearTask = ({handleDelete}) => {
    return (
        <div className="col-1_5">
            <div className="box">
                <button onClick={event => handleDelete()} className={'deleteBtn'}>❌</button>
            </div>
        </div>
    );
};

export default ClearTask;