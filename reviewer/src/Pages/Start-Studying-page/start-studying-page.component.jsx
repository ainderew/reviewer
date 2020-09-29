import React, { useState } from "react";
import Styles from "./start-studying-page.module.scss";

//COMPONENTS
import SubjectSummaryContainer from "../../Components/Subject-Summary-Container/subject-summary-container.component";
import SubjectContainer from "../../Components/Subject-Container/subject-container.component";
import AddSubjectModal from "../../Components/Add-Subject-Modal/add-subject.component";

const StartStudyingPage = () => {
  const [ADD_SUBJECT_MODAL_STATE, setSubjectModalState] = useState(false);

  const toggleSubjectModalState = () =>{
    setSubjectModalState(prevState => !prevState)
  }

  return (
    <div className={`screen ${Styles.homeScreen}`}>
      {ADD_SUBJECT_MODAL_STATE ? <AddSubjectModal MODAL_STATE={ADD_SUBJECT_MODAL_STATE} toggleModalState={toggleSubjectModalState} /> : null}

      <div className={Styles.upper}>
        <h1 className={`opacityIn ${Styles.upperText}`}>
          Here are your subjects
        </h1>
      </div>
      <div className={`lowerSlideUp ${Styles.lower}`}>
        <div className={`${Styles.lowerInner}`}>
          <SubjectSummaryContainer />
          <SubjectContainer toggleModalState={toggleSubjectModalState} />
        </div>
      </div>
    </div>
  );
};

export default StartStudyingPage;
