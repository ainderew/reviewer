import React from "react"
import Styles from "./add-subject.module.scss";

//IMAGES
import CloseIcon from "../../Assets/Icons/close.svg"

const AddSubjectModal = ({toggleModalState}) =>{
    return(
        <div className={`lowerSlideUp_Modal ${Styles.modal}`}>
            <img onClick={toggleModalState} src={CloseIcon} alt="close button" className={Styles.closeBtn}/>
        </div>
    )
}

export default AddSubjectModal;