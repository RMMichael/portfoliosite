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
          spec : "Java"
        },
        {
          title: "Complete Web Crawler, Index, and Search",
          desc: "This file includes two projects. A web crawler which caches webpages and filters or categorizes them into various categories.." +
              "A complete, read from disk, indexer and search engine, which utilizes many optimizations including N-way file merges, threading.",
          spec : "Python"
        },
        {
          title: "Course Review Site",
          desc: "This project is a freelance project that allows students to review and post about their experiences with courses at their university",
          spec : "Javascript Node React AWS"
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
              "I worked on the backend implementation and image weaving.",
          spec : "Python Django Nginx Venv Docker Protobuf Postgres Angular"
        },
        {
          title: "Operating Systems Projects",
          desc: "This file consists of a hand full of projects in OS.\n" +
              "1. An interactive shell with redirection, piping, history, globbing, and background tasks\n" +
              "2. A complete file manager written in c which mimics disk access and memory storage\n" +
              "3. A system call addition to the XV6 operating system\n" +
              "4. A program that reads and executes elf files",
          spec : "C Makefile cmake"
        },
        {
          title: "Company Disk/Printer Manager",
          desc: "This multithreaded program dynamically sets the number of users and printers available and manages users connecting to the " +
              "disk to read, save, or print data. The implmentaion uses a lockto ensure conflicts dont occur. The program is built with a front end " +
              "using javaFX.",
          spec : "Java JavaFX"
        },
        {
          title: "Data Structures",
          desc: "This multi-program library implements an iterative AVL tree, a quicksort using dutch flag implementation, and a linked list " +
              "library with various functions including mergesort.",
          spec : "C++ AVL Tree Quicksort Linked-list Mergesort"
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

export {ProjectPage};
