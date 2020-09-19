import React from 'react';
import ReactDOM from 'react-dom';
import './Scss/global.styles.scss';

import MainContainer from "./Main-Container/main-container.component";

const startApp = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <MainContainer />
    </React.StrictMode>,
    document.getElementById('root')
  );
}




if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}
