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
import hstyle from '../css/homepage.css';
import {TopBar} from "./TopBar";

function HomePage() {


  return (
      <div>
        <div className={fstyle.outerBox}>
          <TopBar/>
          <div className={hstyle.mainBox}>
            <div>
              <div className={hstyle.textSlideLeft}>
                Welcome,
              </div>
            </div>
            <div>
              <div>
                <div className={hstyle.textSlideRight}>
                  this is Rick Michael's portfolio
                </div>
              </div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
  )
}

export {HomePage};
