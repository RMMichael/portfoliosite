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
          <div className={rstyle.topInfo}>
            <p style={{alignItems: "center"}}>(415) 706 &ndash; 5054 | <ButtonMailto label="rmmichae@uci.edu" mailto="mailto:rmmichae@uci.edu" /> | <a href={"https://rickmichael.dev"}>hhtps://www.rickmichael.dev</a> | <a href={"https://linkedin.com/in/richard-michael-401957b9"}>linkedin</a></p>
          </div>
          <div>
            <h3>Education</h3>
            <div className={rstyle.alignBox}>
            <h4>University of California Irvine</h4>
            <span>Irvine, CA</span>
            </div>
            <div className={rstyle.alignBox}>
              <p>
                Bachelor of Science, Computer Science (gpa: 3.55)
              </p>
              <span>
                <b>Sept. 2018 - June 2021</b>
              </span>
            </div>

            <h3>Experience</h3>
            <div className={rstyle.alignBox}>
              <h4>Associate Java Developer</h4>
              <span>
                <b>Mar. 2022 – Aug. 2022</b>
              </span>
            </div>
            <div className={rstyle.alignBox}>
              <p className={rstyle.titleinfo}><i>Infosys LTD | Java Angullar Javascript MySQL-Server JUint certifications</i></p>
              <span><i>Irvine, CA</i></span>
            </div>
            <ul>
              <li>Developed RESTful APIs with Spring backends Angular or React and frontends</li>
              <li>Implemented a project which had account management, registration system, and purchases</li>
            </ul>
            <div className={rstyle.alignBox}>
            <h4>Head Client-Server Architecture Specialist</h4>
              <span>
                <b>Sept. 2020 – June 2020</b>
              </span>
            </div>
            <div className={rstyle.alignBox}>
              <p className={rstyle.titleinfo}><i>UCI UAV Forge | Python Dronekit Docker-Compose</i></p>
              <span><i>Irvine, CA</i></span>
            </div>
            <ul>
              <li>Full deployment and documentation of a drone - client – server communication protocol</li>
              <li>Worked extensively with Django, docker, and drone kit, as well as ran tests</li>
              <li>Configured a drone simulator using px4 which mock tested the entire data flow</li>
              <li>Attended weekly meetings and held private conferences with group members</li>
            </ul>
            <div className={rstyle.alignBox}>
            <h4>Web Platform Lead Contributor</h4>
              <span><b>Jan. 2021 - Current</b></span>
            </div>
            <div className={rstyle.alignBox}>
            <p className={rstyle.titleinfo}><i>UT MSCSO Course Review Website | Node/Express Nginx Postgresql GCP React</i></p>
              <span><i>Irvine, CA</i></span>
            </div>
            <ul>
              <li>One of two main members who designed and implemented a full stack review website</li>
              <li>The site handles credential login check, manages profiles and content</li>
              <li>Fully implemented on docker compose and launched/managed with Kubernetes</li>
            </ul>
            <h3>Projects</h3>
            <div className={rstyle.alignBox}>
              <h4>Fabflix Movie Website</h4>
              <span><b>Mar. 2020 - June 2020</b></span>
            </div>
            <div className={rstyle.alignBox}>
              <p className={rstyle.titleinfo}><i>Project In Web Applications | Java Spring-boot React AWS MySQL Material-UI Maven Gradle ReCAPTCHA</i></p>
            </div>
            <ul>
              <li>Developed a movie website of 20 thousand movies managed by fast, secure mysql queries</li>
              <li>Features included full-text search, auto-complete, login and redirection, password encryption, checkout, and advanced browse tools</li>
              <li>Implemented connection pooling, server threading, and master slave database design</li>
              <li>Wrote a SAX XML parser that read XML, sorted data, and uploaded it to mysql using batch insert</li>
              <li>Designed a compact version of the website and launched it on the Andoid platform</li>
              <li>Wrote a python program to parse imdb for data and images, then store in database</li>
            </ul>
            <div className={rstyle.alignBox}>
              <h4>Web Crawler / Indexer / Search</h4>
              <span><b>Jan. 2021</b></span>
            </div>
            <div className={rstyle.alignBox}>
              <p className={rstyle.titleinfo}><i>Information Retrieval | Python Flask Pytest</i></p>
            </div>
            <ul>
              <li>Implemented a web crawler using frontier/worker layout, sim hash, stemming, and politeness</li>
              <li>Designed an indexer which managed memory using batch insert and n-way file merge</li>
              <li>Designed a search tool which used huge, on-disk files to retrieve information in O(logn) or O(1) time</li>
              <li>All programs made heavy use of threading and locks to significantly improve time</li>
              <li>A browser version gui which used the flask framework</li>
            </ul>
            <div className={rstyle.alignBox}>
              <h4>Crux Compiler</h4>
              <span><b>Jan. 2020</b></span>
            </div>
            <div className={rstyle.alignBox}>
              <p className={rstyle.titleinfo}><i>Compilers | Java Maven</i></p>
            </div>
            <ul>
              <li>A program written in java that compiles files written in the crux language and assembles with x86</li>
              <li>The compiler handles types, while & if else blocks, multi-dimension arrays, recursion, and system calls</li>
              <li>The compiler uses polymorphism and the “visit” strategy, needing only one function to parse a tree</li>
            </ul>
            <div className={rstyle.alignBox}>
              <h4>Personal Portfolio Website</h4>
              <span><b>Oct. 2020</b></span>
            </div>
            <div className={rstyle.alignBox}>
              <p className={rstyle.titleinfo}><i>Self | Docker-Compose React Django GCP Nginx CSS Gunicorn</i></p>
            </div>
            <ul>
              <li>A public website, rickmichael.me, from which I can display source code, a resume, and about me</li>
              <li>Configured a project display which allows anyone to see the code I have written</li>
            </ul>
            <div className={rstyle.alignBox}>
              <h4>Operating Systems</h4>
              <span><b>Sept. 2020 – June 2021</b></span>
            </div>
            <div className={rstyle.alignBox}>
              <p className={rstyle.titleinfo}><i>Three Courses | C Cmake GCC XV6 ELF</i></p>
            </div>
            <ul>
              <li>Studied the xv6 operating system, implemented new system calls, and wrote/load elf files</li>
              <li>Wrote a shell with redirection, piping, history, globbing, and background tasks, and exceptions</li>
              <li>Implemented a file memory management program which simulated blocks caching, lookups, and reading from disk</li>
            </ul>
            <div className={rstyle.alignBox}>
              <h4>Company Disk/Printer Manager</h4>
              <span><b>Sept. 2019</b></span>
            </div>

            <ul>
              <li>Wrote a program which simulates user interaction with disk read/write and printers</li>
              <li>Implemented with threads and a socket manager to simulate individual software processes</li>
              <li>Completed with a frontend using javaFX that shows what the user is doing and read/write or print time to completion</li>
            </ul>
            <h3>Other Releval Skills & Coursework</h3>
            <h4>Proficient Languages</h4>
            <p>Java Javascript Python C++ C CSS HTML SQL NoSQL</p>
            <h4>Frameworks & Tools</h4>
            <p>GCP AWS Webpack Venv Git JavaFX Angular Nginx Apache/Tomcat Maven, Mongodb, Post</p>
            <h4>Coursework</h4>
            <p>Relational Databases, NoSQL, Algorithms (graphs, computational geometry, general, AI)
              Computer Networks, Computer Architecture(UCI & UCB)
            </p>
          </div>
        </div>
      </div>
  )
}

export {Resume};
