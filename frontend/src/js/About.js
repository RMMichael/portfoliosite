import React from 'react';
import {
  useLocation,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import fstyle from '../css/framestyle.css';
import astyle from '../css/about.css';
import {TopBar} from "./TopBar";
const portrait =  require('../images/selfimage.jpg');

function About() {
  return (
      <div>
        <div className={fstyle.outerBox}>
          <TopBar/>
          <div className={astyle.mainBox}>
            <div className={astyle.selfimage}>
              <img src={portrait} alt="Picture of Rick Michael"/>
            </div>
          </div>
        </div>
      </div>
  )

}

export {About};
