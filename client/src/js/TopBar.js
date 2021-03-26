import React from 'react';
import {rootPath} from './utils';
import {Link} from "react-router-dom";
import styles from '../css/framestyle.css'


function TopBar(){

    return (
        <ul className={styles.navList}>
            <li className={`${styles.navListElement} ${styles.pushLeft}`}>
                <Link to={"/"}>
                    Home
                </Link>
            </li>
            <li className={styles.navListElement}>
                <Link to={"/about"}>
                    About
                </Link>
            </li>
            <li className={styles.navListElement}>
                <Link to={"/resume"}>
                    Resume
                </Link>
            </li>
            <li className={styles.navListElement}>
                <Link to={"/projects"}>
                    Projects
                </Link>
            </li>
        </ul>
    );



}

export {TopBar};
