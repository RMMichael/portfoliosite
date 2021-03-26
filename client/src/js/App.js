import React from 'react';
import {rootPath} from './utils';
import {ProjectPage} from './ProjectPage';
import {
  useLocation,
  Redirect,
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {ProjectContent} from './ProjectContent';
import {HomePage} from './HomePage';
import {Resume} from './Resume'
import {About} from "./About";

function App() {

  return (
    <>
      {/*<CssBaseline />*/}
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/projects">
              <ProjectPage/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/resume">
              <Resume/>
            </Route>
             <Route key="projectPage" path="/:name+" component={ProjectContent} >
            </Route>

          </Switch>
      </BrowserRouter>
    </>
  );
}


export default App;
