import React from "react"
import Styles from "./task-none.module.scss";

const NoTask = () =>{
    return(
        <div className={`${Styles.task}`}>
            <span className={Styles.text}>No Tasks For Today</span>
        </div>
    )
}

export default NoTask;