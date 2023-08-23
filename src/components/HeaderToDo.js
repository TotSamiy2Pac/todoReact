import React from 'react';
import App from "../App";
const HeaderToDo = ({setInputHeader, inputHeader, handleAdd}) => {
    const handleInputHeader = (event) => {
        setInputHeader(event.target.value)
    }

    return (
        <div className={'header_todo'}>
            <div className="row">
                <div className="col-10">
                    <input value={inputHeader} onChange={event => handleInputHeader(event)} className={'inputHeader'} type="text" placeholder={'Your Task.....'}/>
                </div>
                <div className="col-2">
                    <button onClick={event => handleAdd() } className={'addBtn'}>Add Task</button>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <div className="box">
                        <p>#</p>
                    </div>
                </div>
                <div className="col-5_5">
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
                <div className="col-1">
                    <div className="box">
                        <p>Chek</p>
                    </div>
                </div>
                <div className="col-1_5">
                    <div className="box">
                        <p>Remove</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderToDo;