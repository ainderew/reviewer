import React from "react";
import Styles from "./home-page.module.scss";

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
      <div className={`center ${Styles.lower}`}>
        <div className={`${Styles.lowerInner}`}>
          
          <div className={Styles.studyButtonContainer}>
            <button className={`${Styles.studyButton} ${Styles.studyStartButton}`}>Start Studying</button>
            <button className={Styles.studyButton}>Edit Study Plan</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;