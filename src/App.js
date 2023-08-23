import React from 'react';
import axios from "axios";
import HeaderToDo from "./components/HeaderToDo";
import TaskToDo from "./components/TaskToDo";

const App = () => {
    return (
        <>
            <div className="container">
                <h1>TODO List Demo App</h1>
                <HeaderToDo />
                <TaskToDo />
            </div>
        </>
    );
};

export default App;