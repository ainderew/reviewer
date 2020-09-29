import React from "react";
import Styles from "./home-page.module.scss";
import {Link} from "react-router-dom"

//COMPONENTS
import TaskContainer from "../../Components/Task-Container/task-container.component";

//IMAGES
import beeCreature from "../../Assets/Creatures/avatar.svg";

const HomePage = () => {
  return (
    <div className={`screen ${Styles.homeScreen}`}>
      <div className={Styles.upper}>
        <img src={beeCreature} alt="cute bee" className={Styles.beeCreature} />
        <h1 className={Styles.welcomeMessage}>
          Hello <span className={Styles.user}>Andrew</span> you have <br />
          <span className={Styles.numberOfTasks}>1</span>{" "}
          <span className={Styles.Assignment}>Assignment</span> due
        </h1>
      </div>
      <div className={`lowerSlideUp ${Styles.lower}`}>
        <div className={`${Styles.lowerInner}`}>
          
          <div className={`bottom-spacer-2rem ${Styles.studyButtonContainer}`}>
            <Link to="/StartStudying">
              <button className={`${Styles.studyButton} ${Styles.studyStartButton}`}>Start Studying</button>
              </Link>
            <button className={Styles.studyButton}>Edit Study Plan</button>
          </div>

          <TaskContainer />
          
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
