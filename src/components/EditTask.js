import React, {useState} from 'react';

const EditTask = ({handleSave,save, handleEdit,task}) => {

    return (
        <div className="col-1">
            <div className="box">
                <button className={'editBtn'} disabled={task.statusDisabled} onClick={(e) => save ? handleEdit(task) : handleSave(task)}>
                    {save?
                        '✎'
                        :
                        'save'
                    }
                </button>
            </div>
        </div>
    );
};

export default EditTask;