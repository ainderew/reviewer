import React, {useState} from "react"
import Styles from "./subject-container.module.scss";

const SubjectContainer = ({toggleModalState}) =>{
    const [subjects,setSubjects] = useState(false);
    

    return(
        <div className={`${Styles.container}`}>
            {subjects ? null : <button onClick={toggleModalState} className={`${Styles.addBtn}`} >Add Subject</button>}
        </div>
    )
}

export default SubjectContainer;