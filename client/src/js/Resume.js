import React from 'react';
import {
  useLocation,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import rstyle from '../css/resume.css'
import fstyle from '../css/framestyle.css'
import {TopBar} from "./TopBar";

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
            window.location = mailto;
            e.preventDefault();
          }}
      >
        {label}
      </Link>
  );
};

function Resume() {

  return (
      <div>
        <div className={fstyle.outerBox}>
          <TopBar/>
        </div>
        <div className={rstyle.mainBox}>
          <div className={rstyle.topName}>
            Richard Michael
          </div>
          <p style={{alignItems: "center"}}>(415) 706 &ndash; 5054 | <ButtonMailto label="rmmichae@uci.edu" mailto="mailto:rmmichae@uci.edu" /> | <a href={"rickmichael.me"}>rickmichael.me</a> | <a href={"linkedin.com/in/richard-michael-401957b9"}>linkedin</a></p>
          <p><strong><u>Education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </u></strong></p>
          <div className={rstyle.topInfo}>
            <a href="mailto:rmmichae@uci.edu">
              rmmichae@uci.edu
            </a>
            | (415) 706 - 5054
          </div>
          <div>
            <p className={rstyle.firstp}><span className={rstyle.fs}>Richard Michael</span></p>
            <h3>Education</h3>
            <div className={rstyle.alignBox}>
            <h4 className={rstyle.lefta}>University of California Irvine</h4>
            <span className={rstyle.righta}>Irvine, CA</span>
            </div>
            <div className={rstyle.alignBox}>
              <span className={rstyle.lefta}>
                Bachelor of Science, Computer Science (gpa: 3.55)
              </span>
              <span>

              </span>
            </div>

            <h4>Notable Courses</h4>
            <p>
              Computer Networks, Database Management, Compilers & Interpreters, Artificial Intelligence, Operating Systems,
              Computational Geometry, Computer Architecture
            </p>
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <p>Java, Python, C++, C, Javascript, SQL, HTML, CSS </p>
            <h4>Frameworks & Tools</h4>
            <p>React, Django, Maven, Gradle, Spring, Node, Webpack, JavaFX, Nginx, Venv, Git, AWS, Google Cloud, Angular</p>
            <h3>Experience</h3>
            <h4>Sever Design and Management Lead</h4>
            <p><em>UCI UAV Forge, Irvine, CA Sept - June 2020</em></p>
            <ul>
              <li>Full deployment and documentation of a client-server drone application using Django, Nginx, Postgres Sql, and Angular</li>
            </ul>
            <h4>Lead Contributer</h4>
            <p><em>UT MSCSO Course Review Website, Irvine, CA Sept - Current 2020</em></p>
            <ul>
              <li>Wrote back and frontend for a course review website using heroku, nodejs and react</li>
            </ul>
            <h3>Projects</h3>
            <h4>Fabflix Movie Website</h4>
            <ul>
              <li>Developed a movie website of 20 thousand movies which included full-text search, auto-complete, login and redirection,
                password encrytion, checkout, and advanced browse features </li>
              <li>implemented connection pooling and master slave database design</li>
              <li>Wrote a SAX XML parser that read XML, sorted data, and input them to mysql using batch insert</li>
              <li>Designed a compact version of the website and launched it on the Andoid platform</li>
              <li>Wrote a python program to parse imdb for data and images, then store in database</li>
            </ul>
            <h4>Distribution Fit</h4>
            <ul>
              <li>Used Chi-Squared and KS test to compare a set of data to exponential uniform or normal distribution</li>
              <li>Used matplotlib to output a graph to visually show line comparison</li>
              <li>Made good use of class abstraction which made for easy addition of any further line comparison tests</li>
            </ul>
            <h4>Company Disk/Printer Manager</h4>
            <ul>
              <li>Wrote a program which simulates user interaction with disk read/write and printers</li>
              <li>Implemented with threads and a socket manager to simulate individual software processes</li>
              <li>Completed with a frontend using javaFX that shows what the user is doing and read/write or print time to completion</li>
            </ul>
            <h4>Crux Compiler</h4>
            <ul>
              <li>A program written in java that compiles files written in the crux language and assembles with x86</li>
              <li>The compiler handles types, while and if else blocks, multi-dimension arrays, recursion, system functions written in C </li>
              <li>The compiler uses the visit strategy to parse, using polymorphism to only need one "visit" function</li>
            </ul>
            <h4>Crux Compiler</h4>
            <ul>
              <li>A program written in java that compiles files written in the crux language and assembles with x86</li>
              <li>The compiler handles types, while and if else blocks, multi-dimension arrays, recursion, system functions written in C </li>
              <li>The compiler uses the visit strategy to parse, using polymorphism to only need one "visit" function</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export {Resume};
