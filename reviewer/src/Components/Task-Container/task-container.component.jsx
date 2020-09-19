import React from "react"
import Styles from "./task-container.module.scss";

//COMPONENT
import Task from "../Task/task.component";
import NoTask from "../Task-None/task-none.component";

const TaskContainer = () =>{
    return(
        <div className={Styles.container}>
            <NoTask />
        </div>
    )
}

export default TaskContainer;