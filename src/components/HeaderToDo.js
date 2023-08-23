import React from 'react';

const HeaderToDo = () => {
    return (
        
        <div className={'header_todo'}>
            <div className="row">
                <div className="col-10">
                    <input className={'inputHeader'} type="text" placeholder={'Your Task.....'}/>
                </div>
                <div className="col-2">
                    <button className={'addBtn'}>Add Task</button>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <div className="box">
                        <p>#</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box">
                        <p>Task Name</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="box">
                        <p>Status</p>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box">
                        <p>Edit</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="box">
                        <p>Remove</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderToDo;