import React from 'react';
import {
  useLocation,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {TopBar} from './TopBar'
import fstyle from '../css/framestyle.css'
import pstyle from '../css/projects.css'

function ProjectPage() {

    return (
        <div>
          <div className={fstyle.outerBox}>
                <div>
                    <TopBar/>
                </div>
                <div className={pstyle.projectListBox}>
                        <Projectlist/>
                </div>
          </div>
        </div>
    );
}

function Projectlist() {
      const data = [
        {
          title: "Crux Compiler",
          desc: "A compiler written for the crux coding language and assembled using x86 Handles primitive integer types, boolean, " +
              "multi-dimension arrays, if-else blocks and while loops.",
          spec : "Java Jar Maven"
        },
        {
          title: "Personal Website",
          desc: "This very website which features playful css, a full display of my own code, an about, and resume section",
          spec: "React Django Nginx Google-Cloud Docker-Compose"
        },
        {
          title: "Complete Web Crawler, Index, and Search",
          desc: "This file includes two projects. A web crawler which caches webpages and filters or categorizes them into various categories.." +
              "A complete, read from disk, indexer and search engine, which utilizes many optimizations including N-way file merges, threading.",
          spec : "Python Threading"
        },
        {
          title: "UT Reviews",
          desc: "This project is a freelance project that allows students to review and post about their experiences with courses at their university",
          spec : "Javascript Node React AWS Postgresql Docker-Compose"
        },
        {
          title: "Fabflix Web Platform",
          desc: "This project has three parts. A browser website for searching movies equipped with login and redirection, " +
              "autocomplete and full-text search, employee login and middleware, and checkout. A SAX parser for reading XMLand inserting " +
              "into mysql database. And a simple android app version which converts the website to mobile.",
          spec : "Java Javascript XML Mysql Apache Apache-Tomcat React SpringBoot Android AWS Google Cloud"
        },
        {
          title: "Interop UAV Project",
          desc: "This program is a large project which involes a mechanical UAV that interacts with a backend to relay flight data and images. " +
              "I worked on the design of the client which uses threading and interacts with a server, dronekit, and UAV using maxproxy",
          spec : "Python Django Nginx Venv Docker Protobuf Postgres Angular Dronekit Mavproxy"
        },
        {
          title: "Op Systems",
          desc:["This file consists of a hand full of projects in OS.",
              "1. An interactive shell with redirection, piping, history, globbing, and background tasks",
              "2. A complete file manager written in c which mimics disk access and memory storage",
              "3. A system call addition to the XV6 operating system",
              "4. A program that reads and executes elf files"],
          spec : "C Makefile cmake"
        },
        {
          title: "Company Disk&Printer Manager",
          desc: "This multithreaded program dynamically sets the number of users and printers available and manages users connecting to the " +
              "disk to read, save, or print data. The implmentaion uses a lockto ensure conflicts dont occur. The program is built with a front end " +
              "using javaFX.",
          spec : "Java JavaFX"
        },
        {
          title: "Data Structures",
          desc: ["This multi-program library showcases", "1. A sorting study comparing shell, merge, quick, and hybrid sort", "2. A bin packing study between first, next, and best fit done with a zip tree",
            "3. an iterative AVL tree", "4. a quicksort using dutch flag implementation"],
          spec : "C++ AVLTree Quicksort ZipTree Mergesort"
        },
        {
          title: "Web Work",
          desc: ["This section holds two web projects", "1. A tweet report which speedily sorts and sifts all tweets of a fitness app then allows the user to search or view analytics",
            "2. A UI for spotify using its API. The user is able to use 5 pages including log in/profile, search by artist, album, or genre, then view their respective pages",
            "3. A mobile based app which allows a user to track sleep data with a questionaire then stores and displays the analytics of the data"],
          spec: "Angular Ionic"
        },
        {
          title: "Distribution Fit",
          desc: "A program that fits plotted data against exponential, uniform, and normal distributions. " +
              "It uses a Chi Squared test and Kolmogorov–Smirnov test to determine closeness and prints a graph to screen using matplotlib " +
              "that shows a graph of the actual data and the distribution being compared",
          spec : "Python Matplotlib"
        },


    ];

    return (
        <>
            {data.map( title => <InnerBox key={title.title} {...title}></InnerBox>)}
        </>
    );
}

function InnerBox(props) {
    if (props.title === "Operating Systems Projects" || props.title === "Data Structures" || props.title === "Web Work") {
      return (
          <div className={pstyle.mainListItem}>
            <div className={pstyle.projectTitle}>
              <Link to={"/" + props.title}>
                <h2>{props.title}</h2>
              </Link>
            </div>
            <div className={pstyle.projectDescription}>
              {
                props.desc.map( line => {
                  return (
                      <div>
                        {line}
                      </div>
                  );
                })}
            </div>
            <div className={pstyle.projectComponents}>
              {props.spec}
            </div>
          </div>)
    } else {
      return (
          <div className={pstyle.mainListItem}>
            <div className={pstyle.projectTitle}>
              <Link to={"/" + props.title}>
                <h2>{props.title}</h2>
              </Link>
            </div>
            <div className={pstyle.projectDescription}>
              {props.desc}
            </div>
            <div className={pstyle.projectComponents}>
              {props.spec}
            </div>
          </div>
      );
    }

}

export {ProjectPage};
